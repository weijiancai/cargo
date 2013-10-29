(function($) {
    /**
     * tabs
     */
    $.fn.tabs = function(option) {
        var defaults = {
            selected: 0,     // 选中属性，默认0
            tabNames: []    // tab名称数组
        };

        option = $.extend(defaults, option);
        // 增加数据表单
        $(this).prepend(new DataTabs(option).toString()).addClass('tabs');
        var idx = option.selected;
        var tabs = $(this);
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
            // 获得当前显示的tab
            var cur_display_tab = tabs.find('> .tab:visible');
            // 当前tab不显示
            cur_display_tab.hide().css("backgroundColor", "#ecf8ea");

            // 切换tab
            var title = $(this).text();
            var select = "> .tab[title='" + title + "']";
            tabs.find(select).show();
        });
    };

    /**
     * 数据表格
     */
    $.fn.dgtable = function(option, subTableOption) {
        function getDefaults() {
            return {
                id: null,          // ID
                fixable: true,     // 可固定
                sortable: false,   // 可排序
                selectable: false, // 可选择（是否显示选择复选框）
                expandRow: -1,     // 展开某一行（如果有子表的时候，-1表示不展开）
                selectRow: -1,     // 选中某一行
                height: null,      // 表格高度
                headers: [],       // 表头
                data:[]            // 表数据
            };
        }

        option = $.extend(getDefaults(), option);
        subTableOption = $.extend(getDefaults(), subTableOption);

        // 增加数据表格
        var $table = $(this).addClass('dg_table').append(new DataTable(option).toString());
        if(option.height) {
            $table.css('height', option.height + 'px');
        }
        if(option.expandRow != -1) {
            expandRow(option.expandRow);
        }
        if(option.selectRow >= 0) {
            $table.find('> table > tbody > tr:eq(' + option.selectRow + ') > td').addClass('selectRow');
        }
        // 选中某一行
        $table.find('.tr_checkbox').click(function() {
            for(var i = 0; i < $(this).length; i++) {
                var checkbox = $(this).get(i);
                var tr = $(checkbox).parent().parent();
                if(checkbox.checked) {
                    tr.addClass('selectRow');
                }else {
                    tr.removeClass('selectRow');
                }
            }

        });

        /**
         * 展开某一行
         * @param row
         */
        function expandRow(row) {
            if(!subTableOption && !subTableOption.id || row == -1) return;

            var offset = $table.find('> table > tbody > tr:eq(' + row + ')').offset();
            var $sub = $('#' + subTableOption.id).dgtable(subTableOption);
            $sub.css('position', 'absolute')
                .css('border', 'none')
                .css('margin-left', '5px')
                .css('top', offset.top + 35)
                .css('left', offset.left).show();
        }

        return this;
    };

    /**
     * 数据表单
     *
     * @param option
     * @returns {*}
     */
    $.fn.dataForm = function(option) {
        var defaults = {
            id: null,       // id属性
            name: null,     // name属性
            colCount: 3,    // 列数， 默认3
            colWidth: 180,  // 列宽，默认180
            labelGap: 5,    // label右边距，默认5
            fieldGap: 15,   // field右边距，默认15
            legend: null,    // fieldset legend
            fields: null,      // 表单字段信息
            rows: null,         // 表单行信息
            onChange: null  // 当数据改变时，回调函数
        };

        option = $.extend(defaults, option);
        // 增加数据表单
        $(this).prepend(new DataForm(option).toString());

        return this;
    };

    /**
     * 数据菜单
     *
     * @param option
     */
    $.fn.dataMenu = function(option) {
        var defaults = {
            menus: null,        // 菜单数组
            showItemId: null   // 显示子菜单ID
        };

        option = $.extend(defaults, option);
        // 增加数据菜单
        $(this).prepend(new DataMenu(option.menus).toString());
        // 设置第一个子菜单padding-bottom
//        $('#sub_nav_gnjg').find('> div > ol:eq(0) ul').css('padding-bottom', '2px');
        // 显示子菜单
        $('#' + option.showItemId).show();
    };


    $.toJsonStr = function(object) {
        var type = typeof object;
        if ('object' == type) {
            if (Array == object.constructor) type = 'array';
            else if (RegExp == object.constructor) type = 'regexp';
            else type = 'object';
        }
        switch (type) {
            case 'undefined':
            case 'unknown':
                return '';
                break;
            case 'function':
            case 'boolean':
            case 'regexp':
                return object.toString();
                break;
            case 'number':
                return isFinite(object) ? object.toString() : 'null';
                break;
            case 'string':
                return '"' +
                    object.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g,
                        function() {
                            var a = arguments[0];
                            return (a == '\n') ? '\\n': (a == '\r') ? '\\r': (a == '\t') ? '\\t': ""
                        }) + '"';
                break;
            case 'object':
                if (object === null) return 'null';
                var results = [];
                for (var property in object) {
                    var value = $.toJsonStr(object[property]);
                    if (value !== undefined) results.push($.toJsonStr(property) + ':' + value);
                }
                return '{' + results.join(',') + '}';
                break;
            case 'array':
                results = [];
                for (var i = 0; i < object.length; i++) {
                    value = $.toJsonStr(object[i]);
                    if (value !== undefined) results.push(value);
                }
                return '[' + results.join(',') + ']';
                break;
        }

        return '';
    };
})(jQuery);