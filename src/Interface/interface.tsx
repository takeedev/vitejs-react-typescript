export default interface CardTypeInterface {
    id: Number
    , name: String
    , typeNum: String
}

export default interface OliComTypeInterface {
    id: Number
    , name: String
    , oilNum: String
    , typeId: String
}

export default interface districtFilter {
    DISTRICT_ID: number;
    DISTRICT_CODE: string;
    DISTRICT_NAME: string;
    GEO_ID: number;
    PROVINCE_ID: number;
  }
  
export default interface subDistrictFilter {
    SUB_DISTRICT_ID: number;
    SUB_DISTRICT_CODE: string;
    SUB_DISTRICT_NAME: string;
    DISTRICT_ID: number;
    PROVINCE_ID: number;
    GEO_ID: number;
  }