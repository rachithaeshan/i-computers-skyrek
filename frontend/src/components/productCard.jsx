export default function ProductCard(props) {
    
     console.log(props.name)

    return (
    <div className = "bg-[#3cab3c] w-[319px] text-white">
        <h1 className="text-[#87CEEB] text-[40px]">{props.name}</h1>
        <img src= {props.image} alt = {"Picture of a" + props.name} ></img>
        <p>LKR:{props.price}</p>
        <button>Buy Now</button>
    </div>
    )





}