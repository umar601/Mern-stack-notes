// let s="umar"

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

// let image=document.querySelector("#dog")
// let image1=document.querySelector("#dog1")


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


//git branches 


//seprate copy of all previous changes when we wnat all previous chnages and now onwar two or three changes possible so we can make branches so different developer works parallel in same code with help of diferent branches 


//main branch is the default branch 


//when all changes complete and only required changes are merged to the main branch 


//in easy word for collabration and make work faster


//branch commands


//git branch     to check the branch 

//git branch -m <old name> <new name>    to rename the branch 

//git checkout  <branch name>   from one branch to other

//git checkout -b <new branch name>   to create new branch 

//git branch -d <branch name > to delete branch


//to merge the feature with main branch we use the pull request

//merging the code in brancges 

//can be done in github and also in git 


//git diff <branch name>   to see differnece between two branches 

//git merge <branch name >

//git pr   mean git pull request   help us to know which changes in our branch


//conflicts main same chnages in both branches 

//pull commands 

//git pull origin main


//merge conflicts 

//when we have same changes in mutlple branches 


//we have to solve these changes manually 

//we can chnge sany or both



//fixing mistakes 

//if add something and not want to commit 

//git reset <filename>   for single file


//git reset   for all files 


//if we have commit and and not wanted to commit 

//git rest Head~1    points to last commit 

//to delete any number of commits


//git log to see all commits

//git reset <hash>  hash is code in fornt of commit when type git log


//and if want extra changes after that commit also delete

//git reset--hard <commit hash>


//forking

//forking mean if want to contribute in other work 

//click fork and make reop in our account 

//make changes 

//then click pull request 

//fork is rough copy

    

//if stuck in end    presss  q



//revising terminal and git hub


//to print working directory                                  pwd

//to clear screen                                             clear

//to list all files in current location                        ls

//to change directory                                         cd desktop

//there are two ways of changing it                          

//relative mean with in same location and start with file name like      cd desktop

//absolute mean at any location and start with \        cd \users\umar\desktop\html revise 

//if folder have space so put path in double quotes " "

//to go back    cd ..     to go as many steps   cd ../../..

//to make new folder     mkdir umae

//to make new file      touch umar.txt

//to remove empty folders     rmdir <folder name>

//to remove filled folder rm -rf <folder name>   rf meand recursive force 

//to remove file    rm <file name>

//flags contain extra information   about the commands  eg   ls -a to print hidden files and so on

//to auto fill the terminal we have to press the tab button

//manuals anre the the information anout commadns and not work in windows

//  \ is the root directory

// ~ is the home directory 




//git and github

// git config --global user.name "umar abbas"
//git config --global user.email "umarshah6444@gmail.com"


//git is version control to tracj the chnages in our code 

//git hub is website to make public and private repos

//to check the git version   git --version

//to clone a project mean move project from remote repo to our system for changes

//git clone <http link of repo>

//git status   to check the status of files

//git add <file name>   to add the the files

//git commit -m "message forcommit "

//git push origin <branch name >

//if we dont uplaod new file and only mad changes then add and commit can be done by one command

//fit commit -am "message for commit"

//writ once git push -u origin main  and then only rit git push for a particular branch

//to host a ppject from our local sytem to gihub'


//git init

//git remote add origin <repo link >

//git remote -v   to verify 

//git commmit -m "adding project"

//git push origin main


//branches when multiple developers are working 

//git branch   to check the branh

//git checkout -b branh name    to make new branch

//git branch -d branch name to delet branch

//git bracnh -m <old name><new name >   to rename branchg


//git diff <branch name >  to see differnece between branches

//git merge <branch name >   to merge branches

//git checkout <branch name >   to move form one branch to other

//merge can also be done by git hub by clicking on pull request and alo using

//git pr

//mistake

//to go back if some thing is add 

//git reset <file name>

//for all

//git reset

//to see all commit s

//git log

//to go back if commit is made 

//git resest HEAD~1  number point ti node number

//if want to go back to any commit   git rest hashnumber form git log

//to delete the commit betwee git reset --hard hashnumber from git log

//forking mean contrubuting in someone other project 

//click fork and then commit changes and pull to that 


//there are four type of git status

//untracked mean current added fils

//unmodified mean already added files

//modifies mean edit file

//staged mean committes file


//backend

//nodejs is not a library not a frame work 

//node js is js runtime environment which allow to run js outside webbrowser


//oldly js is run in browsers by the interpraters in browsers  

//with the help of nodejs we can make servers and can run js outside browser


//node js is used for server side programming and also used in game and iot devices 


//it is used to do server side programming


//node installation

//when we type node in terminal  it will tell us weather it is intall or not

//node repl 

//repl mean to read,evaluate,print and loop

//to use node js type node in terminal and then write commands

//node not recognize terminal command like ls or any other terminal commands

//node also not recognise dom commands beacuse it is made from the engine of browser and c++ language so it not recognise dom command also


//cannot mauplate dom becuase dom exist in the browser using html models


//winow object not exist in node but its equivalent exit called global

//to take help press help

//to exit node type .exit or two times crtl+c crtl+c


//node js file is made with .js extension and from now onword we are working on node js and express js

//to run node.js you must be in same directory other wisw it will thorw error


// console.log("hello node js");
// let a=5;
// let b=5;
// console.log(a+b)

