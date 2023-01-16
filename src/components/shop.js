import React, { useState } from "react";
import { useGetAllProductsQuery, useGetProductsByIdQuery } from "../store/apis/productsApis";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/shoppingCartSlice";
const ids = ['1','2','3']

const Shop = () => {
    const [ selectedId, setId ] = useState('1');
    const { data:allProducts, error:productsError, isLoading:isLoadingProducts, isError:isProductsError } = useGetAllProductsQuery()
    const { data: product, error:productError, isLoading:isLoadingProduct, isError:isProductError } = useGetProductsByIdQuery(selectedId);
    const dispatch = useDispatch();
    return (
        <div>
            shop
            <p><b>all products</b></p>
            <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            {
                isLoadingProducts ? <p>loading all products...</p> :
                isProductsError ? JSON.stringify(productsError) :
                allProducts?.map(product => (
                    <div key={product.id} style={{border:'1px gray solid'}}>
                        <img src={product.image} alt={product.image} height={50}/>
                        <p>{product.price}</p>
                        <button onClick={()=> dispatch(addToCart(product))}>add</button>
                    </div>
                ))
            }
            </div>
            <p><b>single product</b></p>
            <select onChange={(e)=> setId(e.target.value)}>
                <option defaultValue=''>select item id</option>
                {ids.map((item)=> (
                    <option value={item} key={ids.indexOf(item)}>
                        {item}
                    </option>
                ))}
            </select>
            {
                isLoadingProduct ? <p>loading single product...</p> :
                isProductError ? JSON.stringify(productError) :
                <div style={{border:'1px gray solid', width:'fit-content'}}>
                    <img src={product.image} alt={product.image} height={50}/>
                </div>
            }
        </div>
    )
}
export default Shop;