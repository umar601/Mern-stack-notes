import "./firstcomponent.css"

export default function FirstComponent({title="umar",age=10,op,lis,price}){  //can write props and then use latter as props.argumet


    // console.log(props.title)

   let style = { backgroundColor:price>1000?"red":"green"};


    

    return<>
    
    <h1 className="FirstComponent">hello from {title}{age}{op}</h1>
    {/* <h1>{lis?.a}</h1> */}
    <h1 style={style}>{price>1000?"discount 5%":price}</h1>
    

    
    {/* <h1>2*2={2*2}</h1> */}
    </>
}

// export default FirstComponent;



//named 

// export {FirstComponent}