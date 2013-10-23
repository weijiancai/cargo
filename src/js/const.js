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
// 是/否
var DICT_BOOLEAN = [
    {name: '是', value: 'T'}, {name: '否', value: 'F'}
];
// 归档方式
var DICT_GDFS = [
    {name: '全部', value: '1'}, {name: '自动归档', value: '2'}, {name: '手工归档', value: '3'}
];