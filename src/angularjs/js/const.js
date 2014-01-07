/**
 * 常量定义脚本文件
 */

// 显示风格
var DS_TEXT_FIELD = 0;
var DS_TEXT_AREA = 1;
var DS_PASSWORD = 2;
var DS_COMBO_BOX = 3;
var DS_BUTTON = 4; // 按钮
// 数据字典
var dictList = {
    'formLayoutType': [
        {name: '表格布局', value: 'T'},
        {name: '流式布局', value: 'F'}
    ]
};
var formOption = {
    formLayout: 'T',
    fields: [
        {name: 'colCount', displayName: '列数', defaultValue: '3'},
        {name: 'layoutType', displayName: '布局类型', displayStyle: DS_COMBO_BOX, dictId: 'formLayoutType'},
        {name: 'labelGap', displayName: 'Label间隔', defaultValue: 5},
        {name: 'fieldGap', displayName: '字段间隔', defaultValue: 15}
    ]
};