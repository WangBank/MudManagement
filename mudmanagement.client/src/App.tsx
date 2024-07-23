import {
    PageContainer,
    ProCard,
    ProLayout,
    ProSettings
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';
import BaseTable from './pages/BaseTable';
import BaseChart from './pages/BaseChart';
import { observer } from 'mobx-react-lite';
import store from './store/basestore';
import { Card, Col, Divider, Row, Typography } from 'antd';
const { Title, Link } = Typography;
const App: React.FC<any> =
    observer(() => {
        const [settings] = useState<Partial<ProSettings> | undefined>({
            layout: 'mix',
            // copy from pro site
            navTheme: 'light',
            contentWidth: 'Fluid',
            splitMenus: false,
            fixedHeader: true,
            fixSiderbar: true,
            title: '',
            siderMenuType: "sub",
        });
        const [pathname, setPathname] = useState('');
        const { Meta } = Card;
        const routes = (
            <div
                id="test-pro-layout"
                style={{
                    height: 'auto',
                }}
            >
                <ProLayout
                    token={{
                        header: {
                            colorBgHeader: '#292f33',
                            colorHeaderTitle: '#fff',
                            colorTextMenu: '#dfdfdf',
                            colorTextMenuSecondary: '#dfdfdf',
                            colorTextMenuSelected: '#fff',
                            colorBgMenuItemSelected: '#22272b',
                            colorTextMenuActive: 'rgba(255,255,255,0.85)',
                            colorTextRightActionsItem: '#dfdfdf',
                        },
                        colorTextAppListIconHover: '#fff',
                        colorTextAppListIcon: '#dfdfdf',
                        sider: {
                            colorMenuBackground: '#fff',
                            colorMenuItemDivider: '#dfdfdf',
                            colorBgMenuItemHover: '#f6f6f6',
                            colorTextMenu: '#595959',
                            colorTextMenuSelected: '#242424',
                            colorTextMenuActive: '#242424',
                        },
                    }}
                    siderWidth={256}
                    bgLayoutImgList={[
                        {
                            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                            left: 85,
                            bottom: 100,
                            height: '303px',
                        },
                        {
                            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                            bottom: -68,
                            right: -45,
                            height: '303px',
                        },
                        {
                            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                            bottom: 0,
                            left: 0,
                            width: '331px',
                        },
                    ]}
                    {...defaultProps}
                    location={{
                        pathname,
                    }}
                    logo={false}
                    menu={{
                        type: 'sub',
                        autoClose: false,
                    }}
                    locale={"zh-CN"}
                    onMenuHeaderClick={() => {
                        window.location.href = '/dashboard';
                    }}
                    style={{
                        backgroundColor: 'black',
                    }}
                    headerContentRender={() => (
                        <div style={{
                            textAlign: 'center',
                        }}>
                            <Title
                                level={3}
                                onClick={() => {
                                    window.location.href = '/dashboard';
                                }}
                                type='success'>
                                <Link style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}>
                                    长江经济带城市 多源污泥泥量和泥质 基础数据库
                                </Link>

                            </Title>
                        </div>
                    )}

                    menuItemRender={(item, dom) => (
                        <div
                            onClick={() => {
                                if (item.path.indexOf("mudquality") > -1) {
                                    let selected_category = '';
                                    if (item.path.indexOf('/mudquality/wswn') != -1) {
                                        selected_category = '污水污泥';
                                    }
                                    if (item.path.indexOf('/mudquality/gqwn') != -1) {
                                        selected_category = '管渠污泥';
                                    }
                                    if (item.path.indexOf('/mudquality/hhdn') != -1) {
                                        selected_category = '河湖底泥';
                                    }
                                    if (item.path.indexOf('/mudquality/gcnj') != -1) {
                                        selected_category = '工程泥浆';
                                    }
                                    store.update_selected_city('');
                                    store.get_table_data(item.path || '/', '', selected_category);
                                    if (item.path == '/mudquality') {
                                        setPathname('/mudquality/jcsx');
                                    }
                                    else {
                                        setPathname(item.path || '/');
                                    }

                                }
                                else {
                                    store.get_chart_data(item.path || '/', '', '');
                                    if (item.path == '/mudquantity') {
                                        setPathname('/mudquantity/wswn/chanshengqingkuang');
                                    }
                                    else {
                                        setPathname(item.path || '/');
                                    }


                                }
                            }}
                        >
                            {dom}
                        </div>
                    )}
                    {...settings}
                >
                    <PageContainer>
                        <ProCard
                            style={{
                                height: '80vh',
                                minHeight: 800,
                                // maxHeight: 400,
                               // overflowY: 'auto',
                            }}
                        >
                            {pathname == "" ? (
                                <div style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Divider style={{
                                        height: 50
                                    }}></Divider>
                                    <Row gutter={16}>
                                        <Col span={6}>
                                        </Col>
                                        <Col span={6}>
                                            <Card bordered={true} hoverable={true} onClick={
                                                () => {
                                                    setPathname('/mudquantity/wswn/chanshengqingkuang');
                                                }
                                            }>
                                                <Meta
                                                    title="多源污泥泥量"
                                                    description="点击跳转到多源污泥泥量页面"
                                                />
                                            </Card>
                                        </Col>
                                        <Col span={6}>
                                            <Card bordered={true} hoverable={true} onClick={
                                                () => {
                                                    setPathname('/mudquality/wswn/jcsx');
                                                }
                                            }>
                                                <Meta
                                                    title="多源污泥泥质"
                                                    description="点击跳转到多源污泥泥质页面"
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                            ) : pathname.indexOf("mudquality") > -1 ? <BaseTable pathname={pathname} /> : <BaseChart pathname={pathname} />}
                        </ProCard>
                    </PageContainer>
                </ProLayout>
            </div>
        )
        return (
            routes
        );
    });

export default App;