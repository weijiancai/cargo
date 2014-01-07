var TableLayout = function tableLayout(option) {
    this.getTrs = function() {
        var trs = [];
        // 如果fields的第一个元素数组
        if($.isArray(option.fields[0])) {

        } else {
            var tds = [];
            for(var i = 0; i < option.fields.length; i++) {
                var field = option.fields[i];

                if(field.isSingleLine && tds.length > 0) {
                    trs.push(tds);
                    tds = [];
                }

                if(field.displayStyle == 4) {
                    tds.push({label: ''});
                } else {
                    tds.push({label: field.displayName});
                }

//                tds.push({gap: 'width:' + (field.labelGap ? field.labelGap : 5) + 'px;'});
                var fieldStyle = '';
                if(field.height) {
                    fieldStyle += 'height:' + field.height + 'px;';
                }
                fieldStyle += 'margin-left:' + (field.labelGap ? field.labelGap : 5) + 'px;';
                if((i + 1) % option.colCount > 0 && !field.isSingleLine) {
                    fieldStyle += 'margin-right:' + (field.fieldGap ? field.fieldGap : 15) + 'px;';
                }
                /*tds.push({style: fieldStyle});*/

                var fieldTd = {};
                // 显示风格
                fieldTd.displayStyle = field.displayStyle || 10;
                // 默认值
                fieldTd.defaultValue = field.defaultValue;
                // 数据字典
                if(field.displayStyle == DS_COMBO_BOX) {
                    fieldTd.dict = dictList[field.dictId];
                }
                if(field.displayStyle == 4) {
                    fieldTd.displayName = field.displayName;
                }
                if(field.isSingleLine && option.colCount > 1) {
                    fieldTd.colspan = option.colCount * 2 - 1;
                    if(option.colCount == 2) {
                        fieldStyle += 'width: 96%;';
                    } else if(option.colCount == 3) {
                        fieldStyle += 'width: 98%;';
                    } else {
                        fieldStyle += 'width: 98%;';
                    }

                } else {
                    fieldStyle += 'width:' + (field.width || 180) + 'px;';
                }
                fieldTd.style = fieldStyle;
                tds.push(fieldTd);

                if(option.colCount == 1 || (i + 1) % option.colCount == 0 || field.isSingleLine || field.isLineEnd) {
                    trs.push(tds);
                    tds = [];
                }
            }
            if(tds.length > 0) {
                trs.push(tds);
            }
        }

        return trs;
    };
};