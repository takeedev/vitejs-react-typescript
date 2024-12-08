import React, {useEffect, useState} from 'react'
import { Input, Label } from 'reactstrap';
import service from '../../service/indexservice'
import './addressPage.css'

function addressPage() {

  interface districtFilter {
    DISTRICT_ID: number;
    DISTRICT_CODE: string;
    DISTRICT_NAME: string;
    GEO_ID: number;
    PROVINCE_ID: number;
  }

  interface subDistrictFilter {
    SUB_DISTRICT_ID: number;
    SUB_DISTRICT_CODE: string;
    SUB_DISTRICT_NAME: string;
    DISTRICT_ID: number;
    PROVINCE_ID: number;
    GEO_ID: number;
  }

  const [districtArr, setDistrictArr] = useState<districtFilter[]>([]);
  const [subDistrictArr, setSubDistrictArr] = useState<subDistrictFilter[]>([]);
  const [zipCodeValue, setZipCodeValue] = useState('');
  const [provinceValue, setProvinceValue] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [subDistrictValue, setSubDistrictValue] = useState();

  const selectProvince = (e: any) => {
    setProvinceValue(e.target.value)
    const selectDistrict = service.District.filter((districtParam) => { return districtParam.PROVINCE_ID == e.target.value })
    setDistrictArr(selectDistrict);
  }

  const selectDistrict = (e: any) => {
    setDistrictValue(e.target.value);
    const selectSubDistrict = service.Subdistrict.filter((subDistrictParam) => { return subDistrictParam.DISTRICT_ID == e.target.value && subDistrictParam.PROVINCE_ID == provinceValue });
    setSubDistrictArr(selectSubDistrict);
  }

  const selectSubDistrict = (e: any) => {
    setSubDistrictValue(e.target.value);
    const selectZipcode = service.Zipcode.filter((zipcodeParam) => { return zipcodeParam.SUB_DISTRICT_ID == e.target.value && zipcodeParam.DISTRICT_ID == districtValue && zipcodeParam.PROVINCE_ID == provinceValue });
    selectZipcode.map((arr) => { setZipCodeValue(arr.ZIPCODE) })
  }

  useEffect(() => {
    console.log(provinceValue
        ,districtValue
        ,subDistrictValue)
  },[provinceValue
    ,districtValue
    ,subDistrictValue])

  return (
    <>
      <h2 className='header'>Select Address</h2>
      <div className='card-bg-white'>
        <h4 className='header'>Address</h4>
        <div className='card-bg-grey'>
          <div className="select-input">
            <Label for="selectProvince">Province</Label>
            <Input name="selectProvice" type="select" onChange={selectProvince}>
              <option value="">please select province</option>
              {service.Province.length !== 0 &&
                service.Province.map(item => {
                  return (
                    <option key={item.PROVINCE_ID} value={item.PROVINCE_ID}>
                      {item.PROVINCE_NAME}
                    </option>
                  );
                })}
            </Input>
          </div>
          <div className="select-input">
            <Label for="selectDistrice">District</Label>
            <Input name="selectDistrice" type="select" onChange={selectDistrict}>
              <option value="">please select district</option>
              {districtArr.length !== 0 &&
                  districtArr.map(item => {
                  return (
                    <option key={item.DISTRICT_ID} value={item.DISTRICT_ID}>
                      {item.DISTRICT_NAME}
                    </option>
                  );
                })}
            </Input>
          </div>
          <div className="select-input">
            <Label for="selectSubDistrice">SubDistrict</Label>
            <Input name="selectSubDistrice" type="select" onChange={selectSubDistrict}>
              <option value="">please select subdistrict</option>
              {subDistrictArr.length !== 0 &&
                  subDistrictArr.map(item => {
                  return (
                    <option key={item.SUB_DISTRICT_ID} value={item.SUB_DISTRICT_ID}>
                      {item.SUB_DISTRICT_NAME}
                    </option>
                  );
                })}
            </Input>
          </div>
          <div className="select-input">
            <Label for="selectZipcode">Zipcode</Label>
            {
              zipCodeValue === null || zipCodeValue === ''
                ?
                <Input name="selectZipcode" type="text" placeholder='please input zipcode'></Input>
                :
                <Input name="selectZipcode" type="text" defaultValue={zipCodeValue} disabled></Input>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default addressPage