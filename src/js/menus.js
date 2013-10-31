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
                    {id: '', name: '航班文件', icon: 'images/hbwj.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '中转转港', icon: 'images/zzzg.jpg', isSingle: false, href: ''},
                        {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                        {id: '', name: '联程货物统计', icon: 'images/lchwtj.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '进港运单高级管理', icon: 'images/jgydgjgl.jpg', isSingle: false, href: ''},
                        {id: '', name: '中转换单', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '海关账册', icon: 'images/hgzc.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '货物操作',
                width: 80,
                items: [
                    {id: '', name: '清库查询', icon: 'images/qkcx.jpg', isSingle: true, href: ''}
                ]
            },
            {
                name: '提单办单',
                items: [
                    {id: '', name: '提货通知', icon: 'images/thtz.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '提货办单', icon: 'images/thbd.jpg', isSingle: false, href: ''},
                        {id: '', name: '介绍信', icon: 'images/jsx.jpg', isSingle: false, href: ''},
                        {id: '', name: '不正常交付记录', icon: 'images/bzcjfjl.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '提货出库',
                width: 80,
                items: [
                    {id: '', name: '提货出库', icon: 'images/thck.jpg', isSingle: true, href: ''}
                ]
            },
            {
                name: '相关操作',
                items: [
                    {id: '', name: '运单状态', icon: 'images/ydzt.jpg', isSingle: true, href: 'in_cxg_ydzt.html'},
                    {id: '', name: '运单日志', icon: 'images/ydrz.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '不正常', icon: 'images/bzc.jpg', isSingle: false, href: ''},
                        {id: '', name: '仓库管理', icon: 'images/ckgl.jpg', isSingle: false, href: ''},
                        {id: '', name: '运单归档查询', icon: 'images/ydgdcx.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '航班查询', icon: 'images/hbcx.jpg', isSingle: false, href: ''},
                        {id: '', name: '卸机比对', icon: 'images/xjbd.jpg', isSingle: false, href: ''},
                        {id: '', name: '航班状态', icon: 'images/hbzt.jpg', isSingle: false, href: ''}
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
        name: '收费与账单'
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

// 国内菜单 -- 收费岗
var MENU_IN_SFG = [
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
        id: 'sub_nav_gncg',
        name: '国内出港',
        groups: [
            {
                name: '出入仓处理',
                items: [
                    {id: '', name: '收费处理', icon: 'images/sfcl.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '退仓处理', icon: 'images/zzzg.jpg', isSingle: false, href: ''},
                        {id: '', name: '运收入仓', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                        {id: '', name: '运单收运入仓', icon: 'images/lchwtj.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '文件操作',
                items: [
                    [
                        {id: '', name: '简易制单', icon: 'images/jyzd.jpg', isSingle: false, href: ''},
                        {id: '', name: '国内正式制单', icon: 'images/gnzszd.jpg', isSingle: false, href: ''},
                        {id: '', name: '拉货补运', icon: 'images/lhby.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                        {id: '', name: '中转接收', icon: 'images/zzjs.jpg', isSingle: false, href: ''},
                        {id: '', name: '航班文件', icon: 'images/hbwj_16.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '始发站换单', icon: 'images/sfzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '中转换单', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '出港运单高级管理', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '货物操作',
                items: [
                    {id: '', name: '板箱复磅', icon: 'images/bxfb.jpg', isSingle: true, href: ''},
                    {id: '', name: '地勤交接取消', icon: 'images/dqjjqx.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '航班预配操作', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '航班配载', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '仓库管理', icon: 'images/ckgl.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '相关操作',
                items: [
                    {id: '', name: '不正常', icon: 'images/bzc.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '运单状态', icon: 'images/ydzt_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '运单日志', icon: 'images/ydrz_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '拉货查询', icon: 'images/lhcx.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/hbcx.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/rfdj_18.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/hbzt.jpg', isSingle: false, href: ''}
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
        name: '收费与账单'
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