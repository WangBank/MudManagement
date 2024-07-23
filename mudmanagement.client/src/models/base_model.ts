interface base_quantity_entity_model {
  id: string;
  province: string;
  year: string;
}

interface mud_quantity_wswn extends base_quantity_entity_model {
  wushuiliang: number;
  chanlv: number;
  chanliang: number;
}

interface mud_quantity_gqwn extends base_quantity_entity_model {
  guandaochangdu: number;
  chanliang: number;
  chanlv: number;
}

interface mud_quantity_wswn_czqk extends base_quantity_entity_model {
  zj: number;
  tdly: number;
  jcly: number;
  fs: number;
  tm: number;
  qt: number;
}

interface base_quality_entity_model {
  id: string;
  category: string;
  city: string;
  date: string;
  location: string;
  longitude: string;
  latitude: string;
  type: string;
}

interface mud_quality_jcsx extends base_quality_entity_model {
  ph: string;
  hanshuilv: string;
  youjizhi: string;
  hanshaliang: string;
}

interface mud_quality_zjs extends base_quality_entity_model {
  zn: string;
  cu: string;
  As: string;
  Pb: string;
  cd: string;
  cr: string;
  ni: string;
  hg: string;
}

interface mud_quality_dhft extends base_quality_entity_model {
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
}

interface mud_quality_kss extends base_quality_entity_model {
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
}

interface mud_quality_xdfcw extends base_quality_entity_model {
  sljw: string;
  lys: string;
  slys: string;
}

interface mud_quality_zysx extends base_quality_entity_model {
  zyf: string;
  zd: string;
  zl: string;
  zj: string;
}

type AppProps = {
  pathname: string;
};
