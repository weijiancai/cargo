/**
 * 常量定义脚本文件
 */

// 显示风格
var DS_TEXT = 0;
var DS_TEXT_AREA = 1;
var DS_PASSWORD = 2;
var DS_COMBO_BOX = 3;
var DS_BUTTON = 4; // 按钮
var DS_YDH = 5; // 运单号
var DS_DATE_RANGE = 6; // 日期范围
var DS_SFZ_MDT = 7; // 始发站/目的站
var DS_THDM = 8; // 特货代码
var DS_LABEL = 9; // 只显示Label
var DS_FIELD = 10; // 只显示Field
var DS_RADIO = 11; // 单选按钮
var DS_CHECK_BOX = 12; // 复选框
var DS_YD_DATE_RANGE = 13; // 运单时间段查询
var DS_HBH_QUERY = 14; // 航班号查询
var DS_IMG = 15; // 图片
var DS_SELECT_OPERATOR = 16; // 选择操作下拉框
var DS_QSZ = 17; // 起始站
var DS_LSH = 18; //流水号
var DS_ZL = 19; // 重量
var DS_DATE_RANGE_NO_CB = 20; // 日期范围（没有checkbox）
var DS_TBH = 21; // 托板号
var DS_HBH = 22; // 航班号
var DS_CKJBR = 23; // 出库经办人

// 显示风格数组
var DISPLAY_STYLE_ARRAY = [
    'DS_TEXT','DS_TEXT_AREA','DS_PASSWORD','DS_COMBO_BOX','DS_BUTTON','DS_YDH','DS_DATE_RANGE','DS_SFZ_MDT','DS_THDM','DS_LABEL','DS_FIELD',
    'DS_RADIO','DS_CHECK_BOX','DS_YD_DATE_RANGE','DS_HBH_QUERY','DS_IMG','DS_SELECT_OPERATOR','DS_QSZ','DS_LSH','DS_ZL','DS_DATE_RANGE_NO_CB',
    'DS_TBH','DS_HBH','DS_CKJBR','','','','','',''
];

// 数据类型
var DT_STRING = 0;
var DT_INTEGER = 1;
var DT_DOUBLE = 2;
var DT_NUMBER = 3;
var DT_DATE = 4;
var DT_EMAIL = 5;
var DT_IP = 6;
var DT_URL = 7;

// 查询模式
var QM_EQUAL = 0;
var QM_NOT_EQUAL = 1;
var QM_LESS_THAN = 2;
var QM_LESS_EQUAL = 3;
var QM_GREATER_THAN = 4;
var QM_GREATER_EQUAL = 5;
var QM_BETWEEN = 6;
var QM_LIKE = 7;
var QM_LEFT_LIKE = 8;
var QM_RIGHT_LIKE = 9;


var tableFieldMapping = null;

var custom = {}; // 自定义实现

// 验证信息
var CK_REQUIRED = {
    required: true,
    missingMessage: '必填',
    invalidMessage: '请输入'
};
var CK_EMAIL = {
    validType: 'email',
    missingMessage: '必填',
    invalidMessage: '请输入正确的email地址，例如fly@172app.com'
};
var CK_URL = {
    validType: 'url',
    missingMessage: '必填',
    invalidMessage: '请输入正确的url地址，例如http://www.172app.com'
};

/**********************************  数据字典   ******************************************************/
// 显示风格
var DICT_DISPLAY_STYLE = [
    {name: 'DS_TEXT', value: '0'}, {name: 'DS_TEXT_AREA', value: '1'}, {name: 'DS_PASSWORD', value: '2'}, {name: 'DS_COMBO_BOX', value: '3'},
    {name: 'DS_BUTTON', value: '4'}, {name: 'DS_YDH', value: '5'}, {name: 'DS_DATE_RANGE', value: '6'}, {name: 'DS_SFZ_MDT', value: '7'},
    {name: 'DS_THDM', value: '8'}, {name: 'DS_LABEL', value: '9'}, {name: 'DS_FIELD', value: '10'}, {name: 'DS_RADIO', value: '11'},
    {name: 'DS_CHECK_BOX', value: '12'}, {name: 'DS_YD_DATE_RANGE', value: '13'}, {name: 'DS_HBH_QUERY', value: '14'}, {name: 'DS_IMG', value: '15'},
    {name: 'DS_SELECT_OPERATOR', value: '16'}, {name: 'DS_QSZ', value: '17'}, {name: 'DS_LSH', value: '18'}, {name: 'DS_ZL', value: '19'},
    {name: 'DS_DATE_RANGE_NO_CB', value: '20'}, {name: 'DS_TBH', value: '21'}, {name: 'DS_HBH', value: '22'}, {name: 'DS_CKJBR', value: '23'}
];
// 数据字典
var DICT_DICT = [
    {name: '是/否', value: 'DICT_BOOLEAN'}, {name: '归档方式', value: 'DICT_GDFS'}, {name: '国内/国际', value: 'DICT_GN_GJ'}, {name: '进港/出港/中转', value: 'DICT_JG_CG_ZZ'},
    {name: '海关监管', value: 'DICT_HGJG'}, {name: '航班操作', value: 'DICT_HBCZ'}, {name: '不正常', value: 'DICT_BZC'}, {name: '打印', value: 'DICT_PRINT'}
];
// 是/否
var DICT_BOOLEAN = [
    {name: '全部', value: ''}, {name: '是', value: 'T'}, {name: '否', value: 'F'}
];
// 归档方式
var DICT_GDFS = [
    {name: '全部', value: '1'}, {name: '自动归档', value: '2'}, {name: '手工归档', value: '3'}
];
// 国内/国际
var DICT_GN_GJ = [
    {name: '全部', value: '1'}
];
// 进港/出港/中转
var DICT_JG_CG_ZZ = [
    {name: '全部', value: '1'}
];
// 海关监管
var DICT_HGJG = [
    {name: '全部', value: '1'}
];
// 航班操作
var DICT_HBCZ = [
    {name: '航班操作', value: '0'}, {name: '航班到达', value: '1'}, {name: '理单结束', value: '2'}, {name: '理货结束', value: '3'},{name: '航班结束', value: '4'}
];
// 不正常
var DICT_BZC = [
    {name: '不正常', value: '0'}
];
// 打印
var DICT_PRINT = [
    {name: '打印', value: '0'}
];
// 空Select
var DICT_EMPTY = [
    {name: '', value: ''}
];
