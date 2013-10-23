function GridPane() {
    this.table = [];
}

GridPane.prototype = {
    add: function(node, row, col) {
        var array = this.table[row];
        if(!(array && array.length)) {
            array = [];
            this.table[row] = array;
        }
        array[col] = node;
    },
    toString: function() {
        var tableStr = '<table class="gridPane">';
        var array = this.table;
        for(var i = 0; i < array.length; i++) {
            var subArray = array[i];
            if(subArray) {
                tableStr += '<tr>';
                for(var j = 0; j < subArray.length; j++) {
                    tableStr += subArray[j];
                }
                tableStr += '</tr>';
            }
        }
        tableStr += '</table>';

        return tableStr;
    }
};

function getInputNode(field, colCount) {
    if(DS_TEXT_AREA == field.displayStyle) {
        if(field.isSingleLine) {
            return getFormInputTd(field, 'textarea', colCount * 4 - 3);
        } else {
            return getFormInputTd(field, 'textarea');
        }
    } else if(DS_PASSWORD == field.displayStyle) {
        if(field.isSingleLine) {
            return getFormInputTd(field, 'password', colCount * 4 - 3);
        } else {
            return getFormInputTd(field, 'password');
        }
    } else if(DS_COMBO_BOX == field.displayStyle) {
        if(field.isSingleLine) {
            return getFormInputTd(field, 'select', colCount * 4 - 3);
        } else {
            return getFormInputTd(field, 'select');
        }
    } else if(DS_BUTTON == field.displayStyle) {
        return getFormInputTd(field, 'button');
    } else if(DS_YDH == field.displayStyle) {
        return getFormInputTd(field, 'ydh');
    } else if(DS_DATE_RANGE == field.displayStyle) {
        return getFormInputTd(field, 'date_range');
    } else if(DS_SFZ_MDT == field.displayStyle) {
        return getFormInputTd(field, 'sfz_mdz');
    } else if(DS_THDM == field.displayStyle) {
        return getFormInputTd(field, 'thdm');
    } else if(DS_LABEL == field.displayStyle) {
        return '';
    } else if(DS_RADIO == field.displayStyle) {
        return getFormInputTd(field, 'radio');
    } else if(DS_CHECK_BOX == field.displayStyle) {
        return getFormInputTd(field, 'check_box');
    }
    else {
        if(DT_DATE == field.dataType) {
            return getFormInputTd(field, 'date');
        } else if(DT_DOUBLE == field.dataType) {
            return getFormInputTd(field, "double");
        } else if(DT_INTEGER == field.dataType) {
            return getFormInputTd(field, "int");
        } else if(DT_NUMBER == field.dataType) {
            return getFormInputTd(field, "number");
        } else if(DT_URL == field.dataType) {
            return getFormInputTd(field, "url");
        } else if(DT_IP == field.dataType) {
            return getFormInputTd(field, "ip");
        } else if(DT_EMAIL == field.dataType) {
            return getFormInputTd(field, "email");
        } else {
            if(field.isSingleLine) {
                return getFormInputTd(field, 'text', colCount * 4 - 3);
            } else {
                return getFormInputTd(field, 'text');
            }
        }
    }
}

function getGap(width) {
    return '<span style="width:' + width + 'px;display:block;"></span>';
}

function getGapInLine(width) {
    return '<span style="width:' + width + 'px;display:inline-block;"></span>';
}

function getGapTd(width) {
    return '<td>' + getGap(width) + '</td>';
}

function getLabelTd(field) {
    return '<td>' + getLabel(field)+ '</td>';
}

function getFormInputTd(field, type, colspan, rowspan) {
    var spanStr = "";
    if(colspan) {
        spanStr += ' colspan="' + colspan + '"';
        field.width = '100%';
    }
    if(rowspan) {
        spanStr += ' rowspan="' + rowspan + '"';
    }
    if(spanStr.length > 0) {
        return '<td' + spanStr + '>' + getFormInput(field, type) + '</td>';
    } else {
        return '<td>' + getFormInput(field, type) + '</td>';
    }
}


function getLabel(field) {
    if(DS_BUTTON == field.displayStyle || DS_FIELD == field.displayStyle || DS_RADIO == field.displayStyle || DS_CHECK_BOX == field.displayStyle) return '';
    return '<label for="' + field.name+ '">' + field.displayName+ '</label>';
}

