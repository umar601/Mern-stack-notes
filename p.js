let s="umar"

// console.log(s.length)


// s=s.trim()


// // always return new string

// console.log(s.length)  // return the length of string


// console.log(s.charAt(1))   //return the character at the index not handle neagteive

 
// console.log(s.indexOf("u"))   // return the index of character


// console.log(s.charCodeAt(1))  // return the ascii of the the index


// console.log(s.at(-2))   //support negative incase of negative it start from the end

// console.log(s.concat("abbas"))


// console.log(s.slice(0,1))    // handle negative not allow swap return empty string if start become greater thean end

// console.log(s.substring(0,1))   //not handle negative 

// // allow swap if start become greater the end (5,0)

// //slice and substring both exclude end 


// console.log(s.substr(1,2))  // return string by taking index and length to which string is required

// // mean substr two characters from index 1


// console.log(s.lastIndexOf("u"))   //give last indes of character in string if appear 0 amd 5 it return 5


// console.log(s.includes("u"))   //search in string and return true or false

// console.log(s.startsWith("app"))    //check the prefix and return true or false

// console.log(s.endsWith("ru"))       //check the suffix and return true or false


// console.log(s.match("ru"))     // check the match and return aaray or null

// console.log(s.matchAll("ru")) //return all matches as an iterator

// console.log(s.replace("u","l"))  // return string and repalce the first macth only it with given 

// console.log(s.replaceAll("u","l"))   // return string and replace all the matches not only first

// console.log(s.padStart(7,"ru"))     // add character in string untill the length reach

// console.log(s.padEnd("ru"))      // add character at end untill the lengtb reach

// console.log(s.repeat(3))    // repeat that string three time 


// let q="hello umar abbasd"

 // console.log(s.split(""))    // convert string to an array 

//seprator is what os eprating the string which we pass in syring



// console.log(q.split(" "))      // to split sentence in to words


// let num=123
// console.log(num.toString())       //c onvert to string


// console.log(s.valueOf())     // return the primitive value




// all string methods 



// console.log(s.charAt(1))   // return the charachter at the the index

// console.log(s.charCodeAt(1))  // return the ascii value at the the index 

// console.log(s.at(-7))  //return the character at index but can deal with negative values if neagtive pass it start from backword dirction but if neagtive is beyond its dobuble length it return nothing

// console.log(s.indexOf("um"))  //return the index of of character

// console.log(s.slice(0,-2))   // give the part of string from 0 and exclude the last pass index allow neagtive values
// // but not allow swap if start become greater the end (5,2)


// console.log(s.substring(0,1))   // same ad slice but not deal with neagtive values and can allow swap if start become greater than end


// console.log(s.trim())    // use to trim the soaces from string from start and end


// console.log(s.startsWith("pf"))    // return the true or flase on the bases of prefix

// console.log(s.endsWith("un"))     // return the true false on the oases of suffix    

// console.log(q.includes(s))    // search in string and return true and false


// console.log(q.match("um"))    // search ing string and return arraya


// console.log(q.matchSll("um"))     // search string and return iterator


// console.log(s.padEnd(10,"l"))     // adds at the end until current length reaches after word length


// console.log(s.padStart(9,"l"))     // adds at the startm until current length reaches after word length

// console.log(s.replace("s","e"))    // replace the first match with the second

// console.log(s.replaceAll("s","e"))    // replace the all match with the second


// console.log(s.split(" "))    // use to split word and sentence base on seprator and retiurn array

// console.log(Number.toString())   // convert to string

// console.log(s.valueOf())    // premitive value 


// console.log(s.toUpperCase())

// console.log(s.toLowerCase())


// console.log(s.concat("umar"))


// console.log(s.lastIndexOf("u"))   // return the last index of give charcter 


// console.log(s.repeat(3))

// arrays method



// for each iterates in complete array


let arr=[1,2,3,4,5]

// arr.forEach((el)=>{
//     console.log(el)
// })


// let a=arr.forEach(function(el){
//  console.log(el)
// })

//In JavaScript, map() is an array method that allows you to transform each element in an array and return a new array of the same length.

// arr.map((num)=>{
//  console.log(num=num*2)
// })

// filter()	Returns a new array with matched items


// let a=arr.filter((num)=>{
//      return num%2==0
// })

// reduce()	Reduces array to a single value

 // accumaltor holds previous value current hold new value and 9 at the end is the index

// let a=arr.reduce((acc,curr,)=>{  

//     return acc>curr?acc:curr
// },0)


// some()	Returns true if any element matches

// let a=arr.some((num)=>{

//     return num%2==0
// })


// some()	Returns true if every element matches

// let a=arr.every((num)=>{

//     return num%2==0
// })

// find()	Returns first matching element


// let a=arr.find((num)=>{

//     return num%2==0
// })


// findIndex()	Returns first matching index


// let a=arr.findIndex((num)=>{

//     return num%2==0
// })

// flat()	Flattens nested arrays