// for(let i=0;i<5;i++){
//     console.log("hello",i)
// }


//process is object which provide information about and over the current node.js processs

//node js mean the current work doing in node js 

//it have many special properties allow input output version and current directory or memory related thing 


//type process in node


// console.log(process)


//process.argv return array containing commad line argument (  argument are the inputs )when node.js processed and launched


// console.log(process.argv)   //it will return an array 


//the thing we pass in function called parameter and in function it become arguments


//node p "hello umar"  //these are arguments we pass to the file

//in code

// let len=process.argv;


//we are starting loop from 2 becaus first two are path

// for(let i=2;i<len.length;i++){
//     console.log("hello",len[i])
// }


// "umar","ali","abbas "  //consider as single so donot use quotes in argument 


//export in files 


//module.exports is used export things and can be used in other files

//module.export can be array string or number but usually it will be object 

// let fun=require("./math");   requiring math exports and ./ mean in same  directory



// module.exports.sum=function(a,b){
//     return a+b;
// }


//can only use .exports but not work for simple whic is down 

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// module.exports="umar"

// module.exports={
//     sum:sum,
//     ddivide:divide,
//     multiply:multiply
// }


// module.exports=[sum,multiply,divide]


// let fun=require("./math");

// console.log(fun.sum(2,3))

// console.log(fun.multiply(2,3))



//if we return an array 


// console.log(fun[0](2,3))



//export in directories 

//made require files in which you want to export any thing 

//then in that dorectory mak a index.js file and require all these files and this will act as entry point and 

//and then reqiure whole directory in require file 


//index.js code

// let apple=require("./apple")
// let mango=require("./mango")
// let orange=require("./orange")


// let obj={
//     apple,
//     mango,
//     orange
// }

// module.exports=obj;

//  let arr=[apple,orange,mango];

//  module.exports=arr


//other file code 


// let apple={
//     name:"apple",
//     colour:"red"
// }

// module.exports=apple;

// let fruits=require("./fruits");

// console.log(fruits.apple)



//now talking abour npm 


//very important 


//stands for standardpackage manager for node js


//imagine as library of package

//someone other code that we can use called package

//command line tool through which we can intall package through our command line 


//npm is pre download with node to chack type npm


//installing packages 

//npm install <package name> or npm i >package name>

//npm website name is npmjs.com


//using figlet as exmaple of npm packages 

//install package in specfic directory

// var figlet = require("figlet");

// figlet("umar shah", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//when we install packages we have three thing downladed

//node modules  contain every intall depdencies (dependency mean in which our code depent exmaple api or react if they are not available our code will stop working)

//node module install our dependency and downloaded automatically

//we have to delete it when sending someone our code becuase it can be download from package.json


//packagelock.json   it is recored or exact version of every dependency or any sub dependency 


//it is most important 

//package.json  is similar to lock.json

//it have descriptive and functional meta data)data about data) about our project such as name version and dependency owner lisence

//to intall node modules we have package.json

//npm install it will install all dependency in our json file dont need to write any file name

//if make our own project and want package.json just write npm init an it will intall package.josn file

//exampkle in my project 


//local vs gloabl installation

//till now we install local mean we can use it in our directory 

//but global can be used any where 

//npm install -g <pacakeg name>

//before this once write other wise throw erroe in case of global

//sudo chown -R $USER/user/local/lib/node_modules

//it will give premission taht treat us as admin

//but still cant use so write 

//npm link <package name>

//but it is prefered to use local


//require vs import

//with import we can selective import anything

//use require in all prooject or import that good practice

//require select all things not selective


//i f using import use inly export
//to export all

// function sum(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// export default {
//     sum,multiply,divide
// }

//to import all

// import math from "./math.js"; //if we hav eobject of export as above

//the file name must be complet with extension

// import {sum} from "./math.js";  //if we hav indiviual exports


//if not work write type:module in package.json


//it save memory becuse we not load complete file

//require is syncronus but import is asyncronus 

//can also import pacjkages 


// import {sum} from "./math.js"

// import m from "./math.js"  //for object and array 

// console.log(m[0](2,3))



//starting with express js 


//express 

//library  is collection of pre written code that can be used to perform various tasks such as axios which is used to fetch apis

//used to do small work in large code 

//in libraries we have control

//framework is also set of pre written code that provide structure for developing software application eg express

//help in structure of application 

//in framework we donot have control framework define the structure of application


//express is node.js framework used to help in making web applications

//it used to server side programming 

//four major uses

//listen incoming request

//parse the request according to js

//match request  according to routes eg google.com/help match according to path

//suitable response according to request 

//can be download from npm 

//npm install express

//help in server side programming


// let express=require("express");  //require express function

// let app=express(); //help us to make server side application throught this app and this app is an object 

// let port=8080;   //logical endpoint of a network connection is used to exchnage information between client and server


//port can be 3000 or 8080 for custom servers


// app.use((req,res)=>{   //accept any type of request get post patch delete

//     res.send("hello worl");  //can send string array html or object 
//     // console.log(req)
//     // console.log(res)

// })


//sending object 

// app.use((req,res)=>{   

//     res.send({
//         name:"umar",
//         age:23
//     })

// })


//sending html

// app.use((req,res)=>{   

