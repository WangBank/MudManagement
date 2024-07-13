
import {
    LoginFormPage,
    ProConfigProvider,
} from '@ant-design/pro-components';
import { Divider } from 'antd';

const Page = () => {
    return (
        <div
            style={{
                backgroundColor: 'white',
                height: '100vh',
                textAlign: 'center'
            }}
        >
            <LoginFormPage
                backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
                backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                title="长江经济带城市多源污泥泥量和泥质基础数据库"
                onFinish={ () => {
                    window.location.href = '/dashboard';
                }}
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0,0.65)',
                    backdropFilter: 'blur(4px)',
                }}
                submitter={{searchConfig: {submitText: '进入系统'}}}
            >
                <Divider></Divider>
            </LoginFormPage>
        </div>
    );
};

export default () => {
    return (
        <ProConfigProvider dark>
            <Page />
        </ProConfigProvider>
    );
};