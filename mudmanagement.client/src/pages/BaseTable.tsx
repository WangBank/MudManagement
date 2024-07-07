import React, { useEffect } from 'react';
import { Col, Row, Select, Table } from 'antd';
import store from '../store/basestore';
import { observer } from 'mobx-react-lite';
import { mud_quality_jcsx_columns, mud_quality_zjs_columns, mud_quality_dhft_columns, mud_quality_kss_columns, mud_quality_xdfcw_columns, mud_quality_zysx_columns } from '../models/table_model';


const BaseTable: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    const { seleted_city, seleted_category } = store;
    store.get_table_data(props.pathname, seleted_city, seleted_category);
  }, []);
  return (
    <>
      <Row>
        <Col span={4}>
          <Select
            showSearch
            allowClear={true}
            style={{ width: 150 }}
            placeholder="请选择城市"
            optionFilterProp="label"
            defaultValue=''
            value={store.seleted_city}
            onChange={(value) => {
              store.update_seleted_city(value);
              store.get_table_data(props.pathname, value, store.seleted_category);
            }
            }
            options={[
              {
                value: '六安市',
                label: '六安市',
              },
              {
                value: '九江市',
                label: '九江市',
              },
              {
                value: '镇江市',
                label: '镇江市',
              },
              {
                value: '芜湖市',
                label: '芜湖市',
              }
            ]}
          /></Col>
        <Col span={4}>
          <Select
            showSearch
            allowClear={true}
            style={{ width: 150 }}
            placeholder="请选择类型"
            optionFilterProp="label"
            value={store.seleted_category}
            onChange={(value) => {
              store.update_seleted_category(value);
              store.get_table_data(props.pathname, store.seleted_city, value);
            }
            }
            options={[
              {
                value: '污水污泥',
                label: '污水污泥',
              },
              {
                value: '管渠污泥',
                label: '管渠污泥',
              },
              {
                value: '河湖底泥',
                label: '河湖底泥',
              },
              {
                value: '工程泥浆',
                label: '工程泥浆',
              }
            ]}
          /></Col>
        <Col span={4}> </Col>
      </Row>
      <Row>
        <Col>
          {props.pathname == "/mudquality/jcsx" && <Table
            rowKey="id"
            columns={mud_quality_jcsx_columns}
            dataSource={store.mud_quality_jcsx}
            scroll={{ x: 1500, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}

          {props.pathname == "/mudquality/hjsx/zjs" && <Table
            rowKey="id"
            columns={mud_quality_zjs_columns}
            dataSource={store.mud_quality_zjs}
            scroll={{ x: 2500, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}

          {props.pathname == "/mudquality/hjsx/kss" && <Table
            rowKey="id"
            columns={mud_quality_kss_columns}
            dataSource={store.mud_quality_kss}
            scroll={{ x: 2700, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}

          {props.pathname == "/mudquality/hjsx/dhft" && <Table
            rowKey="id"
            columns={mud_quality_dhft_columns}
            dataSource={store.mud_quality_dhft}
            scroll={{ x: 3500, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}

          {props.pathname == "/mudquality/hjsx/xdfcw" && <Table
            rowKey="id"
            columns={mud_quality_xdfcw_columns}
            dataSource={store.mud_quality_xdfcw}
            scroll={{ x: 1500, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}

          {props.pathname == "/mudquality/zysx" && <Table
            rowKey="id"
            columns={mud_quality_zysx_columns}
            dataSource={store.mud_quality_zysx}
            scroll={{ x: 1500, y: 700 }}
            sticky={{ offsetHeader: 64 }}
          />}



        </Col>
      </Row>
    </>

  );
});

export default BaseTable;