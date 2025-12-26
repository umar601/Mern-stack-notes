
//string mmethods

// let name="umar";
// console.log(name)
// console.log(name.trim());
// console.log(name.charAt(0));
// console.log(name.charCodeAt(0));   
// console.log(name.includes("u")); 
// console.log(name.indexOf("u"));
// console.log(name.split(""));
// console.log(name.length);
// console.log(name.slice(0,3));
// console.log(name.replace("u","z"));
// console.log(name.replaceAll("a","z"));
// console.log(name.repeat(3));
// console.log(name.concat("abbas"));
// console.log(name.valueOf());
// console.log(name.at(0));


// array methods


// let arr=[1,2,3,4,5,6];

// arr.forEach((el)=>{
//     console.log(el);
// })


// arr.map((el)=>{

//     console.log(el*2)

// })


// let res=arr.reduce((acc,res)=>{

//     return acc>res?acc:res

// },0)

// console.log(res)


// let even=arr.filter((el)=>{
//     return el%2==0
// })

// console.log(even);


// let even=arr.some((el)=>{
//     return el%2==0
// })

// console.log(even)


// let even=arr.every((el)=>{
//     return el%2==0
// })

// console.log(even)

// console.log(arr.length)

// arr.push();
// arr.pop()
// arr.shift()
// arr.unshift();

// console.log(arr.join(""))

// console.log(arr.flat())


// console.log(arr)
// let sum=arr.reduce((acc,res)=>{
    
//     return acc+res
// },0)

// console.log(sum);

// console.log(arr.includes(1));
// console.log(arr.indexOf(1));
// console.log(arr.slice(0));
// console.log(arr.splice(0,3,7));
// console.log(arr)

//objects


// let obj={

//     name:"umar",
//     age:16,
//     function(){
//         console.log("fun")
//     },
//     arr:[1,2,3,4],

//     umar:{

//         marks:10
//     },
//     1:"ali"
// }


// obj.arr1=[1,2,2,3,3,]

// console.log(obj.arr1)
// console.log(obj["1"])

// delete obj.umar.marks


// console.log(obj.umar.marks)

// console.log(obj["arr"])
// console.log(obj.arr)

// delete obj.function

// console.log(obj)


// let arr=[{name:"umar"},{name:"ali"}]

// console.log(arr[0].name)


// let obj={

//     name:"umar",
//     age:12,
//     marks:100,
//     subjects:["eng","urdu"],
//     ali:{
//     name:"umar",
//     age:12,
//     marks:100,
//     subjects:["eng","urdu"]

//     }
// }


// let {name,age,marks,subjects,ali} = obj

// console.log(name,age,marks,subjects,ali)

// let {ali} = obj

// console.log(ali)


// let arr=[1,2,3,4,5,6];

// let [first,second,...arg]=arr

// console.log(first,second,...arg)


// let num=10;

// // console.log(Math.abs(-10))

// // console.log(Math.floor(1.76))

// // console.log(Math.ceil(1.76))

// // console.log(Math.sqrt(1.76))


// console.log(Math.floor(Math.random()*-15)+10)


// console.log(Math.floor(Math.random()*-34)+17)



// let fun=()=>{
//     console.log(this)
// }


// let obj={


//     fun(){
//         console.log("no",this)
//     },
//     fun1:()=>{
//         console.log(this)
//     }

// }

// console.log(obj.fun())

// fun()


// setTimeout(()=>{
//     console.log("hello")
// },1000)

// let id=setInterval(()=>{
 
//     console.log("hello")
//     clearInterval(id)
    
// },1000)


// console.dir(document)

// console.dir(document.all)

let h1=document.querySelector("h1");

h1.innerText="umar"

// h1.innerHTML="<u>ali</u>"


// h1.classList.add("umar")
// h1.classList.remove("umar")
// h1.classList.toggle("umar")
// console.log(h1.classList.contains("umar"))

// h1.setAttribute("id","umar")

// console.log(h1.getAttribute("class"))

// h1.style.color="red"

// console.log(h1.classList)

// console.log(h1.parentElement)

// console.log(h1.children)

