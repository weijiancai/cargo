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

var metaList =
[
    {"id":"", "name": "meta", "displayName": "元数据", "desc": "", "isValid": "T", "sortNum": "1", "inputDate": "2014-01-01", "fields": [
        {"id": "", "name": "meta_id", "displayName": "元数据ID", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "meta_name", "displayName": "元数据名称", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "meta_desc", "displayName": "元数据描述", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "meta_isValid", "displayName": "是否有效", "dataType": "Boolean", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "meta_sortNum", "displayName": "排序号", "dataType": "Int", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "meta_inputDate", "displayName": "录入时间", "dataType": "Date", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""}
    ]},
    {"id":"", "name": "metaField", "displayName": "元数据字段", "desc": "", "isValid": "T", "sortNum": "2", "inputDate": "2014-01-01", "fields": [
        {"id": "", "name": "metaField_id", "displayName": "元数据字段ID", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_name", "displayName": "元数据字段名称", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_desc", "displayName": "元数据字段描述", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_dataType", "displayName": "数据类型", "dataType": "Dict", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_defaultValue", "displayName": "默认值", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_dbColumn", "displayName": "数据库列", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_isValid", "displayName": "是否有效", "dataType": "Boolean", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_sortNum", "displayName": "排序号", "dataType": "Int", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "", "name": "metaField_inputDate", "displayName": "录入时间", "dataType": "Date", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""}
    ]}
]

var layoutList = [
    {id: "0", name: "ROOT", displayName: "布局管理器", pid: "", desc: "", sortNum: "", children: [
        {id: "1", name: "FORM", displayName: "表单", desc: "", sortNum: "", props:[
            {id: "", name: "name", displayName: "名称", defaultValue: "", sortNum: ""},
            {id: "", name: "displayName", displayName: "显示名", defaultValue: "", sortNum: ""},
            {id: "", name: "colCount", displayName: "列数", defaultValue: "3", sortNum: ""},
            {id: "", name: "colWidth", displayName: "列宽", defaultValue: "180", sortNum: ""},
            {id: "", name: "labelGap", displayName: "labelGap", defaultValue: "5", sortNum: ""},
            {id: "", name: "fieldGap", displayName: "fieldGap", defaultValue: "15", sortNum: ""}
        ], children: [
            {id: "2", name: "FORM_FIELD", displayName: "表单字段", desc: "", sortNum: "", props: [
                {id: "", name: "name", displayName: "名称", defaultValue: "", sortNum: ""},
                {id: "", name: "displayName", displayName: "显示名", defaultValue: "", sortNum: ""},
                {id: "", name: "", displayName: "", defaultValue: "", sortNum: ""},
                {id: "", name: "", displayName: "", defaultValue: "", sortNum: ""},
                {id: "", name: "", displayName: "", defaultValue: "", sortNum: ""}
            ]}
        ]}
    ]}
];