// let ar=[[1,2],[12,10]]

// let a=ar.flat()

// includes()	Checks if a value exists in the array  return true or flase


// let a=arr.includes(2)

//return the first index of in the array

// let a=arr.indexOf(2)

//return the last index of in the array

// let a=arr.lastIndexOf(2)


// check wheather it is array or not with Array keyword return true false

// let a = Array.isArray(arr);


// push()	Add to end
// pop()	Remove from end
// shift()	Remove from start
// unshift()	Add to start


// slice gives a part of array exculding last index  slice() in JavaScript returns a new array, without changing the original one.

// let a=arr.slice(0,3)

// The .splice() method is used to add, remove, or replace elements in-place (i.e., directly modifying the original array).

// array.splice(start, deleteCount, item1, item2, ...)


// let a=arr.splice(0,3)   // insert 4,5,6 at start


// console.log(a)  // [] onlu show remove element

// console.log(arr)

// reverse()	Reverse array in-place
// sort()	Sort array in-place


// let a=arr.reverse();

// let a=arr.sort()


// arr.copyWithin(target, start, end)

// arr.copyWithin(2, 0, 3);

// console.log(arr); 

// join()	Joins elements into a string

// let a=arr.join()


// toString()	Converts array to comma string


// let a=arr.toString();


// at(index)	Gets item by index (supports -1)


// arr.fill(value, start, end)

//  .fill() modifies the original array in-place and also returns a reference to the same array.

// let a=arr.fill(0,0,4)



// for each iterates in complete array by passing call back

//map return a new array by modifying its entries

// filter return the array and return only elements which match given condition

//some retrun the true if condtion match in call back even one

// every return true if condtion match for every element

// reduce the array in single element by doing aoperation taking three arguments accumalator currectnt and index

//include want the seach in array

//index of return the index of the element

// findindex return the first matching index of element

// lastindexof return the last matching index of array

//push used to push at start

// pop used to remive at the end

// ushift used to addd from start

// shift used to remove at start

//sort 

//reverse

// join used to chage it in sting

// to string used to change into string soerated by commas

//within replace somention within string taking three argument target start end

//slice used to rturn a part of array

// splaice used to mioding array with three argument start index delete number additems

// flat used to flat at nested array

//fill used to fill the array with specfuc value taking three argument traget startindex and end index

//used to find the element and return first elemt based on condition


//object literals

//used to store key collection ley value pair

//example 
//student
// name umar
// age 18
// marks 1882

// let obj={
//     name:"umar",
//     age:68,
//     marks:100,
//     arr:[1,2,3,4,5,6,78]
// }
// console.log(obj.arr[0])

//const obj mean we can change the values but cannot chnage its address usually we make object const


// let post={
//     username:"",
//     content:"",
//     likes:0,
//     reposts:0,
//     tages:0

// }

// post.username="umar"
// post.content="travel vlogs"
// post.likes="192"
// post.reposts=0
// post.tages=0

// console.log(post["username"])

// console.log(post.username)


//automatically conver object keys to string wheather number or null


// let post={
//     1:"wqff",
//     null:"",
//     undefined:0,
//     NaN:0,
    

// }

// console.log(post.1);  //error

// console.log(post["1"]); //work



// all works

// console.log(post.undefined)

// console.log(post.null); 

// console.log(post.NaN); 


// let post={
//     username:"",
//     content:"",
//     likes:0,
//     reposts:0,
//     tages:0

// }


//to create attrivute

// post.name="umar"
// post.numberofpost=[1,2,2,2,2,]

// console.log(post);


// we can interchnage value in js mwan we can repalce string with int and int with string


// to delete ke from the object 

// delete post.username

// console.log(post);


// object of objects

// let classs={

//     umar:{

//         age:19,
//         grade:"A"
//     },

//     abbas:{
//          age:20,
//         grade:"B"

//     },
//     ali:{
//          age:23,
//         grade:"C"

//     }
// }


// // deleteing in the nesting objects

// // delete classs.umar.age


// console.log(classs)



// array of objects



// let classinfo=[

//     {name:"umar",grade:"A",age:10},
//     {name:"ali",grade:"A",age:10},
//     {name:"abbas",grade:"A",age:10},


// ]

// console.log(classinfo[0].age)


//math obkects

//math.abs  // for positive values

// math.floor   // for round off to lowest positive inter

// math.sqrt   // for square root

// math.ceil   // for round off in above positive integer


// math.random   // for random number

// math.log   // log of that number 

// math .pow(a,b)    // power of that number



// console.log(Math.floor(Math.random()*6)+1)


// functions


// function hello(usned,hel){
//     console.log(usned+hel)
// }

// hello("umar")


// function table(n){
// let count=1
//     for(let i=n;i<=n*10;i=i+n){
//     console.log(`${n} * ${count} = ${i}`)
//     count++
//     }
  
// }

// table(3)


// function  sum (a,b){
//     return a+b
// }


// console.log(sum(sum(2,3),3))


