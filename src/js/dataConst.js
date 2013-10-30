/**
 * z数据常量
 *
 * User: wei_jc
 * Date: 13-10-29
 * Time: 上午8:55
 */
var FORM_FIELD = [
    {name: 'empty_field', displayName: '空白', displayStyle: DS_FIELD, width: 100},

    {name: 'ck', displayName: '仓库', width: 90, styleClass: 'import_input'},
    {name: 'kw', displayName: '库位', width: 90, styleClass: 'import_input'},
    {name: 'btn_qx', displayName: '全选', width: 60, displayStyle: DS_BUTTON},
    {name: 'btn_hwjs', displayName: '货物接收（R）', width: 120, displayStyle: DS_BUTTON},
    {name: 'btn_dy', displayName: '打印（Q）', width: 80, displayStyle: DS_BUTTON},

    {name: 'ydh', displayName: '运单号', width: 265, displayStyle: DS_YDH},
    {name: 'gdrid', displayName: '归档人ID', width: 90},
    {name: 'gdryyd', displayName: '归档人营业点', width: 90, styleClass: 'import_input'},
    /*{name: '', displayName: '', width: 100},*/
    {name: 'gdrq', displayName: '归档日期', width: 200, displayStyle: DS_DATE_RANGE},
    {name: 'gdfs', displayName: '归档方式', width: 90, displayStyle: DS_COMBO_BOX, dictList: DICT_GDFS},
    {name: 'sfzc', displayName: '是否正常', width: 90, displayStyle: DS_COMBO_BOX, dictList: DICT_BOOLEAN},
    {name: 'btn_cx', displayName: '查询（Q）', width: 100, displayStyle: DS_BUTTON},

    {name: 'gngj', displayName: '国内/国际', width: 80, displayStyle: DS_COMBO_BOX, dictList: DICT_GN_GJ},
    {name: 'jgcgzh', displayName: '进港/出港/中转', width: 80, displayStyle: DS_COMBO_BOX, dictList: DICT_JG_CG_ZZ},
    {name: 'hgjg', displayName: '海关监管', width: 80, displayStyle: DS_COMBO_BOX, dictList: DICT_HGJG},
    {name: 'sfzmdz', displayName: '始发站/目的站', width: 100, displayStyle: DS_SFZ_MDT, styleClass: 'import_input'},
    {name: 'yyd', displayName: '营业点', width: 120, displayStyle: DS_TEXT, styleClass: 'import_input'},

    {name: 'fhdlr', displayName: '发货代理人', width: 80, displayStyle: DS_TEXT, styleClass: 'import_input'},
    {name: 'shdlr', displayName: '收货代理人', width: 80, displayStyle: DS_TEXT, styleClass: 'import_input'},
    {name: 'thdm', displayName: '特货代码', width: 120, displayStyle: DS_THDM, styleClass: 'import_input'},

    {name: 'hzm', displayName: '货主名：', width: 0, displayStyle: DS_LABEL, styleClass: ''},
    {name: 'fhr', displayName: '发货人', width: 100, displayStyle: DS_RADIO, styleClass: ''},
    {name: 'shr', displayName: '收货人', width: 120, displayStyle: DS_RADIO, styleClass: ''},
    {name: 'cyr', displayName: '承运人', width: 120, displayStyle: DS_TEXT, styleClass: 'import_input'},
    {name: 'pmdm', displayName: '品名代码', width: 150, displayStyle: DS_TEXT, styleClass: 'import_input'},
    {name: 'yd_date_range', displayName: '时间段查询', width: 650, displayStyle: DS_YD_DATE_RANGE, styleClass: 'import_input'},

    {name: 'hbh_query', displayName: '航班号查询', displayStyle: DS_HBH_QUERY},
    {name: 'fpqshm', displayName: '发票起始号码', width: 100},
    {name: 'fpjshm', displayName: '发票结束号码', width: 100},
    {name: 'lsh', displayName: '流水号', displayStyle: DS_LSH},
    {name: 'djyyd', displayName: '登记营业点', displayStyle: DS_TEXT, styleClass: 'import_input', defaultValue: 'DOM2', width: 100},
    {name: 'fkfmc', displayName: '付款方名称', displayStyle: DS_TEXT, styleClass: 'import_input', width: 100},
    {name: 'kpsj', displayName: '开票时间', displayStyle: DS_DATE_RANGE_NO_CB},
    {name: 'sfzf', displayName: '是否作废', displayStyle: DS_COMBO_BOX, dictList: DICT_BOOLEAN, width: 100},
    {name: 'dyr', displayName: '打印人', displayStyle: DS_TEXT, styleClass: 'import_input', width: 100},

    {name: 'js', displayName: '件数*', width: 60, styleClass: 'readonly'},
    {name: 'zl', displayName: '重量*', width: 60, styleClass: 'readonly'},
    {name: 'lhjs', displayName: '理货件数*', width: 60, styleClass: '', defaultValue: '10'},
    {name: 'lhzl', displayName: '理货重量*', width: 60, styleClass: '', defaultValue: '100'},
    {name: 'ccs', displayName: '叉车数*', width: 60, styleClass: '', defaultValue: ''},
    {name: 'bz', displayName: '包装*', width: 230, styleClass: 'import_input', defaultValue: ''},

    {name: 'hwrk', displayName: '货物入库', width: 60, styleClass: '', displayStyle: DS_CHECK_BOX},
    {name: 'tbh', displayName: '托板号', width: 60, styleClass: '', displayStyle: DS_TBH},

];

var TABLE_HEADER = [
    {name: 'fphm', displayName: '发票号码', width: 100},
    {name: 'zf', displayName: '作废', width: 80},
    {name: 'lshm', displayName: '流水号码', width: 100},
    {name: 'zje', displayName: '总金额', width: 60},
    {name: 'fkfmc', displayName: '付款方名称', width: 150},
    {name: 'kpsj', displayName: '开票时间', width: 150},

    {name: 'ydh', displayName: '运单号', width: 150},
    {name: 'cdjs', displayName: '舱单件数', width: 150},
    {name: 'cdzl', displayName: '舱单重量', width: 150},
    {name: 'lhjs', displayName: '理货件数', width: 150},
    {name: 'lhzl', displayName: '理货重量', width: 150},
    {name: 'bz', displayName: '包装', width: 150},
    {name: 'thdm', displayName: '特货代码', width: 150}
];