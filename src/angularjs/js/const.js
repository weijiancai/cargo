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
    {"id":"0", "name": "meta", "displayName": "元数据", "desc": "", "isValid": "T", "sortNum": "1", "inputDate": "2014-01-01", "fields": [
        {"id": "1", "name": "meta_id", "displayName": "元数据ID", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "2", "name": "meta_name", "displayName": "元数据名称", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "3", "name": "meta_displayName", "displayName": "元数据显示名称", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "4", "name": "meta_desc", "displayName": "元数据描述", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "5", "name": "meta_isValid", "displayName": "是否有效", "dataType": "Boolean", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "6", "name": "meta_sortNum", "displayName": "排序号", "dataType": "Int", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "7", "name": "meta_inputDate", "displayName": "录入时间", "dataType": "Date", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""}
    ]},
    {"id":"1", "name": "metaField", "displayName": "元数据字段", "desc": "", "isValid": "T", "sortNum": "2", "inputDate": "2014-01-01", "fields": [
        {"id": "8", "name": "metaField_id", "displayName": "元数据字段ID", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "9", "name": "metaField_name", "displayName": "元数据字段名称", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "10", "name": "metaField_desc", "displayName": "元数据字段描述", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "11", "name": "metaField_dataType", "displayName": "数据类型", "dataType": "Dict", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "12", "name": "metaField_defaultValue", "displayName": "默认值", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "13", "name": "metaField_dbColumn", "displayName": "数据库列", "dataType": "String", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "14", "name": "metaField_isValid", "displayName": "是否有效", "dataType": "Boolean", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "15", "name": "metaField_sortNum", "displayName": "排序号", "dataType": "Int", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""},
        {"id": "16", "name": "metaField_inputDate", "displayName": "录入时间", "dataType": "Date", "desc": "", "defaultValue": "", "dbColumn": "", "isValid": "T", "sortNum": "1", "inputDate": ""}
    ]}
]

var layoutList = [
    {id: "0", name: "ROOT", displayName: "布局管理器", pid: "", desc: "", sortNum: "", children: [
        {id: "1", name: "FORM", displayName: "表单", desc: "", sortNum: "", props:[
            {id: "1", name: "name", displayName: "名称", defaultValue: "", sortNum: ""},
            {id: "2", name: "displayName", displayName: "显示名", defaultValue: "", sortNum: ""},
            {id: "3", name: "colCount", displayName: "列数", defaultValue: "3", sortNum: ""},
            {id: "4", name: "colWidth", displayName: "列宽", defaultValue: "180", sortNum: ""},
            {id: "5", name: "labelGap", displayName: "labelGap", defaultValue: "5", sortNum: ""},
            {id: "6", name: "fieldGap", displayName: "fieldGap", defaultValue: "15", sortNum: ""}
        ], children: [
            {id: "2", name: "FORM_FIELD", displayName: "表单字段", desc: "", sortNum: "", props: [
                {id: "7", name: "name", displayName: "名称", defaultValue: "", sortNum: ""},
                {id: "8", name: "displayName", displayName: "显示名", defaultValue: "", sortNum: ""},
                {id: "9", name: "isSingleLine", displayName: "独行", defaultValue: "false", sortNum: ""},
                {id: "10", name: "isDisplay", displayName: "显示", defaultValue: "true", sortNum: ""},
                {id: "11", name: "width", displayName: "宽", defaultValue: "180", sortNum: ""},
                {id: "12", name: "height", displayName: "高", defaultValue: "", sortNum: ""},
                {id: "13", name: "displayStyle", displayName: "显示风格", defaultValue: "", sortNum: ""},
                {id: "14", name: "dataType", displayName: "数据类型", defaultValue: "", sortNum: ""},
                {id: "15", name: "dictId", displayName: "数据字典", defaultValue: "", sortNum: ""},
                {id: "16", name: "value", displayName: "数据值", defaultValue: "", sortNum: ""},
                {id: "17", name: "sortNum", displayName: "排序号", defaultValue: "", sortNum: ""}
            ]}
        ]}
    ]}
];

