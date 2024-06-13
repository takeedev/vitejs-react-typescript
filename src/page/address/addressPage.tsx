import React, { useState } from 'react'
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

  interface subdistrictFilter {
    SUB_DISTRICT_ID: number;
    SUB_DISTRICT_CODE: string;
    SUB_DISTRICT_NAME: string;
    DISTRICT_ID: number;
    PROVINCE_ID: number;
    GEO_ID: number;
  }

  const [districeArr, setDistricArr] = useState<districtFilter[]>([]);
  const [subdistriceArr, setSubdistricArr] = useState<subdistrictFilter[]>([]);
  const [zipCodeValue, setZipCodeValue] = useState('');
  const [provinceValue, setProvinceValue] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [subdistrictValue, setSubdistrictValue] = useState();

  const selectProvice = (e: any) => {
    setProvinceValue(e.target.value)
    const selectDistrict = service.District.filter((districParam) => { return districParam.PROVINCE_ID == e.target.value })
    setDistricArr(selectDistrict);
  }

  const selectDistrict = (e: any) => {
    setDistrictValue(e.target.value);
    const selectSubdistrict = service.Subdistrict.filter((subdistriceParam) => { return subdistriceParam.DISTRICT_ID == e.target.value && subdistriceParam.PROVINCE_ID == provinceValue });
    setSubdistricArr(selectSubdistrict);
  }

  const selectSubdistrict = (e: any) => {
    setSubdistrictValue(e.target.value);
    const selectZipcode = service.Zipcode.filter((zipcodeParam) => { return zipcodeParam.SUB_DISTRICT_ID == e.target.value && zipcodeParam.DISTRICT_ID == districtValue && zipcodeParam.PROVINCE_ID == provinceValue });
    selectZipcode.map((arr) => { setZipCodeValue(arr.ZIPCODE) })
  }

  return (
    <>
      <h2 className='header'>Select Address</h2>
      <div className='card-bg-white'>
        <h4 className='header'>Address</h4>
        <div className='card-bg-grey'>
          <div className="select-input">
            <Label for="selectProvince">Province</Label>
            <Input name="selectProvice" type="select" onChange={selectProvice}>
              <option value="">please select provice</option>
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
              {districeArr.length !== 0 &&
                districeArr.map(item => {
                  return (
                    <option key={item.DISTRICT_ID} value={item.DISTRICT_ID}>
                      {item.DISTRICT_NAME}
                    </option>
                  );
                })}
            </Input>
          </div>
          <div className="select-input">
            <Label for="selectSubDistrice">Subdistrict</Label>
            <Input name="selectSubDistrice" type="select" onChange={selectSubdistrict}>
              <option value="">please select subdistrict</option>
              {subdistriceArr.length !== 0 &&
                subdistriceArr.map(item => {
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
      <div>
        <p>
          provice : {provinceValue}
        </p>
        <p>
          district : {districtValue}
        </p>
        <p>
          subdistrice : {subdistrictValue}
        </p>
      </div>
    </>
  )
}

export default addressPage