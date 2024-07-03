import { observable, makeAutoObservable, action, runInAction } from "mobx";

export class baseStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable seleted_province: string = "上海市";
  @observable mud_quantity_wswn: mud_quantity_wswn[] = [];
  @observable mud_quantity_gqwn: mud_quantity_gqwn[] = [];
  @observable mud_quality_jcsx: mud_quality_jcsx[] = [];
  @observable mud_quality_zjs: mud_quality_zjs[] = [];
  @observable mud_quality_dhft: mud_quality_dhft[] = [];
  @observable mud_quality_kss: mud_quality_kss[] = [];
  @observable mud_quality_xdfcw: mud_quality_xdfcw[] = [];
  @observable mud_quality_zysx: mud_quality_zysx[] = [];

  @action
  update_seleted_province(seleted_province: string) {
    runInAction(() => {
      this.seleted_province = seleted_province;
    });
  }

  @action
  async get_table_data(pathname: string, city: string, category: string) {
    if (pathname == "/mudquality/jcsx") {
      await this.get_mud_quality_jcsx(city, category);
    }

    if (pathname == "/mudquality/hjsx/zhjs") {
      await this.get_mud_quality_zjs(city, category);
    }

    if (pathname == "/mudquality/hjsx/kss") {
      await this.get_mud_quality_dhft(city, category);
    }

    if (pathname == "/mudquality/hjsx/dhaj") {
      await this.get_mud_quality_kss(city, category);
    }

    if (pathname == "/mudquality/hjsx/xdfcw") {
      await this.get_mud_quality_xdfcw(city, category);
    }

    if (pathname == "/mudquality/zysx") {
      await this.get_mud_quality_zysx(city, category);
    }
  }

  @action
  async get_mud_quality_jcsx(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_jcsx?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_jcsx = data;
    });
  }

  @action
  async get_mud_quality_zjs(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_zjs?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_zjs = data;
    });
  }

  @action
  async get_mud_quality_dhft(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_dhft?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_dhft = data;
    });
  }

  @action
  async get_mud_quality_kss(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_kss?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_kss = data;
    });
  }

  @action
  async get_mud_quality_xdfcw(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_xdfcw?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_xdfcw = data;
    });
  }

  @action
  async get_mud_quality_zysx(city: string, category: string) {
    const response = await fetch(
      `MudQuality/get_mud_quality_zysx?city=${city}&category=${category}`
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quality_zysx = data;
    });
  }

  @action
  async get_chart_data(province: string, pathname: string) {
    if (pathname == "/mudquantity/gqwn/chanliang") {
      await this.get_mud_quantity_gqwn(province);
    } else {
      await this.get_mud_quantity_wswn(province);
    }
  }

  @action
  async get_mud_quantity_wswn(province: string) {
    const response = await fetch(
      "MudQuantity/get_mud_quantity_wswn?province=" + province
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quantity_wswn = data;
    });
  }

  @action
  async get_mud_quantity_gqwn(province: string) {
    const response = await fetch(
      "MudQuantity/get_mud_quantity_gqwn?province=" + province
    );
    const data = await response.json();
    runInAction(() => {
      this.mud_quantity_gqwn = data;
    });
  }
}
const store = new baseStore();
export default store;