//     let code=' <ol><li>umar</li><li>abbas</li><li>ali</li><li>hassan</li><li>hussain</li><ol>'

//     res.send(code)

// })


//number 

// app.use((req,res)=>{   



//     res.send(3)

// })

//array 

// app.use((req,res)=>{   


//     let arr=[1,3,4,5,5,]

//     res.send(arr)

// })

// app.get("/",(req,res)=>{

//     res.send("hello world");

// })

// app.listen(port,()=>{
//     console.log(`app is listening on ${port}`)
// });


//http request is text base and express cahnge into object and this is called parsing because server can be made in any lanaguage


//testing may not work in hoppscoth for testing server it will work after downloading extenion


//routing  for urls ef google.com/help instagram.com/umar google.com/search


// app.get('/',(req,res)=>{    //its default path
//     res.send("hello from routing")
// })

// app.get('/about',(req,res)=>{
//     res.send("hello from about")
// })

// app.get('/home',(req,res)=>{
//     res.send("hello from home")
// })

// app.use((req,res)=>{     ///if none of above then use use
//     res.status(404).send("This path not exist")
// })


//response is one at a time for same time 


//post 


// app.post('/',(req,res)=>{
//     res.send("hello from post")
// })


//nodemon automatically start the sever with code changes

//install it gloablly 

//npm i nodemon


//to restart type rs


// app.get('/',(req,res)=>{
//     res.send("hehheh nodmon  ")
// })


//path parameters 

// app.get("/",(req,res)=>{
//     let username=req.params;
//     res.send(`This account`)
// })


// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;  //params is object so we are doing destructing here so above pass and here must be same
//     res.send(`This account belons to ${username} and id is ${id}`)
// })


//query string  


//if we searchh appple 


//www.google.com/search?q=apple 

//handle request for query string

// app.get("/search",(req,res)=>{

//     let {q}=req.query
//     res.send(`You searched ${q} `)

// })

//http://localhost:8080/search?q=apple

// http://localhost:8080/search?q=apple&q=red


// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     let {q}=req.query;  //must be q 
 
//     if(!q){
//         res.send("you search nothing");
//     }else{
//         res.send(`${username} searched ${q}`)
//     }
// })


//revision;

// let express=require("express");
// let app=express();
// let port=8080;



// //listening to port 

// app.listen(port,()=>{
//     console.log(`listening at the post ${port}`);
// })


// //routes for specfig paths


// app.get('/',(req,res)=>{
//     res.send("hello from home")
// })

// app.get('/projects',(req,res)=>{
//     res.send("hello from projects")
// })

// app.get('/about',(req,res)=>{
//     res.send("hello from about")
// })

// app.get('/contacts',(req,res)=>{
//     res.send("hello from contatcts")
// })


// //path for varibales and custome users

// // app.get('/:username',(req,res)=>{
// //     let {username}=req.params;
    
// //     res.send(`hello ${username}`)
// // })


// //query string

// app.get('/search',(req,res)=>{
//     // let {username}=req.params;
//       let {q}=req.query;
    
//     res.send(`hello you searched ${q}`)
// })



// //custom user and query strinhg

// // app.get('/:username',(req,res)=>{
// //     let {username}=req.params;
// //       let {q}=req.query;
    
// //     res.send(`hello ${username} you searched ${q}`)
// // })


// //nothinhg match

// app.use((req,res)=>{
//     res.send("hello from all routes")
// })



// const express = require ('express');

// const app = express();

// const port = 8080;

// app.listen(port,()=>{

//     console.log("Request is listening at port",port);
// });

// app.get('/:username',(req,res)=>{

//    let {username}=req.params;    


//     let code = `<div> <img alt="user image" src="userimage.jpeg" width="100px" height="100px"> <h1>Welocome to ${username} profile  </h1> <button>Followers</button> <button>Following</button></div> `

//     // let code = `<img src="userimage.jpeg" alt="User Image" width="200" height="200">`;

//     res.send(code);
// });


//practicing branch 


//checking merge working

//seeing how merge work


//templating  are fixed layouts in which multiple infformation is provided

//example of resume templat or any template in which we provie our information it make resume for us 

//we can even make whole page just by templates

//exmaple instagram pages for different user is not made with every user we jsut made template and just put information there


//tools   handle bars and ejs

//we are using ejs bcuase its papular and its in javascript

//ejs stands for embedded javascript template 


//ejs is simple templating language that let you generate HTML markup with palin javascript

//install ejs by npm i ejs

//we have to write this line to make ejs works

//app.set("view engine","ejs");

//app.get("/",(req,res)=>{

//     res.render("filename.ejs")
    
// })


//ejs is also a package we donot require it becuase express by default reuire it 


//app.set is used to set different thing and one thing is view engine 

//when we listen view it mean template 

//we donot send response by ejs 

//we render respnse and render mean sending files 

//by default view engine expect that our all the templte must be in veiws directory so we make views directory


//we can set any name of view folder but it prefer to use the name viws

//in views directory make .ejs name file in which we write html js mix code and this will called template


//view engine automatically search views folder and and then ejs file

//install extension ejs

//it will search views folder from where server is run so views only work only in that folder so solution is 

//const path=require("path")
//app.set("views",path.join(__dirname,"/views")) 

//  we are shoeing path of view with help of path.join function and in this __dirname  current working directory and /views we giveing exact path


