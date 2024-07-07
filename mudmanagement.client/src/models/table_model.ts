import { TableColumnsType } from "antd";

const base_quality_entity_model: TableColumnsType = [
  {
    title: "日期",
    width: 50,
    dataIndex: "date",
    key: "date",
    fixed: "left",
  },
  {
    title: "地点",
    width: 50,
    dataIndex: "location",
    key: "location",
    fixed: "left",
  },
  {
    title: "经度",
    width: 30,
    dataIndex: "longitude",
    key: "longitude",
  },
  {
    title: "纬度",
    width: 30,
    dataIndex: "latitude",
    key: "latitude",
  },
  {
    title: "类型",
    width: 30,
    dataIndex: "type",
    key: "type",
  },
  {
    title: "污泥类别",
    width: 30,
    dataIndex: "category",
    key: "category",

  },
  {
    title: "城市",
    width: 30,
    dataIndex: "city",
    key: "city",
  },
];
/*
   ph: string;
  hanshuilv: string;
  youjizhi: string;
  hanshaliang: string;
*/
export const mud_quality_jcsx_columns: TableColumnsType<mud_quality_jcsx> = [
  ...base_quality_entity_model,
  {
    title: "PH",
    width: 50,
    dataIndex: "ph",
    key: "ph",
  },
  {
    title: "含水率",
    width: 50,
    dataIndex: "hanshuilv",
    key: "hanshuilv",
  },
  {
    title: "有机质",
    width: 50,
    dataIndex: "ph",
    key: "ph",
  },
  {
    title: "含砂量",
    width: 50,
    dataIndex: "hanshaliang",
    key: "hanshaliang",
  },
];

/*
  zn: string;
  cu: string;
  As: string;
  Pb: string;
  cd: string;
  cr: string;
  ni: string;
  hg: string;
*/
export const mud_quality_zjs_columns: TableColumnsType<mud_quality_zjs> = [
  ...base_quality_entity_model,
  {
    title: "Zn",
    width: 50,
    dataIndex: "zn",
    key: "zn",
  },
  {
    title: "Cu",
    width: 50,
    dataIndex: "cu",
    key: "cu",
  },
  {
    title: "As",
    width: 50,
    dataIndex: "as",
    key: "as",
  },
  {
    title: "Pb",
    width: 50,
    dataIndex: "pb",
    key: "pb",
  },
  {
    title: "Cd",
    width: 50,
    dataIndex: "cd",
    key: "cd",
  },
  {
    title: "Cr",
    width: 50,
    dataIndex: "cr",
    key: "cr",
  },
  {
    title: "Ni",
    width: 50,
    dataIndex: "ni",
    key: "ni",
  },
  {
    title: "Hg",
    width: 50,
    dataIndex: "hg",
    key: "hg",
  },
];

/*
  zl: string;
  nai: string;
  exi: string;
  e: string;
  wu: string;
  fei: string;
  en: string;
  yingen: string;
  bi: string;
  benbingen: string;
  benbingbyingen: string;
  benbingkyingen: string;
  benbingbi: string;
  yinbingbi: string;
  erbenbingen: string;
  qu: string;
  benbingbei: string;
*/

export const mud_quality_dhft_columns: TableColumnsType<mud_quality_dhft> = [
  ...base_quality_entity_model,
  {
    title: "多环芳烃总量",
    width: 50,
    dataIndex: "zl",
    key: "zl",
  },
  {
    title: "萘",
    width: 50,
    dataIndex: "nai",
    key: "nai",
  },
  {
    title: "苊烯",
    width: 50,
    dataIndex: "exi",
    key: "exi",
  },
  {
    title: "苊",
    width: 50,
    dataIndex: "e",
    key: "e",
  },
  {
    title: "芴",
    width: 50,
    dataIndex: "wu",
    key: "wu",
  },
  {
    title: "菲",
    width: 50,
    dataIndex: "fei",
    key: "fei",
  },
  {
    title: "蒽",
    width: 50,
    dataIndex: "en",
    key: "en",
  },
  {
    title: "荧蒽",
    width: 50,
    dataIndex: "yingen",
    key: "yingen",
  },
  {
    title: "芘",
    width: 50,
    dataIndex: "bi",
    key: "bi",
  },
  {
    title: "苯并(a)蒽",
    width: 50,
    dataIndex: "benbingen",
    key: "benbingen",
  },
  {
    title: "苯并(b)荧蒽",
    width: 50,
    dataIndex: "benbingbyingen",
    key: "benbingbyingen",
  },
  {
    title: "苯并(k)荧蒽",
    width: 50,
    dataIndex: "benbingkyingen",
    key: "benbingkyingen",
  },
  {
    title: "苯并(a)芘",
    width: 50,
    dataIndex: "benbingbi",
    key: "benbingbi",
  },
  {
    title: "茚并(1,2,3-cd)芘",
    width: 50,
    dataIndex: "yinbingbi",
    key: "yinbingbi",
  },
  {
    title: "二苯并(a,h)蒽",
    width: 50,
    dataIndex: "erbenbingen",
    key: "erbenbingen",
  },
  {
    title: "䓛",
    width: 50,
    dataIndex: "qu",
    key: "qu",
  },
  {
    title: "苯并(g,h,i)苝",
    width: 50,
    dataIndex: "benbingbei",
    key: "benbingbei",
  },
];