// let p=document.createElement("p");
// p.innerText="new para"
// h1.prepend(p)
// // // // h1.append(p)
// // // h1.insertAdjacentElement("beforebegin",p)
// // // h1.insertAdjacentElement("afterbegin",p)
// // // h1.insertAdjacentElement("beforeend",p)
// // // h1.insertAdjacentElement("afterend",p)

// p.remove();

let form=document.createElement("form");
let input=document.createElement("input");
let button=document.createElement("button");
button.textContent="submit"
input.setAttribute("placeholder","enter text")
h1.append(form);
form.insertAdjacentElement("afterbegin",input)
form.insertAdjacentElement("beforeend",button)


// input.addEventListener("keyup",(e)=>{

//     if(e.key=="ArrowUp"){
//     console.log("up")
//     }

// })


// form.addEventListener("submit",(e)=>{

// e.preventDefault()
//     console.log(input.value)
    

// })


// function changecolor(colour,delay,next){

//     setTimeout(()=>{

//         h1.style.color=colour
//          if(next){
//         next()
//     }
//     },delay)
// }


// changecolor("red",1000,()=>{
//     changecolor("green",1000)
// })



// function savetodb(data,success,faliure){

//     let num=Math.floor(Math.random()*10)

//     if(num>4){
//         success()
//     }else{
//         faliure()
//     }
// }

// savetodb(1,()=>{
//     console.log("data save1")
//     savetodb(1,()=>{
//         console.log("data2 save")
//     },()=>{
//         console.log("failde2")
//     })
// },()=>{
//     console.log("failde1")
// })



// function savetodb(data){

//     return new Promise((resolve,reject)=>{

//         let num=Math.floor(Math.random()*10)

//     if(num>4){
//         resolve()
//     }else{
//         reject()
//     }

//     })
// }


// savetodb("umar").then(()=>{
//     console.log("saved")
//     return savetodb("ali")
// })
// .then(()=>{
//     console.log("saved2")
//     return savetodb("hassan")
// })
// .catch(()=>{
//     console.log("Err")
// })
// savetodb("ali").then(()=>{
//     console.log("saved1")
//     return savetodb("umar").then(()=>{
//          console.log("saved2")
//     })
// }).catch(()=>{
//     console.log("errr")
// })

// function changecolor(color,delay){

//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//     h1.style.color=color;
//     resolve("chnaged")
//     },delay)
//     })
// }

// changecolor("red",1000).then(()=>{

//     console.log("changes")
//     changecolor("green",1000).then(()=>{
//         console.log("change2")
//     })
// })
// .catch((err)=>{
//     console.log("err")
// })


// try{

//     console.log(e)
// }
// catch(e){
//     console.log(e)
// }

// console.log("umar")


// async function saveto(data) {

    
//     let num=Math.floor(Math.random()*10)

//     if(num>4){
//         saveto()
//     }else{

//         throw new Error("Failed to save");
//     }
    
// }

// saveto("umar").then(()=>{
//     console.log("save1")
//     return saveto("ali")
// })
// .then(()=>{
//     console.log("save2")
//     return saveto("hassan")
// })
// .catch(()=>{
//     console.log("Err")
// })


// let data='{"fact":"If they have ample water, cats can tolerate temperatures up to 133 \u00b0F.","length":70}'

// let jsondata=JSON.parse(data);  //converting string to json object 

// console.log(jsondata) //atking necessary data from it 

// // console.log(jsondata.fact)

// let string=JSON.stringify(jsondata);   //converting back json obkect to string

// console.log(string)


let image=document.createElement("img")
h1.append(image);

let url = "https://dog.ceo/api/breeds/image/random";

// fetch(url).then((res)=>{

//     return res.json().then((data)=>{
//         image.setAttribute("src",data.message)

        
//     })
// })


async function geneat() {


    let response = await axios.get(url)

    image.setAttribute("src",response.data.message)


    
}

geneat().then(()=>{

   return geneat()
})
//.then(()=>{
//     return geneat()
// })
// .then(()=>{
//     return geneat()
// })
// .then(()=>{
//     return geneat()
// })


// async function run() {
//     await geneat();
//     await geneat();
//     await geneat();
//     await geneat();
//     await geneat();
// }

// run();