var viewList = [
    {id: "1", name: "metaView", displayName: "元数据", layoutId: "1", sortNum: "", configs: [
        {propId: "1", metaFieldId: "", value: "MetaForm"},
        {propId: "2", metaFieldId: "", value: "元数据表单"},
        {propId: "3", metaFieldId: "", value: "3"},
        {propId: "4", metaFieldId: "", value: "180"},
        {propId: "5", metaFieldId: "", value: "5"},
        {propId: "6", metaFieldId: "", value: "15"},

        {propId: "7", metaFieldId: "1", value: "metaId"},
        {propId: "8", metaFieldId: "1", value: "元数据ID"},
        {propId: "9", metaFieldId: "1", value: "false"},
        {propId: "10", metaFieldId: "1", value: "true"},
        {propId: "11", metaFieldId: "1", value: "180"},
        {propId: "12", metaFieldId: "1", value: ""},
        {propId: "13", metaFieldId: "1", value: ""},
        {propId: "14", metaFieldId: "1", value: "STRING"},
        {propId: "15", metaFieldId: "1", value: ""},
        {propId: "16", metaFieldId: "1", value: ""},
        {propId: "17", metaFieldId: "1", value: "1"},

        {propId: "7", metaFieldId: "2", value: "metaName"},
        {propId: "8", metaFieldId: "2", value: "元数据名称"},
        {propId: "9", metaFieldId: "2", value: "false"},
        {propId: "10", metaFieldId: "2", value: "true"},
        {propId: "11", metaFieldId: "2", value: "180"},
        {propId: "12", metaFieldId: "2", value: ""},
        {propId: "13", metaFieldId: "2", value: ""},
        {propId: "14", metaFieldId: "2", value: "STRING"},
        {propId: "15", metaFieldId: "2", value: ""},
        {propId: "16", metaFieldId: "2", value: ""},
        {propId: "17", metaFieldId: "2", value: "1"},

        {propId: "7", metaFieldId: "3", value: "metaDisplayName"},
        {propId: "8", metaFieldId: "3", value: "元数据显示名"},
        {propId: "9", metaFieldId: "3", value: "false"},
        {propId: "10", metaFieldId: "3", value: "true"},
        {propId: "11", metaFieldId: "3", value: "180"},
        {propId: "12", metaFieldId: "3", value: ""},
        {propId: "13", metaFieldId: "3", value: ""},
        {propId: "14", metaFieldId: "3", value: "STRING"},
        {propId: "15", metaFieldId: "3", value: ""},
        {propId: "16", metaFieldId: "3", value: ""},
        {propId: "17", metaFieldId: "3", value: "1"},

        {propId: "7", metaFieldId: "4", value: "desc"},
        {propId: "8", metaFieldId: "4", value: "元数据描述"},
        {propId: "9", metaFieldId: "4", value: "false"},
        {propId: "10", metaFieldId: "4", value: "true"},
        {propId: "11", metaFieldId: "4", value: "180"},
        {propId: "12", metaFieldId: "4", value: ""},
        {propId: "13", metaFieldId: "4", value: ""},
        {propId: "14", metaFieldId: "4", value: "STRING"},
        {propId: "15", metaFieldId: "4", value: ""},
        {propId: "16", metaFieldId: "4", value: ""},
        {propId: "17", metaFieldId: "4", value: "1"},

        {propId: "7", metaFieldId: "5", value: "isValid"},
        {propId: "8", metaFieldId: "5", value: "是否有效"},
        {propId: "9", metaFieldId: "5", value: "false"},
        {propId: "10", metaFieldId: "5", value: "true"},
        {propId: "11", metaFieldId: "5", value: "180"},
        {propId: "12", metaFieldId: "5", value: ""},
        {propId: "13", metaFieldId: "5", value: ""},
        {propId: "14", metaFieldId: "5", value: "STRING"},
        {propId: "15", metaFieldId: "5", value: ""},
        {propId: "16", metaFieldId: "5", value: ""},
        {propId: "17", metaFieldId: "5", value: "1"},

        {propId: "7", metaFieldId: "6", value: "sortNum"},
        {propId: "8", metaFieldId: "6", value: "排序号"},
        {propId: "9", metaFieldId: "6", value: "false"},
        {propId: "10", metaFieldId: "6", value: "true"},
        {propId: "11", metaFieldId: "6", value: "180"},
        {propId: "12", metaFieldId: "6", value: ""},
        {propId: "13", metaFieldId: "6", value: ""},
        {propId: "14", metaFieldId: "6", value: "STRING"},
        {propId: "15", metaFieldId: "6", value: ""},
        {propId: "16", metaFieldId: "6", value: ""},
        {propId: "17", metaFieldId: "6", value: "1"},

        {propId: "7", metaFieldId: "7", value: "inputDate"},
        {propId: "8", metaFieldId: "7", value: "录入时间"},
        {propId: "9", metaFieldId: "7", value: "false"},
        {propId: "10", metaFieldId: "7", value: "true"},
        {propId: "11", metaFieldId: "7", value: "180"},
        {propId: "12", metaFieldId: "7", value: ""},
        {propId: "13", metaFieldId: "7", value: ""},
        {propId: "14", metaFieldId: "7", value: "STRING"},
        {propId: "15", metaFieldId: "7", value: ""},
        {propId: "16", metaFieldId: "7", value: ""},
        {propId: "17", metaFieldId: "7", value: "1"}
    ]}
];
