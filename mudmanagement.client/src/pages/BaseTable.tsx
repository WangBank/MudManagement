import React, { useEffect } from 'react';
import { Col, Divider, Row, Select, Table } from 'antd';
import store from '../store/basestore';
import { observer } from 'mobx-react-lite';
import { mud_quality_jcsx_columns, mud_quality_zjs_columns, mud_quality_dhft_columns, mud_quality_kss_columns, mud_quality_xdfcw_columns, mud_quality_zysx_columns } from '../models/table_model';
import { Box } from '@ant-design/charts';
import { ProCard } from '@ant-design/pro-components';
// import { ProCard } from '@ant-design/pro-components';
// import { Box } from '@ant-design/charts';


const BaseTable: React.FC<AppProps> = observer((props) => {

  useEffect(() => {
    let selected_category = '';
    if (props.pathname.indexOf('/mudquality/wswn') != -1) {
      selected_category = '污水污泥';
    }
    if (props.pathname.indexOf('/mudquality/gqwn') != -1) {
      selected_category = '管渠污泥';
    }
    if (props.pathname.indexOf('/mudquality/hhdn') != -1) {
      selected_category = '河湖底泥';
    }
    if (props.pathname.indexOf('/mudquality/gcnj') != -1) {
      selected_category = '工程泥浆';
    }
    store.get_table_data(props.pathname, '', selected_category);

  }, []);
  
  const tableDetails = (<>
    <Select
      showSearch
      allowClear={true}
      style={{ width: 150 }}
      placeholder="请选择城市"
      optionFilterProp="label"
      defaultValue=''
      value={store.selected_city}
      onChange={(value) => {
        store.update_selected_city(value);
        let selected_category = '';
        if (props.pathname.indexOf('/mudquality/wswn') != -1) {
          selected_category = '污水污泥';
        }
        if (props.pathname.indexOf('/mudquality/gqwn') != -1) {
          selected_category = '管渠污泥';
        }
        if (props.pathname.indexOf('/mudquality/hhdn') != -1) {
          selected_category = '河湖底泥';
        }
        if (props.pathname.indexOf('/mudquality/gcnj') != -1) {
          selected_category = '工程泥浆';
        }
        store.get_table_data(props.pathname, value, selected_category, store.selected_localtion);
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
    {
      props.pathname.indexOf('/mudquality/wswn') != -1 &&
      <>
        <Divider type='vertical' />
        <Select
          showSearch
          allowClear={true}
          style={{ width: 150 }}
          placeholder="请选择地点"
          optionFilterProp="label"
          value={store.selected_localtion}
          onChange={(value) => {
            store.update_selected_localtion(value);
            store.get_table_data(props.pathname, store.selected_city, '污水污泥', value);
          }
          }
          options={[
            {
              value: '污水厂',
              label: '污水厂',
            },
            {
              value: '污泥厂',
              label: '污泥厂',
            },
          ]}
        />
      </>
    }
    <Divider />

    {props.pathname.indexOf("/jcsx") != -1 && <Table
      rowKey="id"
      columns={mud_quality_jcsx_columns}
      dataSource={store.mud_quality_jcsx}
      scroll={{ x: 1500, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}

    {props.pathname.indexOf("/hjsx/zjs") != -1 && <Table
      rowKey="id"
      columns={mud_quality_zjs_columns}
      dataSource={store.mud_quality_zjs}
      scroll={{ x: 2500, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}

    {props.pathname.indexOf("/hjsx/kss") != -1 && <Table
      rowKey="id"
      columns={mud_quality_kss_columns}
      dataSource={store.mud_quality_kss}
      scroll={{ x: 2700, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}

    {props.pathname.indexOf("/hjsx/dhft") != -1 && <Table
      rowKey="id"
      columns={mud_quality_dhft_columns}
      dataSource={store.mud_quality_dhft}
      scroll={{ x: 3500, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}

    {props.pathname.indexOf("/hjsx/xdfcw") != -1 && <Table
      rowKey="id"
      columns={mud_quality_xdfcw_columns}
      dataSource={store.mud_quality_xdfcw}
      scroll={{ x: 1500, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}

    {props.pathname.indexOf("/zysx") != -1 && <Table
      rowKey="id"
      columns={mud_quality_zysx_columns}
      dataSource={store.mud_quality_zysx}
      scroll={{ x: 1500, y: 600 }}
      sticky={{ offsetHeader: 64 }}
    />}
  </>);

  const AllCitys_wswn_yjz = (
    <Box {...store.boxconfig_wswn_yjz} title={"污水污泥-有机质"} height={380} />
  )

  const AllCitys_gqwn_yjz = (
    <Box {...store.boxconfig_gqwn_yjz} title={"管渠污泥-有机质"} height={380} />
  )

  const AllCitys_hhdn_yjz = (
    <Box {...store.boxconfig_hhdn_yjz} title={"河湖底泥-有机质"} height={380} />
  )

  const AllCitys_gcnj_yjz = (
    <Box {...store.boxconfig_gcnj_yjz} title={"工程泥浆-有机质"} height={380} />
  )

  const AllCitys_wswn_ph = (
    <Box {...store.boxconfig_wswn_ph} title={"污水污泥-PH"} height={380} />
  )

  const AllCitys_gqwn_ph = (
    <Box {...store.boxconfig_gqwn_ph} title={"管渠污泥-PH"} height={380} />
  )

  const AllCitys_hhdn_ph = (
    <Box {...store.boxconfig_hhdn_ph} title={"河湖底泥-PH"} height={380} />
  )

  const AllCitys_gcnj_ph = (
    <Box {...store.boxconfig_gcnj_ph} title={"工程泥浆-PH"} height={380} />
  )

  const AllCitys_wswn_hanshuilv = (
    <Box {...store.boxconfig_wswn_hanshuilv} title={"污水污泥-含水率"} height={380} />
  )

  const AllCitys_gqwn_hanshuilv = (
    <Box {...store.boxconfig_gqwn_hanshuilv} title={"管渠污泥-含水率"} height={380} />
  )

  const AllCitys_hhdn_hanshuilv = (
    <Box {...store.boxconfig_hhdn_hanshuilv} title={"河湖底泥-含水率"} height={380} />
  )

  const AllCitys_gcnj_hanshuilv = (
    <Box {...store.boxconfig_gcnj_hanshuilv} title={"工程泥浆-含水率"} height={380} />
  )

  const AllCitys_wswn_hanshaliang = (
    <Box {...store.boxconfig_wswn_hanshaliang} title={"污水污泥-含沙量"} height={380} />
  )

  const AllCitys_gqwn_hanshaliang = (
    <Box {...store.boxconfig_gqwn_hanshaliang} title={"管渠污泥-含沙量"} height={380} />
  )

  const AllCitys_hhdn_hanshaliang = (
    <Box {...store.boxconfig_hhdn_hanshaliang} title={"河湖底泥-含沙量"} height={380} />
  )

  const AllCitys_gcnj_hanshaliang = (
    <Box {...store.boxconfig_gcnj_hanshaliang} title={"工程泥浆-含沙量"} height={380} />
  )


  return (
    <>
      <div>

        <ProCard
          bordered

          onChange={() => {
            let selected_category = '';
            if (props.pathname.indexOf('/mudquality/wswn') != -1) {
              selected_category = '污水污泥';
            }
            if (props.pathname.indexOf('/mudquality/gqwn') != -1) {
              selected_category = '管渠污泥';
            }
            if (props.pathname.indexOf('/mudquality/hhdn') != -1) {
              selected_category = '河湖底泥';
            }
            if (props.pathname.indexOf('/mudquality/gcnj') != -1) {
              selected_category = '工程泥浆';
            }
            store.get_table_data(props.pathname, '', selected_category);
          }}
          // headerBordered title="长江经济带-各城市干污泥产生量"
          tabs={{
            type: 'card',
          }}
        >
          <ProCard.TabPane key="tab1" tab="图表概览">
            {props.pathname.indexOf('/mudquality/wswn') != -1 && <>
              <Row>
                <Col span={11}>
                  {AllCitys_wswn_ph}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_wswn_hanshuilv}
                </Col>

              </Row>

              <Row>
                <Col span={11}>
                  {AllCitys_wswn_yjz}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_wswn_hanshaliang}
                </Col>

              </Row>
            </>
            }

            {props.pathname.indexOf('/mudquality/gqwn') != -1 && <>
              <Row>
                <Col span={11}>
                  {AllCitys_gqwn_ph}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_gqwn_hanshuilv}
                </Col>

              </Row>

              <Row>
                <Col span={11}>
                  {AllCitys_gqwn_yjz}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_gqwn_hanshaliang}
                </Col>

              </Row>
            </>
            }

            {props.pathname.indexOf('/mudquality/hhdn') != -1 && <>
              <Row>
                <Col span={11}>
                  {AllCitys_hhdn_ph}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_hhdn_hanshuilv}
                </Col>

              </Row>

              <Row>
                <Col span={11}>
                  {AllCitys_hhdn_yjz}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_hhdn_hanshaliang}
                </Col>

              </Row>
            </>
            }

            {props.pathname.indexOf('/mudquality/gcnj') != -1 && <>
              <Row>
                <Col span={11}>
                  {AllCitys_gcnj_ph}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_gcnj_hanshuilv}
                </Col>

              </Row>

              <Row>
                <Col span={11}>
                  {AllCitys_gcnj_yjz}
                </Col>
                <Col span={2}>
                  <Divider type='vertical'></Divider>
                </Col>

                <Col span={11}>
                  {AllCitys_gcnj_hanshaliang}
                </Col>

              </Row>
            </>
            }

          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="详细数据">
            {tableDetails}
          </ProCard.TabPane>
        </ProCard>



      </div>
    </>

  );
});


export default BaseTable;