import { useEffect, useState } from 'react'
import { Input, Label, Table } from 'reactstrap';
import service from '../../service/indexservice'

function dropdownPage() {

  const [productType, setProductType] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    setProductType(service.ProducType[0].id);
    setProduct(service.Product[0].id);
  }, [])

  const eventProductType = (e: any) => {
    setProductType(e.target.value)
  }

  const selectProduct = (e: any) => {
    setProduct(e.target.value);
  };

  return (
    <>
      <h2 className='header'>
        Single Dropdown
      </h2>
      <div className='card-bg-white'>
        <h4 className='header'>Select Place</h4>
        <div className='card-bg-grey'>
          <div className="select-input">
            <Label for="selecttype">ProducType</Label>
            <Input id="selectcomtype" name="ProducType" type="select" onChange={eventProductType}>
              {service.ProducType.length !== 0 &&
                service.ProducType.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </Input>
          </div>
          <div className="select-input">
            <Label for="selectcomtype">Product</Label>
            <Input className='button-border' name="oliComType" type="select" onChange={selectProduct}>
              {service.Product.length !== 0 &&
                service.Product.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </Input>
          </div>
        </div>
      </div>
      <div>
        Product Type: {productType}
      </div>
      <div>
        Product : {product}
      </div>
    </>
  )
}

export default dropdownPage