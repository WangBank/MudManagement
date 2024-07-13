import React, { useEffect } from 'react';
import { Column } from '@ant-design/charts';
import { Col, Image, Row, Select, Divider } from 'antd';
import { observer } from 'mobx-react-lite';
import store from '../store/basestore';
import { ProCard } from '@ant-design/pro-components';
import 各城市干污泥产生量2009年 from '../assets/长江经济带-各城市干污泥产生量2009年.jpg';
import 各城市干污泥产生量2013年 from '../assets/长江经济带-各城市干污泥产生量2013年.jpg';
import 各城市干污泥产生量2017年 from '../assets/长江经济带-各城市干污泥产生量2017年.jpg';
import 各城市干污泥产生量2021年 from '../assets/长江经济带-各城市干污泥产生量2021年.jpg';

import 各城市污水厂污泥产率2009年 from '../assets/长江经济带-各城市污水厂污泥产率2009年.jpg';
import 各城市污水厂污泥产率2013年 from '../assets/长江经济带-各城市污水厂污泥产率2013年.jpg';
import 各城市污水厂污泥产率2017年 from '../assets/长江经济带-各城市污水厂污泥产率2017年.jpg';
import 各城市污水厂污泥产率2021年 from '../assets/长江经济带-各城市污水厂污泥产率2021年.jpg';

import 各城市管沟污泥产生量2009年 from '../assets/长江经济带-各城市管沟污泥产生量2009年.jpg';
import 各城市管沟污泥产生量2013年 from '../assets/长江经济带-各城市管沟污泥产生量2013年.jpg';
import 各城市管沟污泥产生量2017年 from '../assets/长江经济带-各城市管沟污泥产生量2017年.jpg';
import 各城市管沟污泥产生量2021年 from '../assets/长江经济带-各城市管沟污泥产生量2021年.jpg';

const BaseChart: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    const { seleted_province } = store;
    store.get_chart_data(props.pathname, seleted_province || '上海市');
  }, []);

  const chartDetails = (
    <Row>
      <Col span={4}>
        <Select
          showSearch
          allowClear={true}
          style={{ width: 150 }}
          placeholder="搜索相应的省份或城市"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          value={store.seleted_province}
          onChange={(value) => {
            store.update_seleted_province(value);
            store.get_chart_data(props.pathname, value);
          }
          }
          options={[
            {
              value: '上海市',
              label: '上海市',
            },
            {
              value: '江苏省',
              label: '江苏省',
            },
            {
              value: '浙江省',
              label: '浙江省',
            },
            {
              value: '安徽省',
              label: '安徽省',
            },
            {
              value: '江西省',
              label: '江西省',
            },
            {
              value: '湖北省',
              label: '湖北省',
            },
            {
              value: '湖南省',
              label: '湖南省',
            },
            {
              value: '重庆市',
              label: '重庆市',
            },
            {
              value: '四川省',
              label: '四川省',
            },
            {
              value: '贵州省',
              label: '贵州省',
            },
            {
              value: '云南省',
              label: '云南省',
            },
          ]}
        />
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        {props.pathname != '/mudquantity/gqwn/chanliang' && <Column tooltip={{
          name: props.pathname == '/mudquantity/wswn/chanliang' ? '产量' : '产率',
          channel: 'y',

        }} title={props.pathname == '/mudquantity/wswn/chanliang' ? "污水污泥-产量 (tDS/a)" : "污水污泥-产率 (tDS/万m³)"} data={store.mud_quantity_wswn} width={800} xField={'year'} yField={props.pathname == '/mudquantity/wswn/chanliang' ? 'chanliang' : 'chanlv'} />}
        {props.pathname == '/mudquantity/gqwn/chanliang' && <Column tooltip={{
          name: '产量',
          channel: 'y',

        }} title={"管渠污泥-产量 (tDS/a)"} data={store.mud_quantity_gqwn} width={800} xField={'year'} yField={'chanliang'} />}
      </Col>
    </Row>
  )

  const imageDetails = (
    <>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        {props.pathname == '/mudquantity/wswn/chanliang' && (
          <>
            <Image
              width={"40%"} src={各城市干污泥产生量2009年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市干污泥产生量2013年}
            />
            <Divider></Divider>
            <Image
              width={"40%"} src={各城市干污泥产生量2017年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市干污泥产生量2021年}
            />
          </>

        )}
        {props.pathname == '/mudquantity/wswn/chanlv' && (
          <>
            <Image
              width={"40%"} src={各城市污水厂污泥产率2009年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市污水厂污泥产率2013年}
            />
            <Divider></Divider>
            <Image
              width={"40%"} src={各城市污水厂污泥产率2017年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市污水厂污泥产率2021年}
            />
          </>

        )}

        {props.pathname == '/mudquantity/gqwn/chanliang' && (
          <>
            <Image
              width={"40%"} src={各城市管沟污泥产生量2009年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市管沟污泥产生量2013年}
            />
            <Divider></Divider>
            <Image
              width={"40%"} src={各城市管沟污泥产生量2017年} />
            <Divider type='vertical'></Divider>
            <Image
              width={"40%"}
              src={各城市管沟污泥产生量2021年}
            />
          </>

        )}
      </Image.PreviewGroup>

    </>

  )

  return (
    <>
      <>
        {props.pathname == '/mudquantity/wswn/chanliang' &&
          <ProCard bordered
            headerBordered title="长江经济带-各城市干污泥产生量"
            tabs={{
              type: 'card',
            }}
          >
            <ProCard.TabPane key="tab1" tab="图表概览">
              {imageDetails}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="详细数据">
              {chartDetails}
            </ProCard.TabPane>
          </ProCard>
        }

        {props.pathname == '/mudquantity/wswn/chanlv' &&
          <ProCard
            bordered
            headerBordered
            title="长江经济带-各城市污水厂污泥产率"
            tabs={{
              type: 'card',
            }}>
            <ProCard.TabPane key="tab1" tab="图表概览">
              {imageDetails}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="详细数据">
              {chartDetails}
            </ProCard.TabPane>
          </ProCard>}

        {props.pathname == '/mudquantity/gqwn/chanliang' &&
          <ProCard
            title="长江经济带-各城市管沟污泥产生量"
            bordered
            headerBordered
            tabs={{
              type: 'card',
            }}>
            <ProCard.TabPane key="tab1" tab="图表概览">
              {imageDetails}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="详细数据">
              {chartDetails}
            </ProCard.TabPane>
          </ProCard>}
      </>



    </>
  );
});
export default BaseChart;