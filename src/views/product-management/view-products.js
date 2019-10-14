import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from  'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import { getProductsAction, changePageAction } from '../../actions/product-management/getProductActions';
import CardProductManagement from "../../components/product-managment/product-managment-card";
import SearchBar from "../../components/layout/search-bar/search-bar";
import './view-products.css';


const ViewProducts = () => {
    const loading = useSelector((state) => state.viewProductsState.loading);
    const products = useSelector((state) => state.viewProductsState.products);
    const total_count = useSelector((state) => state.viewProductsState.total_products);
    const opened_page = useSelector((state) => state.viewProductsState.opened_page);
    const deleted_product = useSelector((state) => state.viewProductsState.deleted_product);
    const dispatch = useDispatch();
    const page_size = 12; // Nice to have: Change page size according to screen size; not a priority for now.

    useEffect(() => {
        dispatch(getProductsAction(opened_page, page_size));
    },[opened_page, deleted_product, dispatch]);

    let productsToManage = products.map(product => {
        return (
          <CardProductManagement
            key={product._id}
            id = {product._id}
            name={product.name}
            price={product.price}
            url={product.img}
          />
        );
    });

    let pages = [];
    for (
        let page = 0;
        page < total_count / page_size;
        page++
    ) {
        pages.push(
        <div
            key={page}
            className="SinglePage"
            onClick={() => {
                  dispatch(changePageAction(page));
            }}>
            {page + 1}
        </div>
        );
    }

    let mainView = null;
    (loading) ? mainView = (
        <div className="col-1 offset-6">
            <Spinner className="Spinner" animation="border" variant="warning"/>
        </div>
        )
        : mainView = (
            <section className="container-fluid">
                <div className="row col-10 offset-1">
                    <div className="col-12 col-md-6 ProductsHeader">
                        <div className="row">
                            <div className="ProductsTitle">Products</div>
                            <Link to={"/admin/products/add"} className="LinkToAdd"> <div className="AddProductIcon"> + </div> </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 SearchBarHeader">
                        <SearchBar filters={["Bears", "are", "sorta", "cool"]} search_redirect_base="/admin/products"/>
                    </div>
                </div>
                <div className="row col-10 offset-1">
                    <div className="row justify-content-center" >
                        {productsToManage}
                    </div>
                </div>
                <div className="row">
                    <section className="PagesDisplay">{pages}</section>
                </div>
            </section>
        )

        return (
            <div>
                {mainView}
            </div>
        )

}

export default ViewProducts;

/* Add this once switch actually filters
    import Switch from "../../components/2WordSwitch/Switch";

    //This needs to be changed in the future, using for now because demo for component shows it this way so it's quicker.
    const [demoState, setDemoState] = useState({ isOn: false });
    const flipSwitch = e => {
        setDemoState({ isOn: !demoState.isOn });
    };

    <div className="row">
         <Switch
            leftWord="Physical"
            rightWord="Digital"
            onClick={flipSwitch}
            isOn={demoState.isOn}
        />
    </div>  
*/