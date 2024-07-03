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
                name: '泥量',
                icon: <CrownFilled />,
                routes: [
                    {
                        path: '/mudquantity/wswn',
                        name: '污水污泥',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquantity/wswn/chanliang',
                                name: '产量',
                                icon: <CrownFilled />,
                                component: './pages/BaseChart',
                            },
                            {
                                path: '/mudquantity/wswn/chanlv',
                                name: '产率',
                                icon: <CrownFilled />,
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
                                path: '/mudquantity/gqwn/chanliang',
                                name: '产量',
                                icon: <CrownFilled />,
                                component: './pages/BaseChart',
                            },
                        ],
                    }
                ],
            },
            {
                name: '泥质',
                icon: <TabletFilled />,
                path: '/mudquality',
                routes: [
                    {
                        path: '/mudquality/jcsx',
                        name: '基础属性',
                        icon: <CrownFilled />,
                    },
                    {
                        path: '/mudquality/hjsx',
                        name: '环境属性',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: '/mudquality/hjsx/zhjs',
                                name: '重金属',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/hjsx/dhaj',
                                name: '多环芳烃',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/hjsx/kss',
                                name: '抗生素',
                                icon: <CrownFilled />,
                            },
                            {
                                path: '/mudquality/hjsx/xdy',
                                name: '消毒副产物',
                                icon: <CrownFilled />,
                            },
                        ]
                    },
                    {
                        path: '/mudquality/zysx',
                        name: '资源属性',
                        icon: <CrownFilled />,
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