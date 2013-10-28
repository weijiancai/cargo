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
        if(i < option.tabNames.length) {
            namesStr += ",";
        }
    }
    // 添加到预览界面
    $('#tab_tabs_preview').html('').append(str + '</div>');
    // 添加到js界面
    var jsStr = "$('#" + tabId + "').tabs({tabNames: [" + namesStr + "]});";
    $('#tab_tabs_js').html(jsStr);
    // 添加到html界面
    $('#tab_tabs_html').html($('#tab_tabs_preview').html());

    $('#' + tabId).tabs(option);
}

function previewTable() {
    var option = {};
    option.id = $('#tableId').val();
    option.sortable = $('#sortable').val() == 'T';
    option.selectable = $('#selectable').val() == 'T';
    option.expandRow = $('#expandRow').val() == '' ? -1 : $('#expandRow').val();
    option.selectRow = $('#selectRow').val() == '' ? -1 : $('#selectRow').val();
    option.height = $('#height').val();
    option.headers = eval('[' + $('#headers').val() + ']');
    option.data = eval('[' + $('#table_datas').val() + ']');

    // 添加到预览界面
    $('#tab_table_preview').html('').append('<div id="' + option.id + '"></div>');
    $('#' + option.id).dgtable(option);
    // 添加到js界面
    var jsStr = "$('#" + option.id + "').dgtable({id: '" + option.id + "', sortable:'" + option.sortable + "',});";
    $('#tab_tabs_js').html(jsStr);
    // 添加到html界面
    $('#tab_table_html').html($('#tab_table_preview').html());
}

function addAttr(attrName, attrValue) {
    return attrName + ":'" + attrValue + "'"
}