//  nodemon instagram/index.js   if want to run from other older 


//interpolation syntax 

//interpolation refers to embedded expressions into maked up text

//<%= %>  gives the ouput of code just like literals 

//output inform of string 

//<%%>  for conditional and loops

//<%# #>  for comment s

// <%-%>  need complete html code


//if we assume data is coming form insta in form of json to access that we have to require 

//const instadata = require(./data.json);

//serving statics files 

//mean want to send css and js files also in ejs

//app.use(express.static(folder_name));

//app.use(express.static("public"))

//or 

//app.use(express.static(path.join(__dirname,"public")))



//by default static files in public folder


//to to link   <link rel="stylesheet" href="/style.css">

//donot need to write publicd


//includes  in ejs 

//ways to create sub templates 

//make include folder in views and then files  and then include it where you nedd as under 

// <%- include("includes/head.ejs") -%>

//if footer include it in last 



//  <h1>hello from template <%= username %> </h1>

//   <% if (username == "umar") { %>
//     <h1>hello <%= username %></h1>
//   <% } else { %>
//     <h1>Hello</h1>
//   <% } %>

//   <% for (let i = 0; i < arr.length; i++) { %>
//     <h1><%= arr[i] %></h1>
//   <% } %>

//for nodemon to run you must be in folder not insode any foledr


//Misleaneous

//Get and Post request 

//GET

//used to get some response 

//data sent in query strings 

//disadvantage limited string data and data is visble in the URL

//want some response example searching something

//POST

//used to post something for create write and update 

//Data is sent via request body and 

//data can be any type

//want to post something or any update


//data in  post can be send through hop scotch throgh headers


//whole paost data is in res.body 

//but we need to parse

//app.use(express.urlencoded({extended:true}));

//if data is in url encoded form 

//parse automaticlly and understand it 


//app.use(express.json());

//in case data in json form 


//they are called middleware and we learn them soon 

//bydefualt req.body dont understand type of data so in start it print undefined 


// const express = require("express")

// let app=express();

// let port=8080;

// app.use(express.urlencoded({extended:true}));

// app.use(express.json());

// app.listen(port,()=>{
//     console.log("listening at port ",port);
// })

// app.get("/action",(req,res)=>{

//     let {username,password}=req.query;

//     console.log(username);
//     console.log(password)

//     res.send(username,password)
// })

// app.post("/action",(req,res)=>{

//     console.log(req.body)

//     // let {username,password}=req.body

//     res.send("psot")
// })



//revisiting js oops


//lakhs of student data so its not good approach to make every student name object repeating in programming is not good approach 

// let stud1={
//     name:"umar",
//     age:18
// }

// let stud4={
//     name:"umar",
//     age:18
// }
// let stud3={
//     name:"umar",
//     age:18
// }
// let stud2={
//     name:"umar",
//     age:18
// }



//repetation in the code 


//if we have function function is created seprately in memory for every student 


//so we come with oop


//object prototypes

//in case of array when we print there is prototype

//prototype is mechanism by which js inherit feature froom one other

//its like simple protype object and all share properties having their own copies

//all array object inherit these protypes information

//protypes is single template object 

//all js object have built in property called prototype 

// let ar=[1,2,3,3];


//posssible 

// ar.sayhelllo=()=>{
//     console.log("hello");
// }

// let ar1=[1,2,3,3];


// //posssible 

// // ar1.sayhelllo=()=>{
// //     console.log("hello");
// // }

// console.log(ar==ar1)   //false becuase of refrence

// console.log(ar.sayhello==ar1.sayhello)   //false becuase of refrence


// console.log("add".toLowerCase==="asdd".toLowerCase)  //true becuase of prototype


// console.log("add"==="asdd") //false 


//access prototy

//to access specfic object prototype


// console.log(ar.__proto__)


//we can change defination of buit in like 

// ar.__proto__.push=(n)=>{
//     console.log("say hello")
// }



// ar.push(5)


// ar.__proto__.pop=(n)=>{
//     console.log("a")
// }

// ar.pop();

//actual prototype of actual prtotype of array and string

// console.log(Array.prototype)

// console.log(String.prototype)


//factory function

// a function which create object 

//not use many times 


// let obj=(name,age)=>{
//     let person={
//         name:name,
//         age:age,
//        talk:function talk(){
// console.log("hhelo")
//        }
//     //    talk:()=>{
//     //     console.log("hhelo")
//     //    }

//     //    talk(){

//     //     console.log("ehh")

//     // }
    
//     }
//     return person
// }

// let p1=obj("umar",10)

// let p2=obj("ali",10)

// console.log(p1.talk==p2.talk)  //false

// console.log(p1.name==p2.name)  //false

//but its also in efficent becuase the it creates copy of dunction for evry student and it is wast eof memory


//better then factory function new concept called new operator 


//new operator create instance of user defined object or built in if have constructor 



//constructor are special function and its first letter must be capital and does not return anything 

//can start with samll and return but not good


//when function is used with this it is treated as constructor

//it work in four steps

//make empty object 

//if have prototype proerty mean function the objet can access the prototype

//execte all the function parameter with thus key workd and thuis refer to cureent object

//


// function Person(name,age){

//     this.name=name;
//     this.age=age
   

// }

//to creat efunction in constructors 

//  Person.prototype.talk=function(){
//         console.log("ta")
//     }



