import React, { useState, useEffect, useRef} from 'react';
import AddProductForm from '../../components/add-product-form/add-product-form'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import { checkPrivilegesAction } from '../../actions/product-management/addProductActions';
import './add-product.css';

const AddProduct = () => {
    const [image, setImage] = useState( {image: "https://i.imgur.com/mkv5uIQ.png"} );

    const awaiting_response = useSelector((state) => state.addProductState.awaiting_response);
    const privileges = useSelector((state) => state.addProductState.privileges);
    const dispatch = useDispatch();
    let mainView = null;


    useEffect(() => {
        dispatch(checkPrivilegesAction());
    },[dispatch]);

    
    (awaiting_response) 
    ? mainView = (
        <div className="col-1 offset-6">
            <Spinner className="Spinner" animation="border" variant="warning"/>
        </div>
        )
    : ( (privileges === "Admin")
        ? mainView = (
            <AddProductForm/>
        )
        : mainView = (
            <h1 className="text-center"> <br/> You do not have enough privileges to execute this action!</h1>
        ) 
    );

    return (
        <div>
            {mainView}
        </div>
    )

}

export default AddProduct;