function getFormInput(field, type) {
    if(field.displayName == '') return '';

    var inputName;
    if(tableFieldMapping && tableFieldMapping[field.name]) {
        inputName = tableFieldMapping[field.name];
    } else {
        inputName = field.name;
    }

    var styleStr = "";
    if(field.width) {
        if('100%' == field.width) {
            styleStr += "width:" + field.width + ";";
        } else {
            if('date' == type) {
                styleStr += "width:" + (field.width/2 - 10) + "px;";
            } else {
                styleStr += "width:" + field.width + "px;";
            }
        }
    }
    if(field.height) {
        styleStr += "height:" + field.height + "px;";
    }
    var options = '';
    if(field.dictList) {
        for(var i = 0; i < field.dictList.length; i++) {
            options += '<option value="' + field.dictList[i].value +'">' + field.dictList[i].name + '</option>'
        }
    }

    var attr = '';
    var styleClass = '';
    if(field.readonly) {
        attr += ' readonly="readonly"';
    }
    if(field.required && 'hidden' != type) {
        attr += ' missingMessage="必填" invalidMessage="请输入"';
        styleClass += ' required';
    }
    if(field.styleClass) {
        styleClass += ' ' + field.styleClass;
    }

    if('textarea' == type) {
        return '<textarea id="' + field.id + '" type="' + type + '" name="' + inputName + '" style="' + styleStr + '"' + attr + ' class="' + styleClass + '"></textarea>';
    } else if('select' == type) {
        return '<select id="' + field.id + '" type="' + type + '" name="' + inputName + '" style="' + styleStr + '"' + attr + ' class="' + styleClass + '">' + options + '</select>';
    } else if('button' == type) {
        return '<button type="button" style="' + styleStr + '">' + field.displayName + '</button>';
    } else if('ydh' == type) {
        return getYdh(field);
    } else if('date_range' == type) {
        return getDateRange(field);
    } else if('sfz_mdz' == type) {
        return getSfzMdz(field);
    } else if('thdm' == type) {
        return getThdm(field);
    } else if('radio' == type) {
        return '<input type="radio" style="margin-right: 5px;"/>' + field.displayName;
    } else if('check_box' == type) {
        return '<input type="checkbox" style="margin-right: 5px;"/>' + field.displayName;
    }
    else if('date' == type || 'email' == type || 'ip' == type || 'url' == type || 'int' == type || 'double' == type || 'number' == type) {
        if('date' == type) {
            styleClass += ' dateField';
        } else if('email' == type) {
            styleClass += ' email';
        } else if('ip' == type) {
            styleClass += ' ip';
        } else if('url' == type) {
            styleClass += ' url';
        } else if('int' == type) {
            styleClass += ' int';
        } else if('double' == type) {
            styleClass += ' double';
        } else if('number' == type) {
            styleClass += ' number';
        }

        type = 'text';
    }

    return '<input id="' + field.id + '" type="' + type + '" name="' + inputName + '" style="' + styleStr + '"' + attr + ' class="' + styleClass + '" queryMode="' + field.queryMode + '"/>';
}

function getYdh(field) {
    var width = 120;
    if(field.width && (field.width - 105) > 120) {
        width = field.width - 105;
    }
    return '<span class="ydh">' +
        '<select style="width: 65px;"><option>AWBA</option><option>AWBA</option></select>' +
        '<input style="width: 40px;" type="text" class="first" value="784"/>' +
        '<input type="text" class="second" value="62362366" style="width: ' + width + 'px"/>' +
        '</span>';
}

function getDateRange(field) {
    return '<span class="form_date"><div style="display: inline-block;border: 1px solid #b6cae1;padding-left: 3px;background-color: #ffffff;">' +
        '<input type="checkbox" checked="checked" style="border: none;vertical-align: middle"/>' +
    '<span style="font-size: 12px;vertical-align: middle;width: 65px;">2012年 6月14日</span>' +
    '<img src="images/select.jpg">' +
    '</div>' +
    '&nbsp;-&nbsp;' +
    '<div style="display: inline-block;border: 1px solid #b6cae1;padding-left: 3px;background-color: #ffffff;">' +
    '<input type="checkbox" checked="checked" style="border: none;;vertical-align: middle"/>' +
    '<span style="font-size: 12px;vertical-align: middle">2012年 6月14日</span>' +
    '<img src="images/select.jpg">' +
    '</div></span>';
}

function getSfzMdz(field) {
    return '<input type="text" class="' + field.styleClass + '" style="width: ' + (field.width/2 - 5) + 'px"/> ' +
        '<input type="text" class="' + field.styleClass + '" style="width: ' + (field.width/2 - 5) + 'px"/>';
}

function getThdm(field) {
    return '<select style="width: ' + (field.width - 70)+ 'px"><option></option></select><input type="text" class="' + field.styleClass +'" style="margin-left:5px;width: 60px"/>'
}
