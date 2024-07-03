import React, { useState } from 'react';
import { Col, Row, Select, Switch, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import store from '../store/basestore';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const BaseTable: React.FC<AppProps> = (props) => {
  const [fixedTop, setFixedTop] = useState(false);

  return (
    <>
      <Row>
        <Col span={4}>
          <Select
            showSearch
            allowClear={true}
            style={{ width: 200 }}
            placeholder="搜索相应的省份或城市"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            value={store.seleted_province}
            onChange={(value) => {
              store.update_seleted_province(value);
              store.get_chart_data(value, props.pathname);
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
          /></Col>
        <Col span={4}> </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500 }}
            sticky={{ offsetHeader: 64 }}
          /></Col>
      </Row>
    </>

  );
};

export default BaseTable;