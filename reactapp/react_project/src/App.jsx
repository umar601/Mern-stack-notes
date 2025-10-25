import './App.css'
import FirstComponent from './assets/firstcomponent'

// function FirstComponent(){

//   return<>
//   <h1>hello FirstComponent</h1>
//   </>
// }

function App() {


  let arr = ["good","best"];

  let list = arr.map((item)=>{
    <li>key={item}</li>
  })


  // console.log(list)

  // let obj ={
  //   a:"umar",
  //   b:"abbas"
  // }


  // console.log(obj.a)
 

  return <>

    {/* <FirstComponent/>
    <FirstComponent></FirstComponent> */}


    <FirstComponent title="umar" age={10} price={200}/>
    <FirstComponent op={list}  price={2000}/>
    <FirstComponent lis={{a:"umar"}}  price={200}/>

    {/* <h1>hello</h1> */}

  </>
}

export default App
