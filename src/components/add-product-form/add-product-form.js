import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { postProductAction } from '../../actions/product-management/addProductActions';
import './add-product-form.css';

const AddProductForm = () => {
    const [imageToSave, setImageToSave] = useState( {selectedImage: null}  );
    const [imageToDisplay, setImageToDisplay] = useState( {image: "https://i.imgur.com/mkv5uIQ.png"} )
    const [productInfo, setProductInfo] = useState( { name: "", price: 0, digital: false, description:"" }  );
    const dispatch = useDispatch();

    const onChangeInput = (event) => {
        let newValue = {...productInfo}
        newValue[event.target.name] = event.target.value
        setProductInfo(newValue)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData()

        formData.set('name', productInfo.name)
        formData.set('price', productInfo.price)
        formData.append('image', imageToSave.selectedImage)
        formData.set('digital', productInfo.digital)
        formData.set('description', productInfo.description)
        
        dispatch(postProductAction(formData));
    }

    const parseFile = (e) => {
        setImageToSave( {selectedImage: e.target.files[0] })
        setImageToDisplay( {image: URL.createObjectURL(e.target.files[0]) } )
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="offset-md-3 AddProductTitle">
                    <h1 >Add Product</h1>
                </div>
                <Form onSubmit={handleSubmit} className="col-12 col-md-6 offset-md-3">
                    <Form.Group controlId="formProductName">
                        <Form.Control type="text" placeholder="Product name" name="name" className="FormField" onChange={onChangeInput}/>
                    </Form.Group>
                    <Form.Group controlId="formProductPrice">
                        <Form.Control type="number" placeholder="Value" name="price" className="FormField" onChange={onChangeInput} />
                    </Form.Group>
                    <Form.Group controlId="formProductDescription">
                        <Form.Control as="textarea" rows="4" placeholder="Write your description here" name="description" className="FormField" onChange={onChangeInput} />
                    </Form.Group>
                    <Form.Group controlId="formCheckbox">
                        <Form.Check type="checkbox" label="This product is digital" name="digital" className="FormField IsDigital" onChange={onChangeInput} />
                    </Form.Group>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img className="DisplayImageSpace col-12" src={imageToDisplay.image} alt="Product"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Form.Group controlId="formUploadImage">
                                <Form.Label className="UploadImage primary col-12">
                                    Upload Image
                                </Form.Label>
                                <Form.Control type="file" name="productImage" className="OverwriteButton" onChange={(e) => parseFile(e)} />
                            </Form.Group>
                        </div>
                        <div className="col-12 col-md-4 offset-md-4">
                            <Button variant="secondary" type="submit" className="AddProduct"> Create Product </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddProductForm;
