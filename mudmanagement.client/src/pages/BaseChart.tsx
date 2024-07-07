import React, { useEffect } from 'react';
import { Column } from '@ant-design/charts';
import { Col, Row, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import store from '../store/basestore';

const BaseChart: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    const { seleted_province } = store;
    store.get_chart_data(props.pathname, seleted_province || '上海市');
  }, []);
  return (
    <>
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
          {props.pathname != '/mudquantity/gqwn/chanliang' && <Column title={props.pathname == '/mudquantity/wswn/chanliang' ? "污水污泥-产量" : "污水污泥-产率"} data={store.mud_quantity_wswn} height={500} xField={'year'} yField={props.pathname == '/mudquantity/wswn/chanliang' ? 'chanliang' : 'chanlv'} />}
          {props.pathname == '/mudquantity/gqwn/chanliang' && <Column title={"管渠污泥-产量"} data={store.mud_quantity_gqwn} height={500} xField={'year'} yField={'chanliang'} />}
        </Col>
      </Row>


    </>
  );
});
export default BaseChart;