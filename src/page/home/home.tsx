import React, { useEffect, useState } from 'react';
import service from '../../service/indexservice';
import { Input, Label, Table, Form } from 'reactstrap';
import './home.css'

function home() {

    interface ProductTypeInterface {
        id: Number
        , name: String
        , number: String
        , typeId: String
    }

    const [producType, setProducType] = useState('');
    const [productTypeValue, setProductTypeValue] = useState('');
    const [product, setProduct] = useState<ProductTypeInterface[]>([]);

    useEffect(() => {
        setProducType('1000')
        setProductTypeValue('1');
        const selectProduct = service.ProductMain.filter((oilcom) => { return oilcom.typeId == '1' })
        setProduct(selectProduct);
    }, []);

    const eventCardType = (e: any) => {
        setProductTypeValue(e.target.value);
        const selectProduct = service.ProductMain.filter((oilcom) => { return oilcom.typeId == e.target.value })
        if (e.target.value === "1") {
            setProducType('1000');
        } else {
            setProducType('2000');
        }
        setProduct(selectProduct);
    }

    const selectProductType = (e: any) => {
        setProducType(e.target.value);
    };

    const handleSubmit = () => {

    }

    return (
        <>
            <h2 className='header'>
                Select Dropdown
            </h2>
            <div className='card-bg-white'>
                <h4 className='header'>Add Product</h4>
                <div className='card-bg-grey'>
                    <div className="select-input">
                        <Label for="selecttype">Product Type</Label>
                        <Input id="selectProductType" name="ProductType" type="select" onChange={eventCardType}>
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
                        <Label for="selectProductType">Product</Label>
                        <Input className='button-border' name="Product" type="select" value={producType} onChange={selectProductType}>
                            {product.length !== 0 &&
                                product.map((item, index) => {
                                    return (
                                        <option key={index} value={item.number}>
                                            {item?.name}
                                        </option>
                                    );
                                })}
                        </Input>
                    </div>
                </div>
            </div>

            <div className='card-bg-white'>
                <div className='header'>
                    <h4>Seach</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='card-bg-grey serch-header'>
                        <div className='search'>
                            <Label for="selectName">Product Type</Label>
                            <Input className='button-border' name="selectName" type="text" defaultValue={productTypeValue || ""}></Input>
                        </div>
                        <div className='search'>
                            <Label for="selectSername">Product</Label>
                            <Input className='button-border' name="selectSername" type="text" defaultValue={producType || ""}></Input>
                        </div>
                        <div className='search button-width'>
                            <Input className='button-border primary' type="button" value={"SEACRH"}></Input>
                        </div>
                    </div>
                </Form>
            </div>
            {/* <div className='card-bg-white'>
                <h4 className='header'>Search Result</h4>
                <div className='card-bg-grey'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div> */}
        </>
    )
}

export default home