import './Card.scss'
export const Card = ({product}) =>{
    return(
        <>
        <div className='card'>
            <div className='card__image'>
               <img  src={product.thumbnailUrl} alt={product.title}></img>
            </div>
            <div className='card__title'>{product.title}</div>
        </div>
        </>
    )
}