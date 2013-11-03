/**
 * 预览 Tabs
 */
function previewTabs(tabId, tabNames) {
    var option = {};
    option.tabNames = tabNames.split(',');

    var str = '<div id="' + tabId + '">';
    var namesStr = "";
    for(var i = 0; i < option.tabNames.length; i++) {
        str += '<div class="tab" title="' + option.tabNames[i] + '"></div>';
        namesStr += "'" + option.tabNames[i] + "'";
        if(i < option.tabNames.length - 1) {
            namesStr += ",";
        }
    }
    // 添加到预览界面
    $('#tab_tabs_preview').html('').append(str + '</div>');
    $('#' + tabId).tabs(option);
    // 添加到js界面
    var jsStr = "$('#" + tabId + "').tabs({tabNames: [" + namesStr + "]});";
    $('#tab_tabs_js').text(jsStr);
    // 添加到html界面
    $('#tab_tabs_html').text(str);
}

function previewTable() {
    var option = {};
    option.id = $('#tableId').val();
    option.sortable = $('#sortable').val() == 'T';
    option.selectable = $('#selectable').val() == 'T';
    option.expandRow = $('#expandRow').val() == '' ? -1 : $('#expandRow').val();
    option.selectRow = $('#selectRow').val() == '' ? -1 : $('#selectRow').val();
    option.height = $('#height').val();
    option.headers = eval($('#headers').val());
    option.data = eval('[' + $('#table_datas').val() + ']');

    // 添加到预览界面
    $('#tab_table_preview').html('').append('<div id="div_' + option.id + '"></div>');
    $('#div_' + option.id).dgtable(option);
    // 添加到js界面
    var jsStr = "$('#div_" + option.id + "').dgtable(" + $.toJsonStr(option) +");";
    $('#tab_table_js').text(jsStr);
    // 添加到html界面
    $('#tab_table_html').text($('#tab_table_preview').html());
}

function addAttr(attrName, attrValue, isStr) {
    if(attrValue == '') return '';
    if(isStr) {
        return attrName + ":'" + attrValue + "'";
    } else {
        return attrName + ":" + attrValue;
    }

}

function previewForm() {
    var option = {};
    option.id = $('#formId').val();
    option.legend = $('#legend').val();
    option.colCount = $('#colCount').val() == '' ? 3 : $('#colCount').val();
    option.colWidth = $('#colWidth').val() == '' ? 180 : $('#colWidth').val();
    option.labelGap = $('#labelGap').val() == '' ? 180 : $('#labelGap').val();
    option.fieldGap = $('#fieldGap').val() == '' ? 180 : $('#fieldGap').val();
    var fields = $('#fields').val();
    var rows = $('#rows').val();
    if(fields != '') {
        option.fields = eval(fields);
    }
    if(rows != '') {
        option.rows = eval('[' + rows + ']');
    }

    // 添加到预览界面
    $('#tab_form_preview').html('').append('<div id="div_' + option.id + '"></div>');
    $('#div_' + option.id).dataForm(option);
    // 添加到js界面
    var jsStr = "$('#div_" + option.id + "').dataForm(" + $.toJsonStr(option) + ");";
    $('#tab_form_js').text(jsStr);
    // 添加到html界面
    $('#tab_form_html').text($('#tab_form_preview').html());
}