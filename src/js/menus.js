// 国内菜单
var MENU_IN = [
    {
        id: 'sub_nav_aqgl',
        name: '安全管理'
    },
    {
        id: 'sub_nav_jcsj',
        name: '基础数据'
    },
    {
        id: 'sub_nav_xtgl',
        name: '系统管理'
    },
    {
        id: 'sub_nav_gnjg',
        name: '国内进港',
        groups: [
            {
                name: '文件操作',
                items: [
                    {id: '', name: '航班文件', icon: 'images/hbwj.jpg', isSingle: true, href: 'in_gtg_hbwj.html'},
                    [
                        {id: '', name: '中转转港', icon: 'images/zzzg.jpg', isSingle: false, href: 'in_cxg_zzzg.html'},
                        {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: '#'},
                        {id: '', name: '联程货物统计', icon: 'images/lchwtj.jpg', isSingle: false, href: '#'}
                    ],
                    [
                        {id: '', name: '进港运单高级管理', icon: 'images/jgydgjgl.jpg', isSingle: false, href: 'in_gtg_jgydgjgl.html'},
                        {id: '', name: '中转换单', icon: 'images/zzhd.jpg', isSingle: false, href: '#'},
                        {id: '', name: '海关账册', icon: 'images/hgzc.jpg', isSingle: false, href: '#'}
                    ]
                ]
            },
            {
                name: '货物操作',
                width: 80,
                items: [
                    {id: '', name: '清库查询', icon: 'images/qkcx.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '提单办单',
                items: [
                    {id: '', name: '提货通知', icon: 'images/thtz.jpg', isSingle: true, href: '#'},
                    [
                        {id: '', name: '提货办单', icon: 'images/thbd.jpg', isSingle: false, href: 'in_gtg_thbd.html'},
                        {id: '', name: '介绍信', icon: 'images/jsx.jpg', isSingle: false, href: '#'},
                        {id: '', name: '不正常交付记录', icon: 'images/bzcjfjl.jpg', isSingle: false, href: '#'}
                    ]
                ]
            },
            {
                name: '提货出库',
                width: 80,
                items: [
                    {id: '', name: '提货出库', icon: 'images/thck.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '相关操作',
                items: [
                    {id: '', name: '运单状态', icon: 'images/ydzt.jpg', isSingle: true, href: 'in_cxg_ydzt.html'},
                    {id: '', name: '运单日志', icon: 'images/ydrz.jpg', isSingle: true, href: '#'},
                    [
                        {id: '', name: '不正常', icon: 'images/bzc.jpg', isSingle: false, href: 'in_cxg_bzc.html'},
                        {id: '', name: '仓库管理', icon: 'images/ckgl.jpg', isSingle: false, href: '#'},
                        {id: '', name: '运单归档查询', icon: 'images/ydgdcx.jpg', isSingle: false, href: 'in_cxg_ydgdcx.html'}
                    ],
                    [
                        {id: '', name: '航班查询', icon: 'images/hbcx.jpg', isSingle: false, href: '#'},
                        {id: '', name: '卸机比对', icon: 'images/xjbd.jpg', isSingle: false, href: '#'},
                        {id: '', name: '航班状态', icon: 'images/hbzt.jpg', isSingle: false, href: '#'}
                    ]
                ]
            }
        ]
    },
    {
        id: 'sub_nav_hbj',
        name: '货包机'
    },
    {
        id: 'sub_nav_jkqc',
        name: '集控器材'
    },
    {
        id: 'sub_nav_sfyzd',
        name: '收费与账单',
        groups: [
            {
                name: '仓库计费',
                /*width: 120,*/
                items: [
                    {id: '', name: '计费业务数据维护', icon: 'images/jfywsjwh.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '结算',
                /*width: 140,*/
                items: [
                    {id: '', name: '发票查询', icon: 'images/fpcx.jpg', isSingle: true, href: 'in_gtg_fpcx.html'},
                    {id: '', name: '手工填开发票', icon: 'images/sgtkfp.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '授权计费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国内出港授权计费', icon: 'images/gncgsqjf.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '费用定义',
                /*width: 115,*/
                items: [
                    {id: '', name: '国内进港费用定义', icon: 'images/gnjcfydy.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '邮航包机收费',
                /*width: 140,*/
                items: [
                    {id: '', name: '国内进港邮航包机收费', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'in_gtg_gnjgybjsf.html'}
                ]
            },
            {
                name: '临时收费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国内进港临时收费', icon: 'images/gnjglssf.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '结算',
                /*width: 140,*/
                items: [
                    {id: '', name: '批量结算', icon: 'images/pljs.jpg', isSingle: true, href: 'in_gtg_pljs.html'},
                    {id: '', name: '包机批量结算', icon: 'images/pljs.jpg', isSingle: true, href: 'in_gtg_bjpljs.html'}
                ]
            }
        ]
    },
    {
        id: 'sub_nav_kpigl',
        name: 'KPI管理'
    },
    {
        id: 'sub_nav_bwjh',
        name: '报文交换'
    },
    {
        id: 'sub_nav_sstj',
        name: '实时统计'
    },
    {
        id: 'sub_nav_gygj',
        name: '公用工具'
    }
];