
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProLayout,
} from '@ant-design/pro-components';
import { useState } from 'react';
import defaultProps from './_defaultProps';

export default () => {
    const [settings] = useState<Partial<ProSettings> | undefined>({
        layout: 'side',
        navTheme: "light",
        contentWidth: "Fluid",
        fixSiderbar: true,
        colorPrimary: "#13C2C2",
        splitMenus: false,
        fixedHeader: false,
        siderMenuType: "sub",
       
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
                siderWidth={256}
                pure= {false}
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
                menu={{
                    type: 'group',
                }}
                menuItemRender={(item, dom) => (
                    <div
                        onClick={() => {
                            setPathname(item.path || '/welcome');
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
                            minHeight: 600,
                        }}
                    >
                        <div />
                    </ProCard>
                </PageContainer>
            </ProLayout>
        </div>
    );
};