/*
hajec: string;
  hamd: string;
  hacd: string;
  hajmd: string;
  hms: string;
  klms: string;
  lhms: string;
  aqms: string;
  shs: string;
  tms: string;
  hbsx: string;
  yfsx: string;
  nfsx: string;
*/

export const mud_quality_kss_columns: TableColumnsType<mud_quality_kss> = [
  ...base_quality_entity_model,
  {
    title: "磺胺甲恶唑",
    width: 50,
    dataIndex: "hajec",
    key: "hajec",
  },
  {
    title: "磺胺嘧啶",
    width: 50,
    dataIndex: "hamd",
    key: "hamd",
  },
  {
    title: "磺胺吡啶",
    width: 50,
    dataIndex: "hacd",
    key: "hacd",
  },
  {
    title: "磺胺甲嘧啶",
    width: 50,
    dataIndex: "hajmd",
    key: "hajmd",
  },
  {
    title: "红霉素",
    width: 50,
    dataIndex: "hms",
    key: "hms",
  },
  {
    title: "克拉霉素",
    width: 50,
    dataIndex: "klms",
    key: "klms",
  },
  {
    title: "罗红霉素",
    width: 50,
    dataIndex: "lhms",
    key: "lhms",
  },
  {
    title: "阿奇霉素",
    width: 50,
    dataIndex: "aqms",
    key: "aqms",
  },
  {
    title: "四环素",
    width: 50,
    dataIndex: "shs",
    key: "shs",
  },
  {
    title: "土霉素",
    width: 50,
    dataIndex: "tms",
    key: "tms",
  },
  {
    title: "环丙沙星",
    width: 50,
    dataIndex: "hbsx",
    key: "hbsx",
  },
  {
    title: "氧氟沙星",
    width: 50,
    dataIndex: "yfsx",
    key: "yfsx",
  },
  {
    title: "诺氟沙星",
    width: 50,
    dataIndex: "nfsx",
    key: "nfsx",
  },
];

/*
 sljw: string;
  lys: string;
  slys: string;
*/
export const mud_quality_xdfcw_columns: TableColumnsType<mud_quality_xdfcw> = [
  ...base_quality_entity_model,
  {
    title: "三卤甲烷",
    width: 50,
    dataIndex: "sljw",
    key: "sljw",
  },
  {
    title: "卤乙酸",
    width: 50,
    dataIndex: "lys",
    key: "lys",
  },
  {
    title: "三氯乙醛",
    width: 50,
    dataIndex: "slys",
    key: "slys",
  },
];

/*
    zyf: string;
  zd: string;
  zl: string;
  zj: string;
  */
export const mud_quality_zysx_columns: TableColumnsType<mud_quality_zysx> = [
  ...base_quality_entity_model,
  {
    title: "总养分",
    width: 50,
    dataIndex: "zyf",
    key: "zyf",
  },
  {
    title: "总氮",
    width: 50,
    dataIndex: "zd",
    key: "zd",
  },
  {
    title: "总磷",
    width: 50,
    dataIndex: "zl",
    key: "zl",
  },
  {
    title: "总钾",
    width: 50,
    dataIndex: "zj",
    key: "zj",
  },
];
