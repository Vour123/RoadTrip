const CarCardDetails = ({image, name, price}) => {
    return (
        <div className='car-card'>
            <img src={image} alt={image}/>
            <span className='car-title'>{name}</span>
            <span>{price}</span>
        </div>
    )
} 

export default CarCardDetails;