// scope  which variable is used where

// four scops

// function scope     asscessible in the functions

//block scope         asscessible in specfic part of code in {} eg loops if else etc and apply only let const not var

//lexical scope     nested function  scope mean outer function is asscessible in inner function   and inner is not used by outer

// global scope   accessible by all in functions also

// function hello(){

//     let a="umar"
//     // console.log(b)

//     function umar(){

//         console.log(a)
//         let b="efS"

//     }
//     console.log(b)
//     umar()
// }

// umar()   // error  

// inner function scope is function scope so cannot used


// let func=function (){

//     console.log("eff")
// }

// let umar=()=>{

//     console.log("wefer")

// }

// func()
// umar()


//high order function take or return the functions


//hoisting

// Declaration Type	Hoisted?	Initialized?	Value Before Declaration
// var	✅ Yes	✅ Yes	undefined
// let	✅ Yes	❌ No	ReferenceError (TDZ)
// const	✅ Yes	❌ No	ReferenceError (TDZ)
// function	✅ Yes	✅ Yes (full)	Full function available

//methods


// const calcultor={

//     add:function(a,b){
//         return a+b
//     },
//     sub:function(a,b){
//         return a-b
//     },
//     mul:function(a,b){
//         return a*b
//     }
// }

// console.log(calcultor.add(1,2))


// let student={

//     umar:{

//         age:10
//     },
// }

// console.log(student.umar.age)

//this 

//refers to the object currently executing

//in normal window is the object

// let student={
//     name:"umar",
//     age:10,
//     end:12,
//     mat:12,
//     urd:12,
//     avg(){
//         console.log(this),  //object of studnet
//         console.log(this.mat+this.end+this.urd)
//     }
// }

// function avg(){    
//     console.log(this) //object of windwo
    
// }

// console.log(avg())  // mat is not defined if we not right this


//try and catch


// try{
//  console.log(a)
// }
// catch(e){
// console.log(e)
// }

//miscellaneous topics

//arrow function

// let fun=(func)=>{    //arrow function not normal function
//     console.log("efe")
//     func()
// }
// fun(()=>{
//     console.log("hejo")
// })


//for single arguemt arrow function can be without ()

// let func=n=>{
//     console.log(n)
// }
// func(12)


//in arrow function if we are only returning and doinh nothing so we reomve return and currely {} changed to ()

// let func=n=>(
//     n*n
// )

// let fun=(n)=>(
//     n*n
// )

// console.log(func(19))


//set time out  // print after 5 sec

// setTimeout(()=>{
//     console.log("wedkew")
// },5000)


// setinterval    // print every 5 sec

// let id=setInterval(function(){
//  console.log("ewf")
// },1000)


// to stop it we use clear interval


// clearInterval(id)


// this key word in arrow function

//normal function scope is calling objject or current object

// arrow function scope is lexical mean parent scope whose is calling parent

// arrow function have same scope as parent scope

// let student={
//     name:"umae",
//     age:19,
//     fun:()=>{
//         console.log(this)
//     },
//     avg(){
//         console.log(this)
//     }
// function umar (){
// setTimeout(()=>{    //object becaue parent this is object

// })
// }

// function umar (){
//     setTimeout function(){    //window  set timeout thi sis window and window is calling
    
//     })
    //}
// }

// console.log(student.fun())   //wwindow intsteed of obj becuse obj scope is window

// console.log(student.avg()) //object beause its scope is calling object scoepe


// function umar(a=5,b){     //eror first cannot be default

// }

// function umar(a,b=5){     //work

// }

//spread

// let ar=[1,2,3,3,3,3,];

// // console.log(...ar)

// let ar1=[...ar]    //copy of array


// let st=[..."hello"]    //string


//spread in object literals


// let data={
//     name:"umar",
//     age:18
// }

// let datacopy={...data}

// let datacopy1={...data,id:123}

// console.log(datacopy1)



//spread array in  object in this case index become keys and index values become values


// let ar=[1,2,33,3,3,3,3]

// let obj={...ar}

// console.log(obj)


//spread strings in  object in this case index become keys and index values become values


// let obj={..."hello"}

// console.log(obj)



//rest     multiple values into single values


//collections are like arrays but array methods not work on them becuase they are collection like collection of arguemnts and tags etc



// function sum(...ar){
//     ar.forEach((el)=>{

//         console.log(el)

//     })
        
    
// }

// sum(1,2,2,22,2,2,2,2,2,33,3,3,3,)    //multiple values in array


// function min (a,b,c,d){

//     console.log(arguments)     // collection of arguements
// console.log(arguments.length) 
// }


//destructring


// destructring the array 


// let name=["umar","abbas","Alu"]

// let [winner,runner,third]=name    //storing the name in winner runner


// let [winner1,runner1,...arg]=name    // first two winner and runner other in pass and stored in args whole

// console.log(winner)



//destructring in objects


// let student={
//     name:"umar",
//     age:17
// }

