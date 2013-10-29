/**
 * z数据常量
 *
 * User: wei_jc
 * Date: 13-10-29
 * Time: 上午8:55
 */
var FORM_FIELD = [
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
];