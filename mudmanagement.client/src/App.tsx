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
const App: React.FC<any> =
    observer(() => {
        const [settings] = useState<Partial<ProSettings> | undefined>({
            layout: 'mix',
            // copy from pro site
            navTheme: 'light',
            contentWidth: 'Fluid',
            splitMenus: true,
            fixedHeader: true,
            fixSiderbar: true,
            title: '长江经济带城市 多源污泥泥量和泥质 基础数据库',
            siderMenuType: "sub"
        });

        const [pathname, setPathname] = useState('/mudquantity/wswn/chanliang');
        return (

            <div
                id="test-pro-layout"
                style={{
                    height: 'auto',
                }}
            >
                <ProLayout
                    token={{
                        header: {
                            colorBgHeader: '#304156',
                            colorHeaderTitle: '#fff',
                            colorTextMenu: '#dfdfdf',
                            colorTextMenuSecondary: '#dfdfdf',
                            colorTextMenuSelected: '#fff',
                            colorBgMenuItemSelected: '#22272b',
                            colorTextRightActionsItem: '#dfdfdf',
                            colorBgMenuItemHover: '#fff',
                        },
                        sider: {
                            colorMenuBackground: '#304156',
                            colorMenuItemDivider: '#fff',
                            colorTextMenu: '#dfdfdf',
                            colorTextMenuSecondary: '#dfdfdf',
                            colorTextMenuSelected: '#fff',
                            colorBgMenuItemSelected: '#22272b',
                            colorTextMenuItemHover: '#fff',
                            colorBgMenuItemHover: '#304156',
                        },
                        colorPrimary: '#1890ff',
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
                        window.location.href = '/';
                    }}
                    style={{
                        backgroundColor: 'black',
                    }}

                    menuItemRender={(item, dom) => (
                        <div
                            onClick={() => {
                                setPathname(item.path || '/');
                                if (item.path.indexOf("mudquality") > -1) {
                                    store.get_table_data(item.path || '/', '', '');
                                }
                                else {
                                    store.get_chart_data(item.path || '/', store.seleted_province);
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
                                minHeight: 900,
                            }}
                        >
                            {pathname.indexOf("mudquality") > -1 ? <BaseTable pathname={pathname} /> : <BaseChart pathname={pathname} />}
                        </ProCard>
                    </PageContainer>
                </ProLayout>
            </div>

        );
    });

export default App;