// let {name,age,city="lajs"}=student    //storing the name and age of student


// // let {name:user,age:age1}=student     //by making key value pairs 
// console.log(city)


//dom

//document object model

//because when we write code it change into tree like hirearchy parent  child relation 

//head is document  and then come body and then code we write
//like div li  

//every tag is converted into objects

// console.dir(document)

//console.dir    prints object in js object liek tree hirearchy


//console.log   //print in human readable format 


//all tags stored in html tag collection

//when go to document and further all

// console.dir(document.all)


//queryselector or get element retuen the object which is formed in dom


//incase of id wrong id return null

//incase of class and tagname if id or tagname is it retuen empty not null



//setting the content


//innertext      show only visible text in the node

//textcontent    show all the text even hidden by visiblity 0 or display none in this text is very similar to text in html file \n show where the line is finished in out html file it take the text from html file

//innerHtml      show all the html markup mean show all the tags used any tag used 


//to cahnge the only text we use the inner text to chnage the text but when we want to use tags in that text it dont work for innertext

//when we want to use tags in text we use innerHtml because innerHtml indentify the tags bust innertext dont


// let para=document.querySelector("p")

// para.innerHTML=`<u>${para.innerText}</u>`


//can also use innertext in the innerhtml


// attribute manipulation 


//we can chnge the value of any id class or src or any styling using getAttribute and setAttribute


//attributes are id ,class ,styling and src et



//chnaged the class name of paragraph from umar to ali 


// console.log(para.getAttribute("class"))

// para.setAttribute("class","ali");

// console.log(para.getAttribute("class"))


//can also change src of image 

// Image.setAttribute("Src","wwww.png");


//manipulating the style of object 


//we can oly select the inline syling not styling in the css


//not frequently used


//mean chnaging the style of the objects


// para.style.color="red"

// para.style.display="flex"
// para.style.justifyContent="center"
// para.style.alignItems="center"
// para.style.backgroundColor="black"


//classlist   used to check all the list of classes 


// console.log(para.classList)    //show all the classes for certain selector


//we can add remove check and toggle classes using class list


// para.classList.add("hassan")


// para.setAttribute("class","umar")   //it change the alll the classesw so its not preferes

// console.log(para.classList) 

// para.classList.remove("hassan")

// // console.log(para.classList) 

// console.log(para.classList.contains("hassan"))   //return true or false 

// console.log(para.classList.toggle("hassan"))

// console.log(para.classList) 

//toggle mean if class exit it remove it and if not exist it add it 


// if toggle add some class it return true and if remove some class it return false



//navigation 


//parent element give the parent element of given

//chiledern gives the childeren of tag

//child element count gives the number of childern

// console.log(para.parentElement)

// console.log(para.children)

// console.log(para.childElementCount)

// console.log(para.hasChildNodes)  //return the chiled nodes if any

// console.log(para.nextSibling)   //return the next sibling


// console.log(para.previousSibling)    //return the next siblimhg



//adding and removing element from page 


//create  element 

//append child or preappend or append and inseradjascent of our own choice

// let p=document.createElement("h1")
// p.innerText="hello"



// console.log(p)

//appendchild   //used to insert in form of nesting mean wants child

// appendChild

// para.prepend(p)    //inserrt before that tag


// let div=document.querySelector("div")

// div.append(p)     //simply append after that tag mean append after that element 
// div.append(p) 
// div.append(p) 
// div.append(p) 

// div.insertAdjacentElement("beforebegin",p)    //before begin after begin  before end after end

// div.insertAdjacentElement("afterbegin",p)   //in the div 

// div.insertAdjacentElement("afterend",p)      //at end

// div.insertAdjacentElement("beforeend",p)     //in div


//before begin   
//after begin
//before end
//efter end

// let body=document.querySelector("body")

// body.removeChild(para)    //body is parent and it remove the child para 


//simply remove


// para.remove();
// div.remove();

//dom events 

//signals which tell some activity is take place in web page by key board or mouse

// let button=document.querySelectorAll("button")  //to select all button


//on click is only for single event


// for(buttons of button){    // clicl event on alll button
// buttons.onclick=()=>{   //both works
//     console.log("add")
// }
// }

// let btn=document.querySelector("button") 

// btn.addEventListener('mouseenter', () => {
//     console.log("wdw");
// });

// para.style.color=`rgb(${0},${25},${255})`



//this is event listener

// in call back this is the object calling it 

// para.addEventListener('click',function(){   //in this case button
//     console.log(this)
// })

// para.addEventListener('click',()=>{   //in this case window because arrow function this scope always parent 
// //     console.log(this)
// // })


//this is helpulful when we are using multiple tags for single evnt lister and pass call bacj as function() not arrow function




// para.addEventListener('click',changecolor)   //as callback its changecolor not changecolor() it will generate eror
// btn.addEventListener('click',changecolor)


// function changecolor(){
//     this.style.color="red"
// }


//key board events 

//event lister have always event

// let input=document.querySelector("input")

