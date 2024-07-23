import {
    CrownFilled,
    TabletFilled,
} from '@ant-design/icons';


export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/mudquantity',
                name: '多源污泥泥量',
                icon: <CrownFilled />,
                routes: [
                    {
                        path: '/mudquantity/wswn',
                        name: '污水污泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquantity/wswn/chanshengqingkuang',
                                name: '产生情况',
                                component: './pages/BaseChart',
                            },
                            {
                                path: '/mudquantity/wswn/chuzhiqingkuang',
                                name: '处置情况',
                                component: './pages/BaseChart',
                            }
                        ],
                    },
                    {
                        path: '/mudquantity/gqwn',
                        name: '管渠污泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquantity/gqwn/chanshengqingkuang',
                                name: '产生情况',
                                component: './pages/BaseChart',
                            },
                        ],
                    },
                    {
                        path: '/mudquantity/hhdn',
                        name: '河湖底泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquantity/hhdn/csqk',
                                name: '产生情况',
                                component: './pages/BaseChart',
                            },
                        ],
                    },
                    {
                        path: '/mudquantity/gcnj',
                        name: '工程泥浆',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquantity/gcnj/csqk',
                                name: '产生情况',
                                component: './pages/BaseChart',
                            },
                        ],
                    }
                ],
            },
            {
                name: '多源污泥泥质',
                icon: <TabletFilled />,
                path: '/mudquality',
                routes: [
                    {
                        path: '/mudquality/wswn',
                        name: '污水污泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquality/wswn/jcsx',
                                name: '基础属性',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/wswn/hjsx',
                                name: '环境属性',
                                icon: <CrownFilled />,
                                routes: [
                                    {
                                        path: '/mudquality/wswn/hjsx/zjs',
                                        name: '重金属',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/wswn/hjsx/dhft',
                                        name: '多环芳烃',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/wswn/hjsx/kss',
                                        name: '抗生素',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/wswn/hjsx/xdfcw',
                                        name: '消毒副产物',
                                        icon: <CrownFilled />,
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/wswn/zysx',
                                name: '资源属性',
                                icon: <CrownFilled />,
                            },
                        ],
                    },
                    {
                        path: '/mudquality/gqwn',
                        name: '管渠污泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquality/gqwn/jcsx',
                                name: '基础属性',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/gqwn/hjsx',
                                name: '环境属性',
                                icon: <CrownFilled />,
                                routes: [
                                    {
                                        path: '/mudquality/gqwn/hjsx/zjs',
                                        name: '重金属',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gqwn/hjsx/dhft',
                                        name: '多环芳烃',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gqwn/hjsx/kss',
                                        name: '抗生素',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gqwn/hjsx/xdfcw',
                                        name: '消毒副产物',
                                        icon: <CrownFilled />,
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/gqwn/zysx',
                                name: '资源属性',
                                icon: <CrownFilled />,
                            },
                        ],
                    },
                    {
                        path: '/mudquality/hhdn',
                        name: '河湖底泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquality/hhdn/jcsx',
                                name: '基础属性',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/hhdn/hjsx',
                                name: '环境属性',
                                icon: <CrownFilled />,
                                routes: [
                                    {
                                        path: '/mudquality/hhdn/hjsx/zjs',
                                        name: '重金属',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/hhdn/hjsx/dhft',
                                        name: '多环芳烃',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/hhdn/hjsx/kss',
                                        name: '抗生素',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/hhdn/hjsx/xdfcw',
                                        name: '消毒副产物',
                                        icon: <CrownFilled />,
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/hhdn/zysx',
                                name: '资源属性',
                                icon: <CrownFilled />,
                            },
                        ],
                    },
                    {
                        path: '/mudquality/gcnj',
                        name: '工程泥浆',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquality/gcnj/jcsx',
                                name: '基础属性',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/gcnj/hjsx',
                                name: '环境属性',
                                icon: <CrownFilled />,
                                routes: [
                                    {
                                        path: '/mudquality/gcnj/hjsx/zjs',
                                        name: '重金属',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gcnj/hjsx/dhft',
                                        name: '多环芳烃',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gcnj/hjsx/kss',
                                        name: '抗生素',
                                        icon: <CrownFilled />,
                                    },
                                    {
                                        path: '/mudquality/gcnj/hjsx/xdfcw',
                                        name: '消毒副产物',
                                        icon: <CrownFilled />,
                                    },
                                ]
                            },
                            {
                                path: '/mudquality/gcnj/zysx',
                                name: '资源属性',
                                icon: <CrownFilled />,
                            },
                        ],
                    }


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