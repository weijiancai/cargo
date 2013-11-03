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
                    {id: '', name: '提货出库', icon: 'images/thck.jpg', isSingle: true, href: 'in_thg_thck.html'}
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
                width: 170,
                items: [
                    {id: '', name: '收费处理', icon: 'images/sfcl.jpg', isSingle: true, href: 'in_sfg_sfcl.html'},
                    [
                        {id: '', name: '退仓处理', icon: 'images/zzzg.jpg', isSingle: false, href: ''},
                        {id: '', name: '运收入仓', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                        {id: '', name: '运单收运入仓', icon: 'images/lchwtj.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '文件操作',
                width: 315,
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
                width: 260,
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
                width: 165,
                items: [
                    {id: '', name: '不正常', icon: 'images/bzc_32.jpg', isSingle: true, href: ''},
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
                    {id: '', name: '发票查询', icon: 'images/fpcx.jpg', isSingle: true, href: 'in_gtg_fpcx.html'}
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
                    {id: '', name: '国内出港费用定义', icon: 'images/gncgfydy.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '邮航包机收费',
                /*width: 140,*/
                items: [
                    {id: '', name: '国内出港邮航包机收费', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'in_gtg_gnjgybjsf.html'}
                ]
            },
            {
                name: '临时收费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国内出港临时收费', icon: 'images/gncglssf.jpg', isSingle: true, href: '#'}
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


// 国内菜单 -- 收运岗
var MENU_IN_SYG = [
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
                /*width: 170,*/
                items: [
                    {id: '', name: '入库调度', icon: 'images/rkdd.jpg', isSingle: true, href: 'in_syg_rkdd.html'},
                    {id: '', name: '收费处理', icon: 'images/gncgjf.jpg', isSingle: true, href: 'in_syg_sfcl.html'},
                    [
                        {id: '', name: '退仓处理', icon: 'images/tccl_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '运收入仓', icon: 'images/syrc.jpg', isSingle: false, href: ''},
                        {id: '', name: '运单收运入仓', icon: 'images/ydsyrc.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '文件操作',
                /*width: 315,*/
                items: [
                    {id: '', name: '简易制单', icon: 'images/jyzd_32.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '国内正式制单', icon: 'images/gnzszd.jpg', isSingle: false, href: ''},
                        {id: '', name: '变更申请', icon: 'images/bgsq.jpg', isSingle: false, href: ''},
                        {id: '', name: '板箱申领', icon: 'images/bxsl.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '拉货补运', icon: 'images/lhby.jpg', isSingle: false, href: ''},
                        {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                        {id: '', name: '中转接收', icon: 'images/zzjs.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '载量计划', icon: 'images/zljh.jpg', isSingle: false, href: ''},
                        {id: '', name: '代理人差错查询', icon: 'images/dlrcccx.jpg', isSingle: false, href: ''},
                        {id: '', name: '航班文件', icon: 'images/hbwj_16.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '始发站换单', icon: 'images/sfzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '代理人简易制单', icon: 'images/hbzt.jpg', isSingle: false, href: ''},
                        {id: '', name: '中转换单', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/6.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '货物操作',
                /*width: 260,*/
                items: [
                    {id: '', name: '航班装配', icon: 'images/hbzp.jpg', isSingle: true, href: ''},
                    [
                        {id: '', name: '', icon: 'images/1.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/dqjjqx_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/2.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/rfdj_18.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '相关操作',
                /*width: 165,*/
                items: [
                    [
                        {id: '', name: '', icon: 'images/5.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/ydzt_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/3.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/lhcx.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/hbcx.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/4.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/rfdj_18.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
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
                    {id: '', name: '发票查询', icon: 'images/fpcx.jpg', isSingle: true, href: 'in_gtg_fpcx.html'}
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
                    {id: '', name: '国内出港费用定义', icon: 'images/gncgfydy.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '邮航包机收费',
                /*width: 140,*/
                items: [
                    {id: '', name: '国内出港邮航包机收费', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'in_gtg_gnjgybjsf.html'}
                ]
            },
            {
                name: '临时收费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国内出港临时收费', icon: 'images/gncglssf.jpg', isSingle: true, href: '#'}
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



// 国际菜单 -- 收费岗
var MENU_OUT_SFG = [
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
        id: 'sub_nav_gjcg',
        name: '国际出港',
        groups: [
            {
                name: '出入仓处理',
                /*width: 170,*/
                items: [
                    [       {id: '', name: '入库调度', icon: 'images/rkdd_16.jpg', isSingle: true, href: 'in_syg_rkdd.html'},
                            {id: '', name: '收费处理', icon: 'images/sfcl_01.jpg', isSingle: true, href: 'in_syg_sfcl.html'},
                            {id: '', name: '退仓处理', icon: 'images/tccl_16.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '按航班收运入仓', icon: 'images/hbypcz.jpg', isSingle: false, href: ''},
                            {id: '', name: '收运入仓', icon: 'images/syrc.jpg', isSingle: false, href: ''},
                            {id: '', name: '运单收运入仓', icon: 'images/ydsyrc.jpg', isSingle: false, href: ''}
                    ]
            ]
            },
            {
                name: '文件操作',
                /*width: 315,*/
                items: [
                    [
                            {id: '', name: '简易制单', icon: 'images/jyzd.jpg', isSingle: true, href: ''},
                            {id: '', name: '国际代单', icon: 'images/gjdd.jpg', isSingle: false, href: ''},
                            {id: '', name: '变更申请', icon: 'images/bgsq.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '国际正式制单', icon: 'images/gnzszd.jpg', isSingle: false, href: ''},
                            {id: '', name: '运单文件', icon: 'images/ydwj.jpg', isSingle: false, href: ''},
                            {id: '', name: '板箱申领', icon: 'images/bxsl.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '拉货补运', icon: 'images/lhby.jpg', isSingle: false, href: ''},
                            {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: ''},
                            {id: '', name: '中转接收', icon: 'images/zzjs.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '载量计划', icon: 'images/zljh.jpg', isSingle: false, href: ''},
                            {id: '', name: '代理人差错查询', icon: 'images/dlrcccx.jpg', isSingle: false, href: ''},
                            {id: '', name: '航班文件', icon: 'images/hbwj_16.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '海关报文管理', icon: 'images/hgbwgl.jpg', isSingle: false, href: ''},
                            {id: '', name: '中转换单', icon: 'images/hbypcz.jpg', isSingle: false, href: ''},
                            {id: '', name: '分单制表', icon: 'images/hbypcz.jpg', isSingle: false, href: ''}
                    ],
                    [
                            {id: '', name: '分单拼单', icon: 'images/hbypcz.jpg', isSingle: false, href: ''},
                            {id: '', name: 'AMS舱单', icon: 'images/hbypcz.jpg', isSingle: false, href: ''},
                            {id: '', name: '海关账册', icon: 'images/hbypcz.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '货物操作',
                /*width: 260,*/
                items: [
                    [
                        {id: '', name: '', icon: 'images/7.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/8.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/1.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/2.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/rfdj_18.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/dqjjqx_16.jpg', isSingle: false, href: ''}
                    ]
                ]
            },
            {
                name: '相关操作',
                /*width: 165,*/
                items: [
                    [
                        {id: '', name: '', icon: 'images/5.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/ydzt_16.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/3.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/lhcx.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/hbcx.jpg', isSingle: false, href: ''}
                    ],
                    [
                        {id: '', name: '', icon: 'images/4.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/rfdj_18.jpg', isSingle: false, href: ''},
                        {id: '', name: '', icon: 'images/zzhd.jpg', isSingle: false, href: ''}
                    ]
                ]
            }
        ]
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
                    {id: '', name: '手工填开发票', icon: 'images/sgtkfp.jpg', isSingle: true, href: 'in_gtg_sgtkfp.html'}
                ]
            },
            {
                name: '授权计费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港授权计费', icon: 'images/gncgsqjf.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '费用定义',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港费用定义', icon: 'images/gncgfydy.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '邮航包机收费',
                /*width: 140,*/
                items: [
                    {id: '', name: '国际出港邮航包机收费', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'in_gtg_gnjgybjsf.html'}
                ]
            },
            {
                name: '临时收费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港临时收费', icon: 'images/gncglssf.jpg', isSingle: true, href: '#'}
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


// 国际菜单 -- 柜台岗
var MENU_EN_GTD = [
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
        id: 'sub_nav_gjjg',
        name: '国际进港',
        groups: [
            {
                name: '文件操作',
                /*width: 170,*/
                items: [
                    {id: '', name: '航班文件', icon: 'images/hbwj.jpg', isSingle: true, href: 'in_syg_rkdd.html'},
                    {id: '', name: '分单录入理货', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'in_syg_rkdd.html'},
                    [
                        {id: '', name: '中转转港', icon: 'images/zzzg.jpg', isSingle: false, href: 'in_cxg_zzzg.html'},
                        {id: '', name: '冷藏登记', icon: 'images/lcdj.jpg', isSingle: false, href: '#'},
                        {id: '', name: '联程货物统计', icon: 'images/lchwtj.jpg', isSingle: false, href: '#'}
                    ],
                    [
                        {id: '', name: '海关报文管理', icon: 'images/hgbwgl.jpg', isSingle: false, href: 'in_gtg_hgbwgl.html'},
                        {id: '', name: '海关账册', icon: 'images/hgzc.jpg', isSingle: false, href: '#'},
                        {id: '', name: '进港运单高级管理', icon: 'images/jgydgjgl.jpg', isSingle: false, href: '#'}
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
                        {id: '', name: '提单', icon: 'images/td.jpg', isSingle: false, href: 'in_gtg_thbd.html'},
                        {id: '', name: '提货办单', icon: 'images/thbd.jpg', isSingle: false, href: '#'},
                        {id: '', name: '介绍信', icon: 'images/jsx.jpg', isSingle: false, href: '#'}
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
                        {id: '', name: '航班查询', icon: 'images/hbcx.jpg', isSingle: false, href: '#'},
                        {id: '', name: '仓库管理', icon: 'images/ckgl.jpg', isSingle: false, href: 'in_cxg_ydgdcx.html'}
                    ]
                ]
            }
        ]
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
                    {id: '', name: '发票查询', icon: 'images/fpcx.jpg', isSingle: true, href: 'out_sfg_fpcx.html'},
                    {id: '', name: '手工填开发票', icon: 'images/sgtkfp.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '授权计费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港授权计费', icon: 'images/gncgsqjf.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '费用定义',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港费用定义', icon: 'images/gncgfydy.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '邮航包机收费',
                /*width: 140,*/
                items: [
                    {id: '', name: '国际出港邮航包机收费', icon: 'images/jfywsjwh.jpg', isSingle: true, href: 'out_sfg_gjcgybjsf.html'}
                ]
            },
            {
                name: '临时收费',
                /*width: 115,*/
                items: [
                    {id: '', name: '国际出港临时收费', icon: 'images/gncglssf.jpg', isSingle: true, href: '#'}
                ]
            },
            {
                name: '结算',
                /*width: 140,*/
                items: [
                    {id: '', name: '批量结算', icon: 'images/pljs.jpg', isSingle: true, href: 'out_sfg_pljs.html'},
                    {id: '', name: '包机批量结算', icon: 'images/pljs.jpg', isSingle: true, href: 'out_sfg_bjpljs.html'}
                ]
            }
        ]
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