// let p1 =new Person("umar",12)

// let p2 =new Person("umar",12)


// //same work as factory fucntion


// console.log(p1==p2)  //flse


// console.log(p1.talk==p2.talk)   //because of protiotype donot make copy share 



//classes 


//template for creting object

//use special key word constructor


// class person{

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

// //     talk(){   //cannoot use function keyyword
// // console.log("hell0")
// //     }

// //     talk=()=>{   //cannoot use function keyyword
// // console.log("hell0")
// //     }
// }


// //we can write function inside


// let p1=new person("umar",123)

// let p2=new person("ali",123)


// console.log(p1)


// console.log(p1.talk===p2.talk) //true incase of simpel function

//but in case of arow it is flase becuse it is store in variables 

//automaticaly create protype

//use same copy 


//inheritance 


//extends and super key word


//extends is used to inherut properties


//super mean parent class constructor called

//inside normal


//creat enew class on base of some class


// class person{   //base class

//     constructor(name,age){

//         console.log("parernt")
//         this.name=name;
//         this.age=age;
//     }

//     talk(){
//         console.log("hello",this.name)
//     }
// }

// class  student extends person{

//     constructor(name,age,makrs){

//           console.log("chike")

//          super(name,age)
     
//         this.makrs=makrs;
//     }

//     talk(){
//         console.log("hhel0")
//     }

   
// }

// class teacher extends person{

//     constructor(name,age,subject){
//   console.log("child")
//          super(name,age)
       
//         this.subject=subject;
      
//     }

  
// }

// // console.log("D")

// let p1=new student("umar",12,12);

// console.log(p1.talk())


//if we amde same name function in child class it override and child will workd

//revise 


// async function getimages() {

//     let url="https://dog.ceo/api/breeds/image/random"

// let res=await axios.get(url);

// let im=document.createElement("img");
// console.log(res.data.message)
// im.setAttribute("src",res.data.message)
// let bod=document.querySelector("div")
// bod.appendChild(im)

// let res1=await axios.get(url);

// let im1=document.createElement("img");
// console.log(res1.data.message)
// im1.setAttribute("src",res1.data.message)
// // let bod=document.querySelector("div")
// bod.appendChild(im1)
    
// }

// getimages()





//Restful Api 



//stand for representation state transfer 

//important 

//rest is architectural syle that defines a set of constraints to be used creating web services 

//mean set of rules to creat web services 

//according to my knowledge in resful api we are making api calls by following some rules 

//in resful we cannot use verbs and prefer nouns eg 

//we can use /posts insted of /see posts

//if we not use this it doesnot cause any error but it is general practiice or rules followed by developers

//to handle CRUD  we use differnt api 

//creat  post

//read   get

//updat   patch to partially update data /put to complete update 

//delete   delete 


//in resfult we follow general practice but it can vary from developer to developer

//in resful we follow a common path to do all needed operation


//websit for practice 

//pratices for rest api design use stack overflow or geekforgreeks


//for uniqe ids in string

//install the package 

//npm install uuid

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); 


//we cannnot send put patch and delete request in html

//we use package called methos override

//npm i method-override

//special thing in action _method=action

// var methodOverride = require('method-override')
// var app = express()
 
// // override with the X-HTTP-Method-Override header in the request
// app.use(methodOverride('X-HTTP-Method-Override'))



//mongo db

//no sql data base means no tables data is not stored in form of tables

//shell

// You checked earlier in services.msc → ✅ it’s running.

//help to see commands

//show dbs to show all data bases


//to use mongb type mongosh and to go bach crt+c two times 

//right quit or exit 

//mongo shell is type of javascript shell and can write javascript commands

//when we open mongo shell mongo db temporarily make database test where we store our data

//the temporariry database is created named as test and it not show in show dbs becuase it is a temporary data base 

//to create our own data base we can write use database name 

//by this command if data base already exist wwe gon inside that and if not it willl create new data base 

//use college it create data bse name college

//but in mongo db a database wil remain temporary untill we store some data inside it 

//to check in which data base we are we simple right command

//db  show current data base name


//in mongo db data is stored in form of documents 

//collection of documents and we called it is collection

//each document store individaul data

//data in document is in form of key value pairs like jsin data and before writing to memory it is converted into bson


//insertion in mongo db 


//show collection   show all the collections of our data base 


//there are many ways of inserting data in mongo db


//db.collectionname.insertOne()  to insert single document and if data base is empty it create collection

//db.collectionname.insertMany()  to insert many document 


//data is stored in form of data base object

//syntax

// db.student.insertOne({name:"umar",age:18,marks:100})


//output


// {
//   acknowledged: true,
//   insertedId: ObjectId('68b26cdf71f32821f3735189')
// }


//mean mongo acknowledged the command and mongodb automaticallyy give some id to the document and we dont need to specify this id by ourself

//and this id is the primary key of the document 


//we can consider one document as single row in sql and id as primary key 


//db.collectionname.find    to see all the data of collections


//and output is in form of array it means different document are stored in form of array 


//collection is collection of different documents and we can consider on document as one row in sql 

//in sql we have to define schema in which we have to defien columns but in mongo db we can one key value pair in one document and other in some other document 

//like sql we dont need to define and scema of table before like in sql

//these thing we have to take notice 