// input.addEventListener('keydown',function(e){

//     console.log(e)
// })

//we foucuus on key code and key

// input.addEventListener('keyup',function(e){

//     console.log(e)
// })


// input.addEventListener('keydown',function(e){

//     console.log(e.key)
// })


//this code will print evry letter enter in text filed

//for up down left right keys

//up Arrowup  ArrowDown ArrowLeft ArrowRight



// for up down right left keys

// input.addEventListener('keydown',(e)=>{
//     if(e.key==="ArrowDown"){
//         console.log("E")
//     }
// })


//form events

// let form=document.querySelector('form')


// form.addEventListener('submit',function(e){
    
//     // e.preventDefault()   //prevent default work and ithis case it prevent form from being submitting
// })


//extracting form data


//  form.addEventListener('submit',function(e){
    
//  e.preventDefault()   //prevent default work and ithis case it prevent form from being submitting

// //  console.dir(input)   //gives to object of input

//  console.log(input.value)
// })



//to access the form elements without giving them id or class



//  form.addEventListener('submit',function(e){
    
//  e.preventDefault()   //prevent default work and ithis case 

//  console.dir(input)

//  console.log(this.elements[0].value)
// })


//more events


//change event  track when value change of input text area and select  change between intail and final stage

//input event   any cahneg in ipnut textare or select non character keys not  triger input 

// input.addEventListener('change',function(){
//     console.log(this.value)
// })



// input.addEventListener('input',function(e){
//     para.innerText=(this.value)
// })

//  input.addEventListener("keydown", function(e) {
//     if (e.key.length === 1) { 
//       // normal letters, numbers, symbols
//       para.innerText += e.key;
//     } else if (e.key === "Backspace") {
//       // handle deleting last letter
//       para.innerText = para.innerText.slice(0, -1);
//     }
//   });


//js call stack 

// all function calls are stored in stack because stack is first in last out 

//breakpoints are used in debugging and want to track the each line of code and track error

//we can also track the call stack here

//go to source and add break point to track the function call like and control it throgh the buttons at the bottom

// function one()
// {
//     return 1
// }


// function two()
// {
//     return one()+one()
// }


// function three()
// {
//     let ans= two()+one()
//     console.log(ans)
// }

// three()

//programming languages are of two types 

//single threaded

//multi threaded 

//js is single threaded mean one thing is executed one time

//call backs allow to deal with signgle threaded and allow the program to work if some thing is not working 


//if js is single threaded then how js wait for the settiemout and print the next line of code 


//the answer is waiting is not done by the js its done by the browser and the browsers are usually written in other alnguages like c++ which are multi threaded and can do multiple works at single time 


//browser put waiting thing in js call stack 


//singlw threaded mean syncronus mean thing are syncronised one after an other 

//and we are making js asyncronised by the the help of settimeout and functions like these 

// js is single threaded but due the settimeout and setinterval like functions it become asyncronus innature 


//the problem arise due to js asyncronus nature is call back hell


// let head=document.querySelector("h1")

// function changecolor(colour,delay,nestchanegclor){

//     setTimeout(()=>{
//   head.style.color=colour
//    if(nestchanegclor){
//     nestchanegclor()
// }
//     },delay)


// }

// //chnage the colour after every seond

// //nesting in callbacks 
// changecolor("red",1000,()=>{
// changecolor("blue",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("pink",1000,()=>{
//             changecolor("purple",1000)
//         });
//     });
// });
// });

//this called callback hell becuase its difficult to understand

//to prevent from call back hell we use different things like async promises and await etc 


//promsies 



// function savetodb(data,sucess,faliure){

//     let internetspeed=Math.floor(Math.random()*10)+1

//     if(internetspeed>4){
//         sucess()
//         // console.log(internetspeed,"is data is saved",data)
//     }
//     else{
//         faliure()
//         // console.log("weak connection")
//     }

// }

// savetodb("uamr",()=>{
//          console.log("is data is saved")

//     savetodb("hello",()=>{
//         console.log("is data is saved")

//     savetodb("hello",()=>{
//         console.log("is data is saved") 
//         savetodb("hllp",()=>{
//               console.log("is data is saved") 
//         },()=>{
//             console.log("weak connection")  
//         })
//     },()=>{
//         console.log("weak connection")   
//         })
//     },()=>{
//         console.log("weak connection") 
//     })
// },()=>{
//      console.log("weak connection")
// })


//call back hell



//promises 


//promises are the object which represent the completion or faliure of asyncronus operation and its returning value 


//or 

//promises represent the completeion and faliure of asyncronus operation and its returning avlue in case of success or faliure 

//promises prevent from calll back hell


//promise is the object 


// it take two call backs one is resolve and one is reject and resolve is success call back and reject is failure call back

//asyncronus mean in which data is dependent on one and other completion of one allow other operation to work




// function savetodb(data){


//    return new Promise((resolve,reject)=>{
//     let internetspeed=Math.floor(Math.random()*10)+1;

