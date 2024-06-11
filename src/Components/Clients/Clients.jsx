import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './Clients.scss'
import {Card} from '../Card/Card'

export const Clients = () =>{
    const [product,setProduct] = useState([])
    const [error,setError] = useState(null)
     
    useEffect(() => {
        const fetchProducts = async () =>{
            try{
                const response = await 
                axios.get('https://jsonplaceholder.typicode.com/users')
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
                <Card key={product.name} product={product}/>
                
            ))}
        </div>
        </>
    )
}
export default Clients;