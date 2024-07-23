import {
  observable,
  makeAutoObservable,
  action,
  runInAction,
  computed,
} from "mobx";

export class baseStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable selected_province: string = "上海市";
  @observable selected_year: string = "2013年";
  @action
  update_selected_year(selected_year: string) {
    runInAction(() => {
      this.selected_year = selected_year;
    });
  }
  @observable selected_chanlv: number|null;
  @action
  update_selected_chanlv(selected_chanlv: number) {
    runInAction(() => {
      this.selected_chanlv = selected_chanlv;
    });
  }
  @observable selected_city: string = "六安市";
  @observable selected_localtion: string = "";
  @observable mud_quantity_wswn: mud_quantity_wswn[] = [];
  @observable mud_quantity_gqwn: mud_quantity_gqwn[] = [];
  @observable mud_quantity_wswn_czqk: mud_quantity_wswn_czqk[] = [];
  @observable mud_quality_jcsx: mud_quality_jcsx[] = [];
  @observable mud_quality_zjs: mud_quality_zjs[] = [];
  @observable mud_quality_dhft: mud_quality_dhft[] = [];
  @observable mud_quality_kss: mud_quality_kss[] = [];
  @observable mud_quality_xdfcw: mud_quality_xdfcw[] = [];
  @observable mud_quality_zysx: mud_quality_zysx[] = [];

  @observable max_quantity_wswn: mud_quantity_wswn[] = [];
  @observable max_quantity_gqwn: mud_quantity_gqwn[] = [];
  @observable max_quality_jcsx: mud_quality_jcsx[] = [];
  @observable max_quality_zjs: mud_quality_zjs[] = [];
  @observable max_quality_dhft: mud_quality_dhft[] = [];
  @observable max_quality_kss: mud_quality_kss[] = [];
  @observable max_quality_xdfcw: mud_quality_xdfcw[] = [];
  @observable max_quality_zysx: mud_quality_zysx[] = [];

  @action
  get_pigconfig_wswn_czqk_data(year: string, province: string) {
    const data = this.mud_quantity_wswn_czqk.filter(
      (f) => f.year == year && f.province == province
    );
    const config = {
      data: [
        { type: "土地利用", value: data[0]?.tdly },
        { type: "建材利用", value: data[0]?.jcly },
        { type: "焚烧", value: data[0]?.fs },
        { type: "填埋", value: data[0]?.tm },
        { type: "其他", value: data[0]?.qt },
      ],
      angleField: "value",
      colorField: "type",
      label: {
        text: (d) => `${d.type}\n ${d.value}`,
        position: "outside",
        style: {
          fontWeight: "bold",
        },
      },
      legend: {
        color: {
          title: false,
          position: "right",
          rowPadding: 5,
        },
      },
    };
    return config;
  }

  @computed get DualAxesconfig_wswn_czqk_data() {
    return this.get_DualAxesconfig_wswn_czqk_data(this.selected_year);
  }

  @action
  get_DualAxesconfig_wswn_czqk_data(year: string) {
    let uvBillData = [];
    this.mud_quantity_wswn_czqk
      .filter((f) => f.year == year)
      .map((item) => {
        let tdly = {
          province: item.province,
          value: 0,
          type: "土地利用",
        };
        tdly.value = item.tdly;
        uvBillData.push(tdly);

        let jcly = {
          province: item.province,
          value: 0,
          type: "建材利用",
        };
        jcly.value = item.jcly;
        uvBillData.push(jcly);

        let fs = {
          province: item.province,
          value: 0,
          type: "焚烧",
        };
        fs.value = item.fs;
        uvBillData.push(fs);

        let tm = {
          province: item.province,
          value: 0,
          type: "填埋",
        };
        tm.value = item.tm;
        uvBillData.push(tm);

        let qt = {
          province: item.province,
          value: 0,
          type: "其他",
        };
        qt.value = item.qt;
        uvBillData.push(qt);
      });

    const maxValueObject = uvBillData.reduce(
      (max, current) => {
        return current.value > max.value ? current : max;
      },
      { value: -Infinity }
    );

    const config = {
      xField: "province",
      children: [
        {
          data: uvBillData,
          type: "interval",
          yField: "value",
          stack: true,
          colorField: "type",
          style: { maxWidth: 80 },
          scale: { y: { domainMax: maxValueObject.value * 1.5 } },
          interaction: { elementHighlightByColor: { background: true } },
        },
      ],
    };

    return config;
  }

  @computed get boxconfig_wswn_yjz() {
    return this.get_box_jcsx_data("污水污泥", "youjizhi");
  }

  @computed get boxconfig_wswn_ph() {
    return this.get_box_jcsx_data("污水污泥", "ph");
  }

  @computed get boxconfig_wswn_hanshuilv() {
    return this.get_box_jcsx_data("污水污泥", "hanshuilv");
  }

  @computed get boxconfig_wswn_hanshaliang() {
    return this.get_box_jcsx_data("污水污泥", "hanshaliang");
  }

  @computed get boxconfig_gqwn_yjz() {
    return this.get_box_jcsx_data("管渠污泥", "youjizhi");
  }

  @computed get boxconfig_gqwn_ph() {
    return this.get_box_jcsx_data("管渠污泥", "ph");
  }

  @computed get boxconfig_gqwn_hanshuilv() {
    return this.get_box_jcsx_data("管渠污泥", "hanshuilv");
  }

  @computed get boxconfig_gqwn_hanshaliang() {
    return this.get_box_jcsx_data("管渠污泥", "hanshaliang");
  }

  @computed get boxconfig_hhdn_yjz() {
    return this.get_box_jcsx_data("河湖底泥", "youjizhi");
  }

  @computed get boxconfig_hhdn_ph() {
    return this.get_box_jcsx_data("河湖底泥", "ph");
  }

  @computed get boxconfig_hhdn_hanshuilv() {
    return this.get_box_jcsx_data("河湖底泥", "hanshuilv");
  }

  @computed get boxconfig_hhdn_hanshaliang() {
    return this.get_box_jcsx_data("河湖底泥", "hanshaliang");
  }

  @computed get boxconfig_gcnj_yjz() {
    console.log(this.get_box_jcsx_data("工程泥浆", "youjizhi"));
    return this.get_box_jcsx_data("工程泥浆", "youjizhi");
  }

  @computed get boxconfig_gcnj_ph() {
    return this.get_box_jcsx_data("工程泥浆", "ph");
  }

  @computed get boxconfig_gcnj_hanshuilv() {
    return this.get_box_jcsx_data("工程泥浆", "hanshuilv");
  }

  @computed get boxconfig_gcnj_hanshaliang() {
    return this.get_box_jcsx_data("工程泥浆", "hanshaliang");
  }

  @action
  get_box_jcsx_data(type: string, column: string) {
    let data = this.max_quality_jcsx
      .filter(
        (f) => f.location?.indexOf("污泥厂") == -1 || f.category != "污水污泥"
      )
      .map((item) => {
        return {
          category: item.category,
          city: item.city,
          youjizhi: parseFloat(item.youjizhi),
          ph: parseFloat(item.ph),
          hanshuilv: parseFloat(item.hanshuilv),
          hanshaliang: parseFloat(item.hanshaliang),
        };
      })
      .sort((a, b) => {
        // 首先按city排序
        if (a.city < b.city) return -1;
        if (a.city > b.city) return 1;
        if (column == "ph") {
          return a.ph - b.ph;
        }
        if (column == "hanshuilv") {
          return a.hanshuilv - b.hanshuilv;
        }
        if (column == "hanshaliang") {
          return a.hanshaliang - b.hanshaliang;
        }
        if (column == "youjizhi") {
          return a.youjizhi - b.youjizhi;
        }
      });
    if (type != "") {
      data = data.filter(
        (f) =>
          (f.city == "六安市" ||
            f.city == "镇江市" ||
            f.city == "芜湖市" ||
            f.city == "九江市") &&
          f.category == type
      );
    }

    let yField = "youjizhi";
    if (column == "ph") {
      yField = "ph";
    }
    if (column == "hanshuilv") {
      yField = "hanshuilv";
    }
    if (column == "hanshaliang") {
      yField = "hanshaliang";
    }

    const config = {
      data: {
        value: data,
      },
      boxType: "boxplot",
      xField: type != "" ? "city" : "category",
      yField: yField,
      colorField: type != "" ? "city" : "category",
      style: {
        stroke: "black",
        point: false,
      },
    };

    return config;
  }

  @action
  update_selected_province(selected_province: string) {
    runInAction(() => {
      this.selected_province = selected_province;
    });
  }

  @action
  update_selected_city(selected_city: string) {
    runInAction(() => {
      this.selected_city = selected_city;
    });
  }

  @action
  update_selected_localtion(selected_localtion: string) {
    runInAction(() => {
      this.selected_localtion = selected_localtion;
    });
  }

  @action
  async get_table_data(
    pathname: string,
    city: string = "",
    category: string = "",
    location: string = ""
  ) {
    if (pathname.indexOf("/jcsx") != -1) {
      await this.get_mud_quality_jcsx(city, category, location);
    }

    if (pathname.indexOf("/hjsx/zjs") != -1) {
      await this.get_mud_quality_zjs(city, category, location);
    }

    if (pathname.indexOf("/hjsx/kss") != -1) {
      await this.get_mud_quality_kss(city, category, location);
    }

    if (pathname.indexOf("/hjsx/dhft") != -1) {
      await this.get_mud_quality_dhft(city, category, location);
    }

    if (pathname.indexOf("/hjsx/xdfcw") != -1) {
      await this.get_mud_quality_xdfcw(city, category, location);
    }

    if (pathname.indexOf("/zysx") != -1) {
      await this.get_mud_quality_zysx(city, category, location);
    }
  }

  @action
  async get_mud_quality_jcsx(city: string, category: string, location: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_jcsx?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();

    runInAction(() => {
      this.mud_quality_jcsx = data;
    });

    if (
      this.max_quality_jcsx.length == 0 ||
      this.max_quality_jcsx.length < data.length
    ) {
      const maxreponse = await fetch(`MudQuality/get_mud_quality_jcsx`);
      const maxdata = await maxreponse.json();
      runInAction(() => {
        this.max_quality_jcsx = maxdata;
      });
    }
  }

  @action
  async get_mud_quality_zjs(city: string, category: string, location: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_zjs?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_zjs = data;
      if (
        this.max_quality_zjs.length == 0 ||
        this.max_quality_zjs.length < data.length
      ) {
        this.max_quality_zjs = data;
      }
    });
  }

  @action
  async get_mud_quality_dhft(city: string, category: string, location: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_dhft?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_dhft = data;
      if (
        this.max_quality_dhft.length == 0 ||
        this.max_quality_dhft.length < data.length
      ) {
        this.max_quality_dhft = data;
      }
    });
  }

  @action
  async get_mud_quality_kss(city: string, category: string, location: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_kss?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_kss = data;
      if (
        this.max_quality_kss.length == 0 ||
        this.max_quality_kss.length < data.length
      ) {
        this.max_quality_kss = data;
      }
    });
  }

  @action
  async get_mud_quality_xdfcw(
    city: string,
    category: string,
    location: string
  ) {
    const response = await fetch(
      `MudQuality/get_mud_quality_xdfcw?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_xdfcw = data;
      if (
        this.max_quality_xdfcw.length == 0 ||
        this.max_quality_xdfcw.length < data.length
      ) {
        this.max_quality_xdfcw = data;
      }
    });
  }

  @action
  async get_mud_quality_zysx(city: string, category: string, location: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_zysx?city=${city}&category=${category}&location=${location}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_zysx = data;
      if (
        this.max_quality_zysx.length == 0 ||
        this.max_quality_zysx.length < data.length
      ) {
        this.max_quality_zysx = data;
      }
    });
  }

  @action
  async get_chart_data(
    pathname: string,
    province: string = "",
    year: string = "",
    chanlv: number|null = null
  ) {
    if (pathname == "/mudquantity/gqwn/chanshengqingkuang") {
      await this.get_mud_quantity_gqwn(province, year, chanlv);
    } else {
      if (pathname == "/mudquantity/wswn/chuzhiqingkuang") {
        await this.get_mud_quantity_wswn_czqk(province, year);
      } else {
        await this.get_mud_quantity_wswn(province, year);
      }
    }
  }

  @action
  async get_mud_quantity_wswn_czqk(province: string, year: string) {
    const response = await fetch(
      "MudQuantity/get_mud_quantity_wswn_czqk?province=" +
        province +
        "&year=" +
        year
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quantity_wswn_czqk = data;
    });
  }

  @action
  async get_mud_quantity_wswn(province: string, year: string) {
    const response = await fetch(
      "MudQuantity/get_mud_quantity_wswn?province=" + province + "&year=" + year
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quantity_wswn = data;
      if (
        this.max_quantity_wswn.length == 0 ||
        this.max_quantity_wswn.length < data.length
      ) {
        this.max_quantity_wswn = data;
      }
    });
  }

  @action
  async get_mud_quantity_gqwn(province: string, year: string, chanlv:number|null) {
    let url = "MudQuantity/get_mud_quantity_gqwn?province=" + province + "&year=" + year;
    if (chanlv) {
      url += "&chanlv=" + chanlv;
    }
    const response = await fetch(
      url
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quantity_gqwn = data;
      if (
        this.max_quantity_gqwn.length == 0 ||
        this.max_quantity_gqwn.length < data.length
      ) {
        this.max_quantity_gqwn = data;
      }
    });
  }
}
const store = new baseStore();
export default store;