//     if(internetspeed>4){

//         resolve("data saved ")
//     }
//     else {
//     reject("failed to save ");
//     }

//    });

// };

// console.log(savetodb("umar"))   //return the stayte of promis mean it return fulfilled or rejected 


//three sate of promises 

//fulfilled 
//rejected
//pending   mean not completed yet


//methods of promises 

//then and catch 


// function savetodb(data){


//    return new Promise((resolve,reject)=>{
//     let internetspeed=Math.floor(Math.random()*10)+1;

//     if(internetspeed>4){

//         resolve("data saved ")
//     }
//     else {
//     reject("failed to save ");
//     }

//    });

// };


// // savetodb("umar").then(()=>{
// //     console.log("promise resolved ")
// //     savetodb("hello").then(()=>{
// //         console.log("saved")
// //         savetodb("umar").then(()=>{
// //             console.log("saved")
// //             savetodb("ali").then(()=>{
// //                 console.log("saved")
// //             }).catch(()=>{
// //                 console.log("failed")
// //             })
// //         }).catch(()=>{
// //             console.log("failed")
// //         })
// //     }).catch(()=>{
// //         console.log("failed")
// //     })
// // })
// // .catch(()=>{
// //     console.log("promised failed")
// // })


// //better way


// savetodb("umar").then((result)=>{
//     console.log("promise resolved",result)
//     return savetodb("umar")
// }).then(()=>{
//     console.log("resolved")
//     return savetodb("ali")
// }).then(()=>{
//     console.log("resolved")
//     return savetodb("hussain")
// }).then(()=>{
//     console.log("resolved")
//     return savetodb("hussain")
// }).then(()=>{
//     console.log("resolved")
//     return savetodb("usman")
// }).then(()=>{
//     console.log("resolved")
// })
// .catch((e)=>{
//     console.log("promise rejected",e)
// })


// //old color code


// let head=document.querySelector("h1");


// function changecolour(coluor,delay){

//     return new Promise((resolve,reject)=>{

    
//     setTimeout(()=>{
//     head.style.color=coluor;
//     resolve("chnaged")
//     },delay)
     

//     })
// }

// changecolour("red",1000)
// .then((result)=>{
//     console.log("colour changed",result)
//     return changecolour("green",1000)
// }).then((result)=>{
//     console.log("greend changed",result)
//     return changecolour("blue",1000)
// }).then((result)=>{
//     console.log("blue colour chnanged",result)
//     return changecolour("yellow",1000)
// }).then((result)=>{
//     console.log("yellow colour changed",result)
//     return changecolour("black",1000)
// }).then((result)=>{
//     console.log("black colur changed",result)
// })
// .catch((e)=>{
//     console.log("not",e)
// })



// function savetodb(data){

//     let networkSpeed=Math.floor(Math.random()*10)+1;

//     return new Promise((resolve,reject)=>{

//         if(networkSpeed>3){
//             resolve("saved to dataBase")
//         }
//         else{
//             reject("slow network speed")
//         }
//     })

// };

// savetodb("umar").then((result)=>{

//     console.log("promise resolved ",result);
//     return savetodb("ali");

// }).then((result)=>{

//     console.log("promise resolved ",result);
//     return savetodb("hassan");

// }).then((result)=>{

//     console.log("promise resolved ",result);
//     return savetodb("hussain");

// }).then((result)=>{

//     console.log("promise resolved ",result);
//     return savetodb("abbas");

// }).then((result)=>{

//     console.log("promise resolved ",result);
//     return savetodb("usman");

// }).catch((error)=>{

//     console.log("failed to save ",error);
    
// })

//async functions


//async funxtion always return a promise 

// async function hello(params) {
    
//     // throw "some error"
//     return "hello"
// }

// // console.log(hello())

// hello().then(()=>{
//     console.log("successful")
// })


// //for arrow


// let demo=async()=>{

// }


//await keyword 

//awaits key word pauses the execution of other async functions untill promise is resolved or rejected 


//only used in asunc functions


// function num() {


//     return new Promise((resolve,reject)=>{

        
//         setTimeout(()=>{
//   let n=Math.floor(Math.random()*10)+1
//             if(n>2){
    

//     console.log(n)
//     resolve();

//             }
//             else{
//                 reject("num is less")
//             }

//         },1000)
   
//     })
    

// }

//without await it printis three number once but with await it print one by one


//handling rejection with error handling

// async function demo() {

//     try{
//     await num();
//     await num();
//     await num();

//     }
//     catch(error){
//     // console.log("error")
//     console.log(error)
//     }

//       let a=6;
//     console.log("A",a)
    
// }

// demo()


//api 

//application program interface

//is kind of waiter which take order from the customer and take the prepare order from kitchen as response and kitnchen act as server 

//interaction between softwares

//the api which use http protocol called web apis

//api return the data and that data is in the form of jason 

//json is very simalr to js object 

//some apis 

//http://catfact.ninja/fact    send random cat facts 


