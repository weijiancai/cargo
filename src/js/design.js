/**
 * 生成JS Tabs
 */
function genJsTabs(tabId, tabNames) {
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

    return $('#' + tabId).tabs(option);
}