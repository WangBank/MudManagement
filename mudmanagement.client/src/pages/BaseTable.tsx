import React, { useEffect } from 'react';
import {  Divider, Select, Table } from 'antd';
import store from '../store/basestore';
import { observer } from 'mobx-react-lite';
import { mud_quality_jcsx_columns, mud_quality_zjs_columns, mud_quality_dhft_columns, mud_quality_kss_columns, mud_quality_xdfcw_columns, mud_quality_zysx_columns } from '../models/table_model';
// import { ProCard } from '@ant-design/pro-components';
// import { Box } from '@ant-design/charts';


const BaseTable: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    const { seleted_city, seleted_category } = store;
    store.get_table_data(props.pathname, seleted_city, seleted_category);
  }, []);

  const tableDetails = (<>
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
    />

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
    />
    <Divider />

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
  </>);

  // const AllCitys_yjz = () => {
  //   let data = [
  //     { category: '污水污泥', y: [] },
  //     { category: '管渠污泥', y: [] },
  //     { category: '河湖底泥', y: [] },
  //     { category: '工程泥浆', y: [] },
  //   ];

  //   store.mud_quality_jcsx.forEach((item) => {
  //     if (item.category == "污水污泥") {
  //       data[0].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "管渠污泥") {
  //       data[1].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "河湖底泥") {
  //       data[2].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "工程泥浆") {
  //       data[3].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //   });

  //   const config = {
  //     data: {
  //       value: data,
  //     },
  //     xField: 'category',
  //     yField: 'y',
  //     colorField: 'category',
  //     style: {
  //       stroke: 'black',
  //     },
  //     boxType: 'box',
  //     tooltip: {
  //       items: [
  //         { name: '最低值', channel: 'y' },
  //         { name: '下四分位数', channel: 'y1' },
  //         { name: '最低值', channel: 'y2' },
  //         { name: '上四分位数', channel: 'y3' },
  //         { name: '最高值', channel: 'y4' },
  //       ],
  //     },
  //   };
  //   return <Box {...config} />;
  // };

  // const AllCitys_wswn = () => {
  //   let data = [
  //     { category: '六安', y: [] },
  //     { category: '九江', y: [] },
  //     { category: '镇江', y: [] },
  //     { category: '芜湖', y: [] },
  //   ];

  //   store.mud_quality_jcsx.forEach((item) => {
  //     if (item.category == "污水污泥" && item.city == "六安") {
  //       data[0].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "污水污泥" && item.city == "九江") {
  //       data[1].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "污水污泥" && item.city == "镇江") {
  //       data[2].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //     if (item.category == "污水污泥" && item.city == "芜湖") {
  //       data[3].y.push(Number.parseFloat(item.youjizhi));
  //     }
  //   });

  //   const config = {
  //     data: {
  //       value: data,
  //     },
  //     xField: 'category',
  //     yField: 'y',
  //     colorField: 'category',
  //     style: {
  //       stroke: 'black',
  //     },
  //     boxType: 'box',
  //     tooltip: {
  //       items: [
  //         { name: '最低值', channel: 'y' },
  //         { name: '下四分位数', channel: 'y1' },
  //         { name: '最低值', channel: 'y2' },
  //         { name: '上四分位数', channel: 'y3' },
  //         { name: '最高值', channel: 'y4' },
  //       ],
  //     },
  //   };
  //   return <Box {...config} />;
  // };

  return (
    <>
      <div>

        {/* <ProCard
          bordered
        
          onChange ={(key) => {
            console.log(key);
            store.get_table_data(props.pathname, '', '');
          }}
          // headerBordered title="长江经济带-各城市干污泥产生量"
          tabs={{
            type: 'card',
          }}
        >
          <ProCard.TabPane key="tab1" tab="图表概览">
            {store.mud_quality_jcsx && <AllCitys_yjz />}
            <AllCitys_wswn></AllCitys_wswn> 
          {/* </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="详细数据"> */}
            {tableDetails}
          {/* </ProCard.TabPane>
        </ProCard> */}



      </div>
    </>

  );
});


export default BaseTable;