//https://www.boredapi.com/api/activity  send some activities when bored

//https://dog.ceo/api/breeds/image/random   //send cute dog pictures 

// https://api.potterdb.com/    harrypotter 

//json

//stand fors javascript object notation 

//json is a format

//before the format was xml xtensible markup language in xml data is normally in form of cutom html tags


//json format is very similar to javascript object means have key value pairs

//for further www.json.org

//undefined not allow in json

//json validators to chk which code is correct and which is not 


//accessing json data

//json data is in string format


//json.parse convert string data into javascript object


// let data='{"fact":"If they have ample water, cats can tolerate temperatures up to 133 \u00b0F.","length":70}'

// let jsondata=JSON.parse(data);  //converting string to json object 

// console.log(jsondata.length) //atking necessary data from it 

// console.log(jsondata.fact)



// //json to stringfy is used to convert json object to abck to string

// let string=JSON.stringify(jsondata);   //converting back json obkect to string

// console.log(string)


//testing api request

//hoppscoth      //website name is hoppscoth.io

//postman   //neeed to download so we go with hoppsccoth


//Ajax   is the whole process throghh which we make api call and and receieve the result data

//asyncronus javascript and xml 


//api request is asyncronus response 


//the process of api request is done asyncronusly and the page doesnot relaoad and js doing on work untill response and this process is called ajax (asyncronus javascript and xml )


//http verbs

//get     used to get information

//post    when post information post data with request

//delete  when delete specfic information



//status codes 


//200 ok       mean request is successfull

//404 not fount      if api not exist reponse but sataus error

//400 bad request       server could not understand the request    

//500 interval sever error    internal server erro


//client erros 400

//server errors   500


// https://www.google.com/search?q=umar


//above is example of query string


//q and umar is key value pair in google


// let data='{"message":"Welcome to the Potter DB: API! Check out the docs for more information: https://docs.potterdb.com"}'

// console.log(JSON.parse(data))



// let data = [
//   {
//     "state-province": null,
//     "country": "Pakistan",
//     "alpha_two_code": "PK",
//     "domains": ["pieas.edu.pk"],
//     "name": "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
//     "web_pages": ["http://www.pieas.edu.pk/"]
//   },
//   {
//     "state-province": null,
//     "country": "Pakistan",
//     "alpha_two_code": "PK",
//     "domains": ["tip.edu.pk"],
//     "name": "Textile Institute of Pakistan",
//     "web_pages": ["http://www.tip.edu.pk/"]
//   },
//   {
//     "state-province": null,
//     "country": "Pakistan",
//     "alpha_two_code": "PK",
//     "domains": ["prestonpak.edu.pk"],
//     "name": "Preston University, Pakistan Campus",
//     "web_pages": ["http://www.prestonpak.edu.pk/"]
//   },
//   {
//     "state-province": "Panjab",
//     "country": "Pakistan",
//     "alpha_two_code": "PK",
//     "domains": ["vu.edu.pk"],
//     "name": "Virtual University of Pakistan",
//     "web_pages": ["http://www.vu.edu.pk/"]
//   }
// ];

// console.log(JSON.stringify(data))


//http headers 

//inspect go to network then headera 

//used to provide additional information request and response


//usually send data about the data meta data through headers


//first api request


// let url = "https://dog.ceo/api/breeds/image/random";

// fetch(url).then((response)=>{       //return the promis 
//     console.log(response)
//     response.json().then((data)=>{      //to make our data in readable format and also return promise
//         console.log(data)
//     })  
// })  
// .catch((e)=>{

//     console.log(e)

// })


//better way  of above

let image=document.querySelector("#dog")
let image1=document.querySelector("#dog1")


// fetch(url).then((response)=>{       //return the promis 
//     // console.log(response)
//     return response.json() 
// }).then((data)=>{      
//         image.src=data.message
//         return fetch(url)
// }).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     image1.src=data.message
// })
// .catch((e)=>{

//     console.log(e)

// })


//fetch with async and await 

let url = "https://dog.ceo/api/breeds/image/random";


// async function getpics() {

//     try{
//     let res=await fetch(url)   //if not write await it remain pending du to asyncronus natire of js
//     let data=await res.json();   //if we not write await it throw erro
//     image.src=data.message   
//     }
//     catch(e){
//         console.log(e)
//     }
//     console.log("done")
    
// }
// getpics()

// async function getpics() {

//     await fetch(url).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         image.src=data.message
//         return fetch(url)
//     }).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         image1.src=data.message
//     }).catch((e)=>{
//         console.log(e)
//     })

    
// }
// getpics()


//axios   library to create our http request


//above code with axios 


//why wen need axios when we have fetch because in ffetch in some cases we need to parse the data but such need is not needed in case of axios

//axios data is already parsed 


// document.querySelector("button").addEventListener('click',getpic);


// async function getpic() {

//     try{

//     let res=await axios.get(url);
//     image.src=res.data.message

