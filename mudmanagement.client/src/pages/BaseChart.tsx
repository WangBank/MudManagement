import React, { useEffect, useState } from 'react';
import { Column, Pie } from '@ant-design/charts';
import { Col, Image, Row, Select, Divider, Table, Segmented } from 'antd';
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
import { mud_quantity_gqwn_columns, mud_quantity_wswn_columns, mud_quantity_wswn_czqk_columns } from '../models/table_model';

const BaseChart: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    store.get_chart_data(props.pathname);
  }, []);

  const [value, setValue] = useState<string | number>('总体情况');

  const time_select = (
    <Select
      showSearch
      allowClear={true}
      style={{ width: 150 }}
      placeholder="选择相应的年份"
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      value={store.selected_year}
      onChange={(value) => {
        store.update_selected_year(value);
        store.get_chart_data(props.pathname, '', value);
      }
      }
      options={[
        {
          value: '2013年',
          label: '2013年',
        },
        {
          value: '2014年',
          label: '2014年',
        },
        {
          value: '2015年',
          label: '2015年',
        },
        {
          value: '2016年',
          label: '2016年',
        },
        {
          value: '2017年',
          label: '2017年',
        },
        {
          value: '2018年',
          label: '2018年',
        },
        {
          value: '2019年',
          label: '2019年',
        },
        {
          value: '2020年',
          label: '2020年',
        },
        {
          value: '2021年',
          label: '2021年',
        },
        {
          value: '2022年',
          label: '2022年',
        },
      ]}
    />
  )

  const location_select = (
    <Select
      showSearch
      allowClear={true}
      style={{ width: 150 }}
      placeholder="搜索相应的省份或城市"
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      value={store.selected_province}
      onChange={(value) => {
        store.update_selected_province(value);
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
  )

  const chanlv_select = (
    <Select
      showSearch
      allowClear={true}
      style={{ width: 150 }}
      placeholder="选择相应的产率"
      optionFilterProp="label"
      value={store.selected_chanlv}
      onChange={(value) => {
        store.update_selected_chanlv(value);
        store.get_chart_data(props.pathname, store.selected_province, '', value);
      }
      }
      options={[
        {
          value: 4,
          label: '4tDS/km·a',
        },
        {
          value: 7,
          label: '7tDS/km·a',
        },
        {
          value: 10,
          label: '10tDS/km·a',
        },
        {
          value: 12,
          label: '12tDS/km·a',
        }
      ]}
    />
  )


  const wswn_chartDetails_chanliang_time = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        <Column key={'wswn_chartDetails_chanliang_time'} tooltip={{
          name: '产量',
          channel: 'y',
        }} title={"污水污泥-产量 (tDS)"} data={store.mud_quantity_wswn} width={800} xField={'year'} yField={'chanliang'} />

      </Col>
    </Row>
  )

  const wswn_chartDetails_chanliang_location = (
    <Row>
      <Col span={4}>
        {time_select}
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        {props.pathname != '/mudquantity/gqwn/chanshengqingkuang' && <Column key={'wswn_chartDetails_chanliang_location'} tooltip={{
          name: '产量',
          channel: 'y',

        }} title={"污水污泥-产量 (tDS)"} data={store.mud_quantity_wswn} width={800} xField={'province'} yField={'chanliang'} />}
      </Col>
    </Row>
  )

  const wswn_chartDetails_chanliang_ztqk = (
    <Row>
      <Col span={4}>
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        <Column key={'wswn_chartDetails_chanliang_ztqk'} tooltip={{
          name: '产量',
          channel: 'y',
        }} title={"污水污泥-产量 (tDS)"} data={store.wswn_changliang_ztqk} width={800} xField={'year'} yField={'chanliang'} />
      </Col>
    </Row>
  )

  const gqwn_chartDetails_chanliang_time = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={1}></Col>
      <Col span={4}>
        {chanlv_select}
      </Col>
      <Col span={10}></Col>
      <Col span={12}>
        {props.pathname == '/mudquantity/gqwn/chanshengqingkuang' && <Column tooltip={{
          name: '产量',
          channel: 'y',

        }} title={"管渠污泥-产量 (tDS)"} data={store.mud_quantity_gqwn} width={800} xField={'year'} yField={'chanliang'} />}
      </Col>
    </Row>
  )

  const gqwn_chartDetails_chanliang_location = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={1}></Col>
      <Col span={4}>
        {chanlv_select}
      </Col>
      <Col span={10}></Col>
      <Col span={12}>
        {props.pathname == '/mudquantity/gqwn/chanshengqingkuang' && <Column tooltip={{
          name: '产量',
          channel: 'y',

        }} title={"管渠污泥-产量 (tDS)"} data={store.mud_quantity_gqwn} width={700} xField={'province'} yField={'chanliang'} />}
      </Col>
    </Row>
  )


  const wswn_chartDetails_chanlv_time = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        <Column key={'wswn_chartDetails_chanlv_time'} tooltip={{
          name: '产率',
          channel: 'y',

        }} title={"污水污泥-产率 (tDS/万m³)"} data={store.mud_quantity_wswn} width={800} xField={'year'} yField={'chanlv'} />
      </Col>
    </Row>
  )

  const wswn_chartDetails_chanlv_location = (
    <Row>
      <Col span={4}>
        {time_select}
      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        <Column key={'wswn_chartDetails_chanlv_location'} tooltip={{
          name: '产率',
          channel: 'y',

        }} title={"污水污泥-产率 (tDS/万m³)"} data={store.mud_quantity_wswn} width={800} xField={'province'} yField={'chanlv'} />
      </Col>
    </Row>
  )

  const wswn_chartDetails_chanlv_ztqk = (
    <Row>
      <Col span={4}>

      </Col>
      <Col span={20}></Col>
      <Col span={12}>
        <Column key={'wswn_chartDetails_chanlv_ztqk'} tooltip={{
          name: '产率',
          channel: 'y',

        }} title={"污水污泥-产率 (tDS/万m³)"} data={store.wswn_chanlv_ztqk} width={800} xField={'year'} yField={'chanlv'} />
      </Col>
    </Row>
  )
  const dataArray = ['2017年', '2018年', '2019年', '2020年', '2021年'];
  const chartDetails_czqk_time = (
    <>
      <Row>
        <Col span={4}>
          {location_select}
        </Col>
        <Col span={20}></Col>
        {dataArray.map((item, index) => (
          <Col key={index} span={24}>
            <Pie width={1000} title={item + '年污水污泥处置量 (tDS)'} {...store.get_pigconfig_wswn_czqk_data(item, store.selected_province)} />
            <Divider></Divider>
          </Col>
        ))}
      </Row>
    </>


  )

  const chartDetails_czqk_location = (
    <Row>
      <Col span={4}>
        <Select
          showSearch
          allowClear={true}
          style={{ width: 150 }}
          placeholder="选择相应的年份"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          onChange={(value) => {
            store.update_selected_year(value);
            store.get_chart_data(props.pathname, '', value);
          }
          }
          options={[
            {
              value: '2017年',
              label: '2017年',
            },
            {
              value: '2018年',
              label: '2018年',
            },
            {
              value: '2019年',
              label: '2019年',
            },
            {
              value: '2020年',
              label: '2020年',
            },
            {
              value: '2021年',
              label: '2021年',
            }
          ]}
        />
      </Col>
      <Col span={20}></Col>
      <Col span={20}>
        <Column key={"chartDetails_czqk_location"} height={600} title={'污水污泥处置量 (tDS)'}
          xField="province"
          yField="value"
          stack={true}
          colorField="type"
          autoFit={true}
          state= {{
            inactive: { opacity: 1 },
            active: { fill: 'red', linkFillOpacity: 0.5 }
          }}
          label={{
            text: "value",
            textBaseline: "top",
            position: "outside",
          }}
          data={store.DualAxesconfig_wswn_czqk_data} />
      </Col>
    </Row>

  )

  const chartDetails_czqk_ztqk = (
    <Row>
      <Col span={4}>
      </Col>
      <Col span={20}></Col>
      <Col span={20}>
        <Column key={"chartDetails_czqk_ztqk"} height={600} title={'污水污泥处置量 (tDS)'}
          xField="year"
          forceFit={false}
          yField="value"
          stack={false}
          colorField="type"
          label={{
            text: "value",
            textBaseline: "bottom",
            position: "inside",
          }}
          interaction={{
            elementHighlightByColor: {
              link: true,
            }
          }}
          state={{
            active: {
              linkFill: "rgba(0,0,0,0.25)",
              stroke: "black",
              lineWidth: 0.5,
            },
            inactive: { opacity: 0.5 }
          }}
          data={store.DualAxesconfig_wswn_czqk_ztqk_data} />
      </Col>
    </Row>
  )


  const wswn_csqktableDetails = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>

      <Col span={20}></Col>
      {props.pathname.indexOf("/mudquantity/wswn/chanshengqingkuang") != -1 && <Table
        rowKey="id"
        columns={mud_quantity_wswn_columns}
        dataSource={store.mud_quantity_wswn}
        scroll={{ x: 1000, y: 600 }}
        sticky={{ offsetHeader: 64 }}
      />}
    </Row>

  )

  const wswn_czqktableDetails = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={20}></Col>
      {props.pathname.indexOf("/mudquantity/wswn/chuzhiqingkuang") != -1 && <Table
        rowKey="id"
        columns={mud_quantity_wswn_czqk_columns}
        dataSource={store.mud_quantity_wswn_czqk}
        scroll={{ x: 1000, y: 600 }}
        sticky={{ offsetHeader: 64 }}
      />}
    </Row>

  )


  const gqwn_csqktableDetails = (
    <Row>
      <Col span={4}>
        {location_select}
      </Col>
      <Col span={1}></Col>
      <Col span={4}>
        {chanlv_select}
      </Col>
      <Col span={10}></Col>
      <Table
        rowKey="id"
        columns={mud_quantity_gqwn_columns}
        dataSource={store.mud_quantity_gqwn}
        scroll={{ x: 1000, y: 600 }}
        sticky={{ offsetHeader: 64 }}
      />
    </Row>

  )

  const imageDetails = (
    <>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        {props.pathname == '/mudquantity/wswn/chanshengqingkuang' && (
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


        {props.pathname == '/mudquantity/gqwn/chanshengqingkuang' && (
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
        {props.pathname == '/mudquantity/wswn/chanshengqingkuang' &&
          <ProCard bordered
            headerBordered title="长江经济带-各城市产生情况"
            tabs={{
              type: 'card',
            }}

          >
            <ProCard.TabPane key="tab1" tab="时空分布图">
              {imageDetails}
            </ProCard.TabPane>

            <ProCard.TabPane key="tab2" tab="图表概览-产量">
              <Segmented options={['总体情况', '时间分布', '空间分布']} value={value} onChange={(newvalue: string) => {
                setValue(newvalue);
                if (newvalue == '时间分布') store.get_chart_data(props.pathname, '上海市', '');
                if (newvalue == '空间分布') store.get_chart_data(props.pathname, '', '2013年');
              }} />
              <Divider></Divider>
              {value == '时间分布' ? wswn_chartDetails_chanliang_time : (value == '空间分布' ? wswn_chartDetails_chanliang_location : wswn_chartDetails_chanliang_ztqk)}
            </ProCard.TabPane>

            <ProCard.TabPane key="tab3" tab="图表概览-产率">
              <Segmented options={['总体情况', '时间分布', '空间分布']} value={value} onChange={(newvalue: string) => {
                setValue(newvalue);
                if (newvalue == '时间分布') store.get_chart_data(props.pathname, '上海市', '');
                if (newvalue == '空间分布') store.get_chart_data(props.pathname, '', '2013年');
              }} />
              <Divider></Divider>
              {value == '时间分布' ? wswn_chartDetails_chanlv_time : (value == '空间分布' ? wswn_chartDetails_chanlv_location : wswn_chartDetails_chanlv_ztqk)}
            </ProCard.TabPane>

            <ProCard.TabPane key="tab4" tab="详细数据">
              {wswn_csqktableDetails}
            </ProCard.TabPane>
          </ProCard>
        }

        {props.pathname == '/mudquantity/wswn/chuzhiqingkuang' &&
          <ProCard
            bordered
            headerBordered
            title="长江经济带-各城市处置情况"
            tabs={{
              type: 'card',
            }}>
            <ProCard.TabPane key="tab1" tab="图表概览">
              <Segmented options={['总体情况', '时间分布', '空间分布']} value={value} onChange={(newvalue: string) => {
                setValue(newvalue);
                if (newvalue == '时间分布') store.get_chart_data(props.pathname, '上海市', '');
                if (newvalue == '空间分布') store.get_chart_data(props.pathname, '', '2017年');
              }} />
              <Divider></Divider>
              {value == '时间分布' ? chartDetails_czqk_time : (value == '空间分布' ? chartDetails_czqk_location : chartDetails_czqk_ztqk)}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="详细数据">
              {wswn_czqktableDetails}
            </ProCard.TabPane>
          </ProCard>}

        {props.pathname == '/mudquantity/gqwn/chanshengqingkuang' &&
          <ProCard
            title="长江经济带-各城市管渠污泥产生情况"
            bordered
            headerBordered
            tabs={{
              type: 'card',
            }}>
            <ProCard.TabPane key="tab1" tab="时空分布图">
              {imageDetails}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab2" tab="图表概览">
              <Segmented options={['时间分布', '空间分布']} value={value} onChange={() => {
                setValue(value == '时间分布' ? '空间分布' : '时间分布');
                if (value == '时间分布') store.get_chart_data(props.pathname, '', '2013年');
                if (value == '空间分布') store.get_chart_data(props.pathname, '上海市', '');
              }} />
              <Divider></Divider>
              {value == '时间分布' ? gqwn_chartDetails_chanliang_time : gqwn_chartDetails_chanliang_location}
            </ProCard.TabPane>
            <ProCard.TabPane key="tab3" tab="详细数据">
              {gqwn_csqktableDetails}
            </ProCard.TabPane>
          </ProCard>}
      </>



    </>
  );
});
export default BaseChart;