function Cards(props){
    console.log(props.src);
    return <>
        <div className="flex flex-col justify-center align-center items-center">
            <div className=" w-2/3"><img src={props.src} className='' alt="" /></div>
            <p className="w-2/3 text-sm">
                {props.name}
            </p>
            <div><p>
               {props.newPrice}
            </p> </div>
        </div>
    
    </>

}

export default Cards;