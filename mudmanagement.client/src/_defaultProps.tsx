import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
} from '@ant-design/icons';
import BaseChart from './pages/BaseChart';


export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/mudquantity',
                name: '泥量',
                icon: <CrownFilled />,
                component: './pages/BaseChart',
                routes: [
                    {
                        path: '/mudquantity/wswn',
                        name: '污水污泥',
                        icon: <CrownFilled />,
                        component: './Welcome',
                        routes: [
                            {
                                path: '/mudquantity/wswn/chanliang',
                                name: '产量',
                                icon: <CrownFilled />,
                                component: 'BaseChart',
                            },
                            {
                                path: '/mudquantity/wswn/chanlv',
                                name: '产率',
                                icon: <CrownFilled />,
                                component: <BaseChart></BaseChart>,
                            }
                        ],
                    },
                    {
                        path: '/mudquantity/gqwn',
                        name: '管渠污泥',
                        icon: <CrownFilled />,
                        component: './Welcome',
                        routes: [
                            {
                                path: '/mudquantity/gqwn/chanliang',
                                name: '产量',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                        ],
                    }
                ],
            },
            {
                name: '泥质',
                icon: <TabletFilled />,
                path: '/mudquality',
                component: './ListTableList',
                routes: [
                    {
                        path: '/mudquality/jcsx',
                        name: '基础属性',
                        icon: <CrownFilled />,
                        component: './Welcome',
                        routes: [
                            {
                                path: '/mudquality/jcsx/ph',
                                name: 'PH',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/jcsx/ph/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/ph/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/ph/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/ph/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/jcsx/hanshuilv',
                                name: '含水率',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/jcsx/hanshuilv/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshuilv/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshuilv/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshuilv/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/jcsx/yjz',
                                name: '有机质',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/jcsx/yjz/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/yjz/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/yjz/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/yjz/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/jcsx/hanshaliang',
                                name: '含沙量',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/jcsx/hanshaliang/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshaliang/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshaliang/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/jcsx/hanshaliang/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        path: '/mudquality/hjsx',
                        name: '环境属性',
                        icon: <CrownFilled />,
                        component: './Welcome',
                        routes: [
                            {
                                path: '/mudquality/hjsx/zhjs',
                                name: '重金属',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/hjsx/zhjs/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/zhjs/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/zhjs/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/zhjs/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/hjsx/dhaj',
                                name: '多环芳烃',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/hjsx/dhaj/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/dhaj/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/dhaj/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/dhaj/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/hjsx/kss',
                                name: '抗生素',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/hjsx/kss/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/kss/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/kss/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/kss/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/hjsx/xdy',
                                name: '消毒副产物',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/hjsx/xdy/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/xdy/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/xdy/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/hjsx/xdy/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        path: '/mudquality/zysx',
                        name: '资源属性',
                        icon: <CrownFilled />,
                        component: './Welcome',
                        routes: [
                            {
                                path: '/mudquality/zysx/zyz',
                                name: '总养分',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/zysx/zyz/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/zyz/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/zyz/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/zyz/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/zysx/dan',
                                name: '氮',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/zysx/dan/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/dan/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/dan/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/dan/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/zysx/lin',
                                name: '磷',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/zysx/lin/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/lin/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/lin/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/lin/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/zysx/jia',
                                name: '钾',
                                icon: <CrownFilled />,
                                component: './Welcome',
                                routes: [
                                    {
                                        path: '/mudquality/zysx/jia/wswn',
                                        name: '污水污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/jia/gqwn',
                                        name: '管渠污泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/jia/hhdn',
                                        name: '河湖底泥',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                    {
                                        path: '/mudquality/zysx/jia/gcjn',
                                        name: '工程泥浆',
                                        icon: <CrownFilled />,
                                        component: './Welcome',
                                    },
                                ]
                            },
                        ]
                    },
                ],
            },
        ],
    },
    location: {
        pathname: '/',
    },
    appList: [
    ],
};