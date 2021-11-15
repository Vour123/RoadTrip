const CarCardDetails = ({image, name, price}) => {
    return (
        <div className='car-card'>
            <img src={image} alt={image}/>
            <div className='car-card-details'>
                <span className='car-title'>{name}</span>
                <span className='price'>{price}/day</span>
            </div>
        </div>
    )
} 

export default CarCardDetails;


