/**
 * 数据表表格
 *
 * @param option
 * @constructor
 */
function DataTable(option) {
    if(!option) {
        return;
    }
    this.id = option['id'];
    this.fixable = option['fixable'];
    this.sortable = option['sortable'];
    this.selectable = option['selectable'];
    this.height = option['height'];
    this.data = option['data'];

    this.fieldList = [];

    var headers = option['headers'];

    for(var i = 0; i < headers.length; i++) {
        this.fieldList.push(new TableField(headers[i]));
    }

    // 按SortNum排序
    this.fieldList.sort(function(a, b) {
        return a.sortNum - b.sortNum;
    });
}

DataTable.prototype = {
    toString: function() {
        var styleStr = '';
        /*if(this.height) {
            styleStr += 'height:' + this.height + 'px'
        }*/
        var str = '<table id="' + this.id + '" class="" style="' + styleStr +'"><thead><tr><th style="width: 20px;background: none;border: none;"></th>';
        if(this.selectable) {
            str += '<th style="width:70px;">选择<img src="images/th_fix.jpg"/><img src="images/sort_asc.jpg"/></th>';
        }

        for(var i = 0; i < this.fieldList.length; i++) {
            var field = this.fieldList[i];
            if(field) {
                var style = '';
                if(field.width) {
                    style += 'width:' + field.width + 'px;';
                }

                var imgStr = '';
                if(this.fixable) {
                    imgStr += '<img src="images/th_fix.jpg"/>';
                }
                if(this.sortable) {
                    imgStr += '<img src="images/sort_asc.jpg"/>';
                }
                str += '<th style="' + style + '" align="center">' + field.displayName + imgStr + '</th>'
            }
        }

        str += '</tr></thead>';

        if(this.data) {
            str += '<tbody>';

            for(i = 0; i < this.data.length; i++) {
                str += '<tr><td><img src="images/tr_head.jpg"/></td>';
                if(this.selectable) {
                    str += '<td style="text-align: center;vertical-align: middle;"><input type="checkbox"/></td>';
                }
                style = '';

                for(var j = 0; j < this.fieldList.length; j++) {
                    field = this.fieldList[j];
                    var name = field.name;
                    var align = field.align;
                    if(!field.align) {
                        align = 'left';
                    }
                    style = 'text-align:' + align + ';';
                    str += '<td style="' + style + '">' + this.data[i][name] + '</td>'
                }
                str += '</tr>';
            }

            str += '</tbody>';
        }

        return str +'</table>';
    }
};

function TableField(header) {
    this.id = header['id'];
    this.name = header['name'];
    this.align = header['align'];
    this.displayName = header['displayName'];
    this.displayStyle = header['displayStyle'];
    this.isDisplay = header['isDisplay'];
    this.width = header['width'];
    this.isValid = header['isValid'];
    this.sortNum = header['sortNum'];
}


/**
 * 数据表单
 *
 * @param option
 * @param dictMap
 * @constructor
 */
function DataForm(option) {
    this.id = option['id'];
    this.name = option['name'];
    this.colCount = option['colCount'];
    this.colWidth = option['colWidth'];
    this.labelGap = option['labelGap'];
    this.fieldGap = option['fieldGap'];
    this.legend = option['legend'];
    this.fieldList = [];
    this.gridPane = new GridPane();
    this.fields = option['fields'];
    this.actionBar = option['actionBar'];
    this.width = 100 * this.colCount + this.colWidth * this.colCount + this.labelGap * this.colCount + (this.fieldGap - 1) * this.colCount;
    this.height = 0;
    this.fieldMap = {};
    this.hiddenList = []; // 隐藏域列表

    for(var i = 0; i < this.fields.length; i++) {
        var formField = this.fields[i];
        this.fieldList.push(new FormField(formField, this));
        this.fieldMap[formField['name']] = formField;
    }

    // 按SortNum排序
    this.fieldList.sort(function(a, b) {
        return a.sortNum - b.sortNum;
    });
}

DataForm.prototype = {
    init: function() {
        var formGrid = this.gridPane;

        var idxRow = 0;
        var idxCol = 0;
        var fieldList = this.fieldList;
        var field;
        this.hiddenList = []; // 初始化
        for(var i = 0; i < fieldList.length; i++) {
            field = fieldList[i];
            if(!field.isDisplay) { // 不显示
                this.hiddenList.push(field);
                continue;
            }

            if(field.isSingleLine) {
                idxRow++;
                formGrid.add(getLabelTd(field), idxRow, 0);
                formGrid.add(getGapTd(this.labelGap), idxRow, 1);
                formGrid.add(getInputNode(field, this.colCount), idxRow, 2);
                idxCol = 0;
                idxRow++;
                this.height += field.height;

                continue;
            }

            formGrid.add(getLabelTd(field), idxRow, idxCol++);
            formGrid.add(getGapTd(this.labelGap), idxRow, idxCol++);
            formGrid.add(getInputNode(field, this.colCount), idxRow, idxCol++);

            if(this.colCount == 1) {
                idxCol = 0;
                idxRow++;
            } else {
                if(idxCol == this.colCount * 4 - 1) {
                    idxCol = 0;
                    idxRow++;
                } else {
                    formGrid.add(getGapTd(this.fieldGap), idxRow, idxCol++);
                }
            }
        }

        this.height += (idxRow + 1) * 25;
    },
    toString: function() {
        // 初始化
        this.init();

        var styleClass = '';

        var formStr = '<form id="' + this.id + '" class="' + styleClass + '">';
        if(this.legend) {
            formStr += '<fieldset><legend>' + this.legend + '</legend>';
        }

        formStr += this.gridPane.toString();

        formStr += '<div class="actionBar" style="text-align: center;">';
        if(this.actionBar) {
            formStr += this.actionBar.toString();
        }
        formStr += '</div>';

        if(this.legend) {
            formStr += '</fieldset>';
        }

        // 添加隐藏域
        for(var i = 0; i < this.hiddenList.length; i++) {
            formStr += getFormInput(this.hiddenList[i], 'hidden');
        }

        return formStr + '</form>';
    },
    getValue: function(name, value) {
        if(this.fieldMap[name]) {
            if(DT_DATE == this.fieldMap[name]['dataType']) {
                return value.substring(0, 10);
            }
        }

        return value;
    }
};

function FormField(field, form) {
    this.id = field['id'];
    this.name = field['name'];
    this.colName = field['colName'];
    this.displayName = field['displayName'];
    this.isSingleLine = field['singleLine'];
    this.isDisplay = field['display'] || true;
    this.width = field['width'];
    this.height = field['height'];
    this.displayStyle = field['displayStyle'];
    this.inputDate = field['inputDate'];
    this.isValid = field['valid'];
    this.sortNum = field['sortNum'];
    this.dataType = field['dataType'];
    this.dictList = field['dictList'];
    this.queryMode = field['queryMode'];
    this.readonly = field['readonly'];
    this.required = field['required'];
    this.styleClass = field['styleClass'];
    this.form = form;
}