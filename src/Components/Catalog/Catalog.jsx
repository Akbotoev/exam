import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './Catalog.scss'
import {Card} from '../Card/Card'
export const Catalog = () =>{
    const [product,setProduct] = useState([])
    const [error,setError] = useState(null)
     
    useEffect(() => {
        const fetchProducts = async () =>{
            try{
                const response = await 
                axios.get('https://jsonplaceholder.typicode.com/photos')
                console.log(response.data)
        setProduct(response.data.slice(0, 10)); 
            }catch(error){
                setError(error);
            }
        }
        fetchProducts(); 
    },[])
    if(error){
       return <div>Error:{error.message}</div>
    }
    return(
        <>
        <div className="container">
            {product.map(product => (
                <Card key={product.id} product={product}/>
            ))}
        </div>
        </>
    )
}
export default Catalog;