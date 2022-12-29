import React from "react";
import { useGetAllProductsQuery, useGetProductsByIdQuery } from "../store/apis/productsApis";

const Shop = () => {
    const { data:allProducts, error:productsError, isLoading:isLoadingProducts, isError:isProductsError } = useGetAllProductsQuery()
    const { data: product, error:productError, isLoading:isLoadingProduct, isError:isProductError } = useGetProductsByIdQuery('1');
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
                    </div>
                ))
            }
            </div>
            <p><b>single product</b></p>
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