//but generally each collection must have same type of data


//if we want to insert many documents at a time

//then we pass array of document or you can say array of objects

//to clear scrren cls

//to read data of to fetch data in mongo we called it find


//db.collectionname.find()   it return everything collection


//db.collectioname.find({key:value}) if we want ot find all that macth this condition


//return cursor means refrence to original

//means find is just pointing to actual collection not returning


//cursor is help in loop the data and access the single data


//syntax

//  db.student.find({marks:12})

//output


// [
//   {
//     _id: ObjectId('68b26ff371f32821f373518c'),
//     name: 'hussain',
//     age: 80,
//     marks: 12
//   }
// ]

//db.collectioname.findOne({key:value})


//  db.student.findOne({marks:12}) if we wan tone that match this condition


//return first matched value


//return the document 



//we can pass multiple condition like

//we make key value pair in which we provide our neccessary condition


//syntax


// db.student.find({name:"hussain",marks:12})


//output


// [
//   {
//     _id: ObjectId('68b26ff371f32821f373518c'),
//     name: 'hussain',
//     age: 80,
//     marks: 12
//   }
// ]


//operators with find like mathimatical operator and logical operators


//we use $ sign beofre operators


// $eq  means equal to 

// $gt  means greater thans

// $gte  means greater than equal to

// $lt   means less than

// $lte  means less than equal to

// $in   mean value in between 

// $ne   means value not equal to 

// $nin  mean not in 

// $and  like and oprator

// $not like not operator 

// $nor  means logical nor retirn 0 if both true

// $or  work like normal or 


//array relate dmap realted can refer documentation


//db.student.find({marks:{$gt:10}})

//db.student.find({name:{$in:["umar","hassan"]}})

//  db.student.find({$or:[{name:"umar"},{marks:{$gt:10}}]})


//  db.student.find({
// ...   $and: [
// ...     { name: "umar" },
// ...     { age: { $gt: 10 } }
// ...   ]
// ... })
// ...
// [


//update 

//db.colllection.updateOne()

//db.colllection.updateOne(<filter>,<update>,<option>)

//filter mean condition

//uodate mean values

//sometime we pass options

//db.colllection.updateMany()

//it update many students

//db.colllection.replaceOne()

//  db.student.updateOne({name:"umar"},{$set:{marks:20}})

//$set is update operator

//changes exiting fied if not exit make it and set its value


//in repalce it change the whole document 

//  db.student.replaceOne({name:"umar"},{uni:"umt"})


//nesting


//for nesting

// db.student.insertOne({name:"umar",performance:{marks:30,grade:"A"}})

//output

//  {
//     _id: ObjectId('68b27f0171f32821f373518d'),
//     name: 'umar',
//     performance: { marks: 30, grade: 'A' }
//   }


//to accesss this we use dot operator like

// db.student.findOne({"performance.marks":30})
// {
//   _id: ObjectId('68b27f0171f32821f373518d'),
//   name: 'umar',
//   performance: { marks: 30, grade: 'A' }



//delete in db


//db.collectioname.deleteOne(<filter>,<option>)

//delete only one

//db.collectioname.deleteMany(<filter>,<option>)

//delete all matches



// 

//  db.student.deleteMany({marks:{$gt:10}})


//to empty whole collection


//db.collectionname.deleteMany({})

//it is with empty object


//db.dropdatabase();


//moongoose


//it is a library that create connection between mongodb and node.js javascript run time environment

//it is odm (object data modeling) library

//it is npm library

//there more libraries but odm is one of them 

//we using mongoose to create connection and not always want to run mongodb from the shell


//use of mongoos

//if we want scema of of db collection

//complex queris

//install mongoose from npm 

//official documentation is moongoosejs.com


// const mongoose = require("mongoose");

import mongoose from "mongoose";


// await mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
console.log("working")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//connecting to database

// let url = "http://localhost:8080/user"

//http mean which protocol we are using 

//localhost mean loopback addresss

//8080 port number 

//want to connect 

//same for above data base connection

// mongoose.connect("mongodb://127.0.0.1:27017/test")


//schema

//over structure of tabe in sql 

//shape of document withing collection

//schema is acutually blue print

// const userSchema = new mongoose.Schema (

//     {

//         name : String,
//         age : Number,
//         email : String

//     }

// )

//model is a class with which we construct documents 

// const User = mongoose.model("User",userSchema);

//we pass two arguments collection name and second is schema

//generall model and collection name are same 

//show our how our indivial document look

//show collections to show collection

//same name colection si ccreated in mongo shell we pass here like user and in mongo shell it become plural and what we write in capital it become small

//insert data in mongoose


//we have to create objects of model to create documents


//model represent the collection and object represent the document 


// let user1 = new User(
//     {name:"umar",age:19,email:"umar@gmail.com"});
// let user2 = new User({name:"umar",age:19,email:"umar@gmail.com"});
// let user3 = new User({name:"umar",age:19,email:"umar@gmail.com"});


// //save is also a asyncronus function


// user1.save()

// .then((res)=>{

//     console.log(res)
// })

// .catch((e)=>{

// console.log(e)

// });
// user2.save();


//if want to insert many once 


// User.insertMany(

