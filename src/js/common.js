(function($) {
    /**
     * tabs
     */
    $.fn.tabs = function(idx) {
        if(!idx) {
            idx = 0;
        }
        var tabs = $(this);
        // 获得当前显示的tab
        var cur_display_tab = tabs.find('> .tab:visible');
        // 默认选中第一个，改变背景色为#ecf8ea
        tabs.find('ul > li:eq(' + idx + ')').css("backgroundColor", "#ecf8ea");
        // 所有tab不显示
        tabs.find('> .tab').css('display', 'none');
        // 显示第idx个tab
        tabs.find('> .tab:eq(' + idx + ')').css('display', 'block');

        // li注册Click事件，打开对应tab
        $(this).find('> ul > li').click(function() {
            tabs.find('> ul > li').css('backgroundColor', '#C6E6BA');
            $(this).css("backgroundColor", "#ecf8ea");
            // 当前tab不显示
            cur_display_tab.hide().css("backgroundColor", "#ecf8ea");

            // 切换tab
            var title = $(this).text();
            var select = "> .tab[title='" + title + "']";
            tabs.find(select).show();
        });
    }
})(jQuery);