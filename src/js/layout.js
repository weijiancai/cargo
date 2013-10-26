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
    field.defaultValue = field.defaultValue ? field.defaultValue : '';
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
        return '<td><span style="display: inline-block;width: ' + field.width + 'px;">' + field.defaultValue + '</span></td>';
    } else if(DS_RADIO == field.displayStyle) {
        return getFormInputTd(field, 'radio');
    } else if(DS_CHECK_BOX == field.displayStyle) {
        return getFormInputTd(field, 'check_box');
    } else if(DS_YD_DATE_RANGE == field.displayStyle) {
        return getFormInputTd(field, 'yd_date_range');
    } else if(DS_HBH_QUERY == field.displayStyle) {
        return getFormInputTd(field, 'hbh_query');
    } else if(DS_IMG == field.displayStyle) {
        return getFormInputTd(field, 'img');
    } else if(DS_SELECT_OPERATOR == field.displayStyle) {
        return getFormInputTd(field, 'select_operator');
    } else if(DS_QSZ == field.displayStyle) {
        return getFormInputTd(field, 'qsz');
    } else if(DS_LSH == field.displayStyle) {
        return getFormInputTd(field, 'lsh');
    } else if(DS_ZL == field.displayStyle) {
        return getFormInputTd(field, 'zl');
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
    if(DS_BUTTON == field.displayStyle || DS_FIELD == field.displayStyle || DS_RADIO == field.displayStyle || DS_CHECK_BOX == field.displayStyle
        || DS_YD_DATE_RANGE == field.displayStyle || DS_IMG == field.displayStyle || DS_SELECT_OPERATOR == field.displayStyle) return '';
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
        attr += ' disabled="disabled"';
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
    } else if('yd_date_range' == type) {
        return getYdDateRange(field);
    } else if('hbh_query' == type) {
        return getHbhQuery(field);
    } else if('img' == type) {
        return '<img src="' + field.displayName+ '"/>';
    } else if('select_operator' == type) {
        return '<select id="' + field.id + '" class="selectOperator" type="' + type + '" name="' + inputName + '" style="' + styleStr + '"' + attr + ' class="' + styleClass + '">' + options + '</select>';
    } else if('qsz' == type) {
        return getQsz(field);
    } else if('lsh' == type) {
        return getLsh(field);
    } else if('zl' == type) {
        return getZl(field);
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

    return '<input id="' + field.id + '" type="' + type + '" name="' + inputName + '" style="' + styleStr + '"' + attr + ' class="' + styleClass + '" value="' + field.defaultValue + '"/>';
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

function getLsh(field) {
    var width = 120;
    if(field.width && (field.width - 105) > 120) {
        width = field.width - 105;
    }
    var readonly = field.readonly ? field.readonly : false;
    return '<span class="lsh">' +
        '<select style="width: 65px;" disabled="' + readonly + '"><option>AWBA</option><option>AWBA</option></select>' +
        '<input style="width: 40px;" type="text" class="first" value="784" disabled="' + readonly + '"/>' +
        '<input type="text" class="second" value="62362366" style="width: ' + width + 'px;" disabled="' + readonly + '"/>' +
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

function getYdDateRange(field) {
    return '<fieldset style="display: inline-block;width: ' + field.width + 'px">' +
        '<legend>' + field.displayName + '</legend>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">录单<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">收运<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">退仓<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">办单<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">提货<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">文件到达<span style="width:15px;display:inline-block;"></span>' +
    '<span style="width:5px;display:inline-block;"></span><input style="margin-right: 5px;" type="radio">航班承诺<span style="width:15px;display:inline-block;"></span><br/>' +
    '<label style="margin-left: 30px;">从</label>' +
    '<div style="display: inline-block;border: 1px solid #b6cae1;padding-left: 3px;background-color: #ffffff;">' +
    '<span style="font-size: 12px;line-height: 16px;vertical-align: top">2012年 6月14日</span>' +
    '<img src="images/select.jpg">' +
    '</div>' +
    '&nbsp;到&nbsp;' +
    '<div style="display: inline-block;border: 1px solid #b6cae1;padding-left: 3px;background-color: #ffffff;">' +
    '<span style="font-size: 12px;line-height: 16px;vertical-align: top">2012年 6月14日</span>' +
    '<img src="images/select.jpg">' +
    '</div>' +
    '</fieldset>';
}

function getHbhQuery(field) {
    return '<span class="hbh"><input type="text" value="CZ" class="first import_input"><input type="text" value="3403/2012-05-22" class="second"></span>' +
        '<select class="width_90"><option>PEK-CTU</option></select><button type="button" style="width: 60px;margin-left: 5px;">查询</button>';
}

function getQsz(field) {
    function getTd() {
        return '<td class="form_label" style="vertical-align: middle"><input type="text" class="width_30 import_input"/></td>';
    }
    function getAirLineTd() {
        return '<td class="form_field"><ul class="air_line"><li><input type="text" class="width_30 import_input"></li><li class="line">-------&gt;</li></ul></td>';
    }

    return '<table style="display:inline-block;"><tr>' + getTd() + getAirLineTd() + getTd() + getAirLineTd() + getTd() + getAirLineTd() + getTd() + getAirLineTd() + getTd() + '</tr></table>';
}

function getZl(field) {
    return '<input type="text" class="width_50" value="10"/><select class="width_60" style="border: 1px dotted green;margin-left: -4px"><option>KG</option></select>';
}


function getMenus(menus) {
    // 生成主菜单
    var str = '<div id="main_nav_bar"><ul>';
    for(var i = 0; i < menus.length; i++) {
        str += '<li><a href="#" name="' + menus[i].id + '">' + menus[i].name + '</a></li>';
    }
    str += '</ul></div><div id="sub_nav_bar">';

    // 生成子菜单
    for(i = 0; i < menus.length; i++) {
        str += '<div id="' + menus[i].id + '" class="div_sub_nav"><div>';
        var groups = menus[i].groups;
        if(groups && groups.length > 0) {
            for(var j = 0; j < groups.length; j++) {
                var styleStr = '';
                if(groups[j].width) {
                    styleStr += 'width:' + groups[j].width + 'px;';
                }

                var items = groups[j].items;
                str += '<ol class="left" style="' + styleStr + '"><li>';
                for(var k = 0; k < items.length; k++) {
                    if($.isArray(items[k])) {
                        str += '<ul class="left">';
                        for(var m = 0; m < items[k].length; m++) {
                            str += '<li><a href="' + items[k].href + '"><img src="' + items[k][m].icon+ '"/><span>' + items[k][m].name + '</span></a></li>';
                        }
                        str += '</ul>';
                    } else {
                        if(items.length == 1) {
                            str += '<ul class="left single" style="padding-left: 7px;"><li><a href="' + items[k].href + '"><img src="' + items[k].icon + '"/><br/><span>' + items[k].name + '</span></a></li></ul>';
                        } else {
                            str += '<ul class="left single"><li><a href="' + items[k].href + '"><img src="' + items[k].icon + '"/><br/><span>' + items[k].name + '</span></a></li></ul>';
                        }

                    }
                }
                str += '</li><li><h5>' + groups[j].name + '</h5></li></ol>';
            }
        }

        str += '</div></div>';
    }

    return str + '</div>';
}