//     [
//         {name:"umar",age:10,email:"umar@gamil.com"},
//         {name:"ali",age:10,email:"umar@gamil.com"},
//         {name:"abbas",age:10,email:"umar@gamil.com"},
//         {name:"hassan",age:10,email:"umar@gamil.com"},
//         {name:"hussain",age:10,email:"umar@gamil.com"},
//     ]
// ).then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e)
// })


//mongoose use opeartion bufferring mean start using your models immediately and dnont wait wait mongodb to establish connection to mogodb


//find operation moongoose 


//model.find()  return us a query object not promise 

//they are not promises but we can use .then function



//to print all users or all documents 

// User.find().then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e);
// })


//bases on condition


// User.find({age:{$gt:10}}).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e);
// })

// User.find({$and:[{name:"umar"},{age:{$gt:10}}]}).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e);
// })


// User.find({age:{$in:[10,50]}}).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e);
// })


//then we can use res as array of object


// User.findOne({name:"umar"})
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{

//     console.log(e)

// })


// User.findOne({$or:[{name:"umar"},{age:{$lt:10}}]})
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{

//     console.log(e)

// })

// User.findOne({$and:[{name:"umar"},{age:{$lt:10}}]})
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{

//     console.log(e)

// })


//find something specifically by id


// User.findById("68b3a975770a3fd2fd362b93")
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{

//     console.log(e)

// })

//update

// User.updateOne({name:"umar"},{name:"umar shah"}).then((res)=>{
//     console.log(res)
// })

// User.updateMany({name:"umar"},{age:23}).then((res)=>{
//     console.log(res)
// })

// User.find().then((res)=>{
//     console.log(res)
// })

//find and update in sinle func

// User.findOneAndUpdate({name:"ali"},{name:"ayesha"},{new:true}).then((res)=>{
//     console.log(res)
// })


//if new true it return update value other wise it return old dcumnent and update in shell in both case


// User.findByIdAndUpdate(("68b3a975770a3fd2fd362b97"),{name:"ayesha"},{new:true}).then((res)=>{
//     console.log(res)
// })

//deleete 


// User.deleteOne({name:"ayesha"}).then((res)=>{
//     console.log(res)
// })


// User.deleteMany({age:{$lt:10}}).then((res)=>{
//     console.log(res)
// })

// User.findByIdAndDelete("68b3a975770a3fd2fd362b98").then((res)=>{
//     console.log(res)
// })

// User.findOneAndDelete({name:"hussain"}).then((res)=>{
//     console.log(res)
// })


//schema Validation


//rules for schema 


// const userSchema = mongoose.Schema(

//     {

//     name:{
//         type:String,
//         required:true

//     },
//     age:{
        
//         type:Number,    //any number in string or muber is acceptable

//     },
//     marks:{
//        type: Number
//     }

//     }
// ) 

// const User = new mongoose.model("student",userSchema);

// let user1 = new User({name:"umar",age:10,marks:100});


// user1.save().then((res)=>{
//     console.log(res)
// })



//schema type optinos 


//all options work during insertion and fails during updation to prevent this we use runValidators:true in update query


// const userSchema = mongoose.Schema(

//     {

//     name:{
//         type:String,
//         required:true,
//         maxlength:[10,"length is too long"]

//     },
//     age:{
        
//         type:Number,    //any number in string or muber is acceptable
//         min:[1,"price is too low"]   //minimum value 

//     },
//     marks:{
//        type: Number
//     }
//     ,
//     discount:{
//         type:Number,
//         default:50
//     },
//     category:{
//         type:String,
//         enum:["umar","abbas"]
//     }

//     }
// ) 


//immutabble if we not want to change constarin in future

//lowercase  convert to lower before store


//in enum we create array an dgive set of values and can enter only that values only one from them


//we can also store array 

// const User = new mongoose.model("student",userSchema);

// let user1 = new User({name:"umarrrrrrrrrr",age:-10,marks:100,category:"umar"});  //wrok for umar and abbas in category and not for other use names becuase of enum


// user1.save().then((res)=>{
//     console.log(res)
// }) .catch((err) => {
//     if (err.name === "ValidationError") {
//       for (let field in err.errors) {
//         console.log(err.errors[field].message);
//       }
//     } else {
//       console.log(err.message); // fallback for other errors
//     }
// })

// User.findByIdAndUpdate("68b4d2484df7f99a4afac2b6",{age:-10},{runValidators:true}).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.errors.age.properties.message)
// })

//if we want to show our custom error if rule not follow or constraint not follow

//we make array of that cosntraint and pass messqge with comma

//in error write 

// console.log(err.errors.age.properties.message)

//age means in field erro others are buit in






//authentication from youtube 

//authentication mean we authenticate the user mean which user can use or access our website 

//there are two patterns of authentication

//stateful and stateless

//stateful mean we are maintaining some data or state on server side 

//stateless mean we are not maintaining any data or state on server side 

//by taking example of parking the parking boy give give ticket number to us and that ticket number is pointing to specfic car which he stored in its own register its example of stateful

//state is some data we map to some other data

//incase of state ful we give username and password and in return server give unique id and keep it track in server

//the unique id is called session unique id or session id 

//when i have to request server i have to show my session id and then our sever send response according to our id


//respnse id is in form of respnse or headers or cookies 


//work flow


//client request server and in between a middle ware which check the id and call the next funtion in between client and server 


//on other the parking boy give us the ticeket with car number own it in this case he donot need to write any data on its regoister its example of stateless

//working of staeful


//we need collection of user so they can login
//makes routes in user.js in routes
//also make controller for user
//then normally use it in index like other routes
//make login and signup if login generate seeion id usuing uuid and then store it using hash map
//then use function to make cookie 
//inspect application cookies to see cookies
//then make middle ware to to restrict
//install cookie parse
//when we restart map become emty and new uid is generated and its fault




//middlewares 

//intermediary between request and response 

//function after the request and before the reponse

//common middleware 

//methodOverride

//bodyparse

//express.static

//express.urlencoded

//.use is used for all requests

//and we can use it for particular request


//properties

//can access req and res object  like req.params ,req,body

//channing is also possible 

//pass control to other middlewares

//can also send response to stop channing 


//what our middlewares do 

//execute any code

//make changes to req,res object

//end the request response cycle

//call next middleware in stack


// const express = require("express");

// const app = express();


// app.use((req,res,next)=>{
  
//   console.log("i m middle ware")

//next()
// })


// app.get("/",(req,res)=>{

//   res.send("home");
// })

// app.get("/random",(req,res)=>{

//   res.send("random");
// })


// app.listen(8080,()=>{
//   console.log("app is listening")
// })


//next is compulsory if middleware not sending any response 



//different type of middle wares

//application level

//router level

//error handling middle with new argument err 

//bulit in middle ware express.static express.urlendcoded

//third party other in form of npm package cookie parser


//middle ware always run irrespective to req if send resquest to wrong path then it middle ware also work in this case 


//good program not write after next and we can also return the next 


//logger used to print useful information on terminal 

//looger middleware


// app.use((req,res,next)=>{
  
//     req.responseTime = new Date();
//  console.log(req.method,req.path,req.hostname,req.ip,req.responseTime)
//  next()
// })


//in app.use callback we can pass middleware function 
//array of middle ware 
//combination of middleware comma seprated
//all above

//if we pass no path it will work for all requests 

//if we pass some path it will work for only that path only 

// app.use((req,res,next)=>{

//     let {token} = req.query;

//     if(token=="umar"){
//         return next()
//     }
//     res.status(404).send("not allowed");
// })


//error handling 

//express default error handler 

//two stages of code

//developement and production stage

//is middle ware function and it is at the end of all middleware function

//can send using throw new error

//error handling is very important express have dfault error handler but we need to make our custom error for our
//  websites 


//error handling 


//error hanlding middleware 


// app.use((err,req,res,next){

//   console.log("error handling middle ware ")
// })


//if it not found any specfic status then it by default set to 500 

//in error handling middle wares the next serach for not error handling middle ware so we have to pass error in next 

//other wise throw error path not found even it exists

//in this case it it actually print the error


//custom error class to show error in better manner 


//two type of status codes 

//from client side its between 400 to 500

//from server also error also happen 


// app.use((err,req,res,next)=>{

//   // console.log("_____________errr____________________")
//   // res.send(err)

//   let {status=500,message="some message"} = err

//   //we are assigning value to status and message if we not throw error it by default set it to 500 and som message 

//   res.status(status).send(message)
// })


//handling async errors 


//app crash in this case because asnc not call next by default and so we have to explitly call next and in next we pass error

//like this 


//  next(new expresserro(400,"not"))

//in mongoose id length also matters

//in case of mongoose if we pass invalid id in findbyid in this case it not throw any error but it pass some inavlid value in the result 

//using try catch 

//different types of error if we search id and it not exist 

//some validation error means rules we define in our model and we can handle these using try catch


//write all code in try and then at end wite catch 

//like

// app.get("/home",async(req,res,next)=>{

//   // next(new expresserro(400,"not"))

//   try{

//     let chat = await user.findById("Sdf");
//   }
//   catch(err){
//     next(err)
//   }
  
// })


//using wrap async a better way of try catch and avoid repitaion

//we made new function and give name wrap async and can give any name and this function return function and argument is also function 


//return function have paramters req,res,next


//syntax of async wrpa function


// function wrapasync(fun){

//   return function(req,res,next){

//     fun(req,res,next).catch((err)=>{
//       console.log(err)
//     })
//   }
// }


//and pass whole call back asunc call back in async wrap


//example



// function asyncWrap(fun){

//   return function(req,res,next){
//     fun(req,res,next).catch((err)=>{
//    next(err)
//     })
//   }
// }


// app.get("/home",asyncWrap(async(req,res,next)=>{

//   // next(new expresserro(400,"not"))


//     let chat = await user.findById("Sdf");
  
 
  
// }))


//this will avoid repetaion of try and catch  and make code efficeint 


//mongoose error 

//by err.name we can find the error name 

//we can perform specfic task by iusing these name


//like this


//  if(err.name=="ReferenceError"){
//     return res.send("coder mistake")
//   }


//we can make function and can also pass in the if condition to solve to particular error 


//validation

//data we are sending is correct 

//two side of validation

//client side and server side validation

//client mean the data we are sending to server must be correct for that we are using form validation mean type or required or all other valid data 


//server side validation mean data is stored according to rules and schema of that data and if any error in case of storing data must be handle efficiently


//form errors may vary form browser to browser to so we use bootsrap error handling pre defined things 


//from now onward we are shfiting towards our airbnb project erorors and other work






















