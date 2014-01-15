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
    ],
    'displayStyleType': [
        {name: '文本框', value: '10'},
        {name: '文本域', value: '1'},
        {name: '密码框', value: '2'},
        {name: '下拉框', value: '3'},
        {name: '按钮', value: '4'}
    ],
    'dictList': [
        {name: '表单布局', value: 'formLayoutType'},
        {name: '显示风格', value: 'displayStyleType'}
    ]
};
var formOption = {
    layoutType: 'T',
    fields: [
        {name: 'colCount', displayName: '列数', defaultValue: '3'},
        {name: 'layoutType', displayName: '布局类型', displayStyle: DS_COMBO_BOX, dictId: 'formLayoutType', defaultValue: 'T'},
        {name: 'labelGap', displayName: 'Label间隔', defaultValue: 5},
        {name: 'fieldGap', displayName: '字段间隔', defaultValue: 15}
    ]
};
var formFieldOption = {
    layoutType: 'T',
    fields: [
        {name: 'name', displayName: '名称'},
        {name: 'displayName', displayName: '显示名'},
        {name: 'displayStyle', displayName: "显示风格", displayStyle: DS_COMBO_BOX, dictId: 'displayStyleType', defaultValue: "10"},
        {name: 'dictId', displayName: '数据字典', displayStyle: DS_COMBO_BOX, dictId: 'dictList'},
        {name: 'defaultValue', displayName: '默认值'}
    ]
};

// metauiconfig
var muConfig = {'FormConfig': formOption, 'FormFieldConfig': formFieldOption};