//     }
//     catch(e){
//         console.log(e)
//     }
    
// }

// getpic()


//passing headers in axios

//can pass header to second arigument in get 

// async function getfacts() {

//     const config={headers:{accept:'application/json'}}

//     //const config={headers:{accept:'application/x-www-form-urlencoded


//     let res = await axios.get(url,config);
//     console.log(res.data)
    
// // }
// getfacts()


//query string

// let url1 = 'http://universities.hipolabs.com/search?name=';


// let country='pakistan'

// async function getuni() {

//     let res=await axios.get(url1+country)
    
//     console.log(res.data)
    
// }

// getuni()







//practice 



// document.querySelector('form').addEventListener('submit',function (arg){

//     arg.preventDefault();
//     console.log(this.elements[0].value)

// })

// document.querySelector('input').addEventListener('input',function(e){

//     console.log(this.value)

  
// })




//terminal

//control our computer

//to check current working directory(where i am )     pwd

//to list all files in that forlder                   ls

//to clear                                           clear

//to check github version                            git --version

//to check git path                                 where git

//by default ~ is root directory in mac


//up arrow for old command and down arrow for new commands 



//navigation

//to change existing directory 

//cd (change directory)

//if we have space in folder name so pass paths in ""
// to chnage directory command

//cd (floder name )

//like    cd desktop


// to go back 

// cd ..     cd space ..  mean back button


//tab press to auto complete 

//to go inside muttliple steps  cd desktop /html revise /print

//cd .. for one step back   cd  ..\.. for two step

//cd ..\..\.. for three steps back


//paths is navigation

//realtive is relative to our current location

//abosolute path always start with /

//using  absolute we can anywhere by providing complete path 

// root directory is repersented by /

// ~ is our home directory 


//making directories

//mkdir (make directory ) make folder for us 


//mkdir (floder name )


// mkdir umar abbas   it make two folders two folders umar abbas 

//we can make as many folders by wriing their name with space 

//make folder using absolute path


//mkdir user\umar\desktop\html revise /


//flags in terminal 


//flags are the charachters we use with commands to modify their behaviour 


//manual command or  man command we can open instruction manual of other command

//eg

//man ls   give information about ls

//man mkdir give information av mkdir

//but not work 

//ls -l details list name of folders 

//ls -a for hidden folders 


//touch command   chnage acces time of files if not exist then to create new file 

//eg

// touch \users\umar\desktop\portfolio\umar.txt


//deleting files and folders    (sensitive because they are not restore from recycle bin)

//rm remove file

//eg

// touch \users\umar\Desktop\portfolio\umar.txt

//rmdir   remove folder only which are empty

//eg

// rmdir \users\umar\Desktop\portfolio\umar

//to remove folder with the data or files inside

//rm -rf removes any folder  rf stand for recursive forice to remember remove with force 

//rm -rf \users\umar\Desktop\portfolio\umar


//revise 

//pwd    print working directory

//ls   list all files in current location

//clear   to clear the terminal

//cd ..  to go back

//cd ../..  to go twpo step back 

//relative path relative to current location and start with file name 

//absolute path complete path of something often start with \

// mkdir  to creat folder 

// touch to creat file

//rm to remove file

//rmdir  to remove empty folders

//rm -rf to remove any folder rf stands for recursive force and to remember remove with force

//man manual information about other command but nit work in windows

// flags are used to show addition ainformation about exiting command

//ls -l show complete name

//ls -a show hidden files and folders 

//cd is used to change directoru

//  / is rooot directory

// ~ is home directory

//press tab to auto complete 


//git and git hub


//git is version control system (tools which help to track chnage in code)

//git hub is a website where we host repositories


//configuring git hub

//git config --global user.name "umar abbas"
//git config --global user.email "umarshah6444@gmail.com"

//using global becuuse it work with same username and email in whole system

//git config --list   to see username and email


//clone mean duplicate or copy mean cloning a respostry in our local machine

//git clone <link>  which we copy from code icon of repository of git hub

//status is used to check the status

//git status

//there are four status life cycles

// untracked 

//unmodified

//modified

//stagged


//untrack to unmodified when we add file

//unmodified to untrack when we remove the file

//unmodified to modified when we edit the file

//modifed to satfed when we stag the file


//staged to unmodified when we commit the file


//git is two steps process add and commit 

//the file which already exist unmodified

//the file which we add are untrack able


//add  change new or changed file from our working directory to git staging area 

//git add file name

//git add .   to add all files 

//commit is the record of change


//git commit -m "some message about commit"

//push upload it on remote repo

//git push origin main  (orgin is place name) and main is the branch name


//init command 


//used to create new github rep  

//git init

//git remote add origin <link>

//git remote -v     to verify remote

//git branch      to check branch

//git branch -m main   to rename branch if branch name show master

//git push orgin main  can write git push 

//git -u orgin main once then writ e

//git push only 


//if we not added new file adn only made changes then we can add and commit combined like


//git commit -am"message of commit "


































