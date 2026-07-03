// function sum(a, b){
//     return a+b;

// }
// sum=sum(2,5);
// console.log(sum);
// function multiply(a,b){
//     return a*b;

// }
// multiply=multiply(2,5);
// console.log(multiply);
// function sequre(a){
//     return a*a;
// }
// sequre=sequre(5);
// console.log(sequre);
// let marks=50;
// result=marks>70&&marks<=100
// console.log(result);
// let firstnmae="ajay"
// let lastname="saini"
// console.log(firstnmae+" " +lastname);
// var marks=70;
// if(marks>85)
// {
//     console.log("pass");

// }
// else{
//     console.log("fails");
// }
// let age=18;
// let result=age>=20?"ajay":"rajeev";
// console.log(result);
// for(let i=0; i<5; i++)
// {
//     setTimeout((c) => {
//         console.log(i); });
//   } 
// var i=0;
// while(i<10){

//    // if(i===5)break;
// if(i===10)continue;
// console.log(i);
// i++
// }
// var i=0;
// do{
//     console.log(i);
//     i++
// }while(i<5);
//function
// function add(a,b){
//     return a+b;
// }
//console.log(add(10,20));

//function expression
// const multiply=function(a,b)
// {
//     return a*b;
// ;
//     };
//     console.log( multiply(10,20));
//arrow 
// const square=x=>x*x;
// console.log(square(5));

//arr.push(100);
//arr.pop();
//arr.shift();
//arr.unshift(100);
//arr.splice(2,1,"x")
// arr.forEach((v,index)=>{
//     console.log(v,index);
// });
// console.log(arr);
//console.log(arr.indexOf(45));
//console.log(arr.includes(69));
// var newarr=arr.map((v,i)=>v*2);
// console.log(newarr);
// const sum=arr.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

//   var newarr=arr.reduce((prev,curr)=>{
//     if(curr>0){
//         prev.push(curr+10);
//         return prev;

//     }return prev;
//   },[]);
//   console.log(newarr);
// var newarr=arr.map((v)=>".mr"+ " "+v)
// console.log(newarr);
//let arr = [45, 85, 90, 50, 60];
// var newarr = arr.map(v =>{ 
//     if (v > 85) {
//         return ".mr" +" "+ v;
//     } else if (v > 70) {
//         return "hello"+" " + v;
//     }
//     else if (v >50) {
//         return "happy Birthday"+" " + v;
//     }else if(v>45){
//         return "good morning"+" "+v;
//     }else if(v>40){
//         return "good night"+" "+v;
//     }


// });
// console.log(newarr);
//let arr1=arr.sort((a,b)=>a-b)
//let arr1=arr.sort((a,b)=>b-a)
//let str=arr.join("-")
//let str=arr.toString();

// arr.reverse();
// console.log(arr);
//console.log(arr.length);
// let user={
//     name:"ajay",
//     age:18,
//     city:"moradabad",
//     arr:["kapil","riwan","rajeev"]

// }
//console.log(user);
//console.log(Object.keys(user).length);
//console.log(Object.values(user).length);
//delete user.age
//Object.freeze(user);
//console.log(Object.hasOwn(user,"name"));
// console.log(user.hasOwnProperty("lastname"));
// console.log(user);
// let a=[1,2];
// let b=[3,4];
// let c=[...a, ...b];
// console.log(c);
// let x={a:1};
// let y={b:2};
// let z={...x,...y};
// console.log(z);
// let nestedarr=[23,43,[54,65],32,[43,54,[43,90]]];
// function myFlatFun(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if (Array.isArray(arr[i])){
//             result.push(...myFlatFun(arr[i]));
//         }else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(myFlatFun(nestedarr));
// const employees=[
//     {name:"A", salary:20000},
//     {name:"B",salary:50000},
//     {name:"C",salary:40000},
// ];
// const emp=employees.reduce((prev,curr)=>{
//     if (curr.salary>prev.salary){
//         return curr;
//     }return prev;
// },
// {salary:0},
// );
//console.log(emp.name);
// const students=[
//     {
//         name:"ajay",
//         marks:[80,90,70],
//     },
//     {
//         name:"rajeev",
//         marks:[60,70,80]
//     },
// ];
// const res=students.reduce((prev,curr)=>{
//     const total=curr.marks.reduce((prev,curr)=>prev+curr,0);
//     const  avg=total/curr.marks.length;
//     prev.push ({...curr,average:avg});
//     return prev;
// },[]);
// console.log(res);
// let name="ajay";
// let address="moradabad";
// let email="rajeevsaini@7634"

// let user={
//     name,
//     address,
//     email
// }





// console.log(user);
// function sum(a,b){
//     return a+b;
// }
// sum=sum(2,5);
// console.log(sum);
// function multiply(a,b){
//     return a*b;

// }
// multiply=multiply(3,4);
// console.log(multiply);
// function sequre(a){
//     return a*a;
// }
// sequre=sequre(5);
// console.log(sequre);
// let marks=50;
// //result=marks>70 && marks<=100
// result=marks>40|| marks<=100
// console.log(result);
// let firstname ="ajay"
// let lastname="saini"
// console.log(firstname+" "+ lastname);
// var marks=50;
// if(marks>70){
//     console.log("pass");
// }else{


// console.log("flase");
// }
// let age=20;
// let result=age>=18?"ajay":"rajeev"
// console.log(result);
// for(let i=0;i<5;i++){
//     setTimeout((c)=>{
//         console.log(i);
//     }
//     )
// }
//var i=0;
// while(i<10){
//     //if(i===5)break;
//     if(1===5)continue;
//     console.log(i);
//     i++;
// }
// do{
//     console.log(i);
//     i++;
// }while(i<6);
//function
// function add(a,b){
//     return a+b;
// }
// console.log(add(20,20));
// const multiply=function(a,b){
// return a*b;
// }
// console.log(multiply(10,5));
// const sequre=x=>x*x;{
// console.log(sequre(25));
// }
//var Array=[24,45,70,50,80];
//Array.push(100);
//Array.pop();
//Array.shift();
//Array.unshift(200);
//Array.splice(2,1,"x");
// Array.forEach((v,i) => {
//     console.log(v,i);

// });
// console.log(Array);

// Array.forEach((i) => {
//    console.log(Array.indexOf(45)) ;
// });
//var Array = [24, 45, 70, 50, 80];
//console.log(Array.includes(80));
// newarr=Array.map((v,i)=>v*2);
// console.log(newarr);
// const sum=Array.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);
// newarr=Array.reduce((prev,curr)=>{
//     if(curr>0){
//         prev.push(curr+10);
//         return prev;
//     }return prev;
// },[]);
// console.log(newarr);
// var newarr=Array.map((v)=>".mr"+" "+v);
// console.log(newarr);
//var Array = [ 45, 70, 50, 80];
// var newarr = Array.map(v =>{
//     if(v>70){
//         return ".mr"+" "+v;
//     }else if(v>60){
//         return "goog morning"+" "+v;
//     }else if(v>50){
//         return "happy birthday"+" "+v;
//     }else if(v>45){
//         return "good night"+" "+v;
//     }else if(v>30){
//         return "ajay"+" "+v;
//     }
// });
// console.log(newarr);
//let arr1=Array.sort((a,b)=>a-b);
// 
//let str=Array.join("-");
//let str=Array.toString();
// Array.reverse();
// console.log(Array);
// console.log(Array.length);
// let user={
//     name:"ajay",
//     age:20,
//     city:"moradabad",
//     arr:["rajeev","kapil", "akash"],
// }
// console.log(user);
// console.log(Object.keys(user).length);
// console.log(Object.values(user).length);
//delete(user).age
// console.log(user);
// Object.freeze(user);
//console.log(Object.hasOwn(user,"lastname"));
//console.log(user.hasOwnProperty("lastname"));
// let a=[1,2];
// let b=[3,4];
// let c=[...a,...b];
// console.log(c);
// let x={a:2};
// let y={b:4};
// let z={...x,...y};
// console.log(z);
// const employees=[
//     {name:"ajay" ,salary:2000},
//     {name:"rajeev", salary:3000},
//     {name:"kapil", salary:5000}
// ];
// const emp=employees.reduce((prev,curr)=>{
//     if(curr.salary>prev.salary){
//         return curr;
//     }return prev;
// },
// {salary:0},
// );
// console.log(emp.name);
// const students=[
//      {
//          name:"ajay",
//          marks:[80,90,70],
//      },
//      {
//          name:"rajeev",
//          marks:[60,70,80]
//      },
//  ];
//  const result=students.reduce((prev,curr)=>{
//  const total=curr.marks.reduce((prev,curr)=>prev+curr,0);
//  const avg=total/ curr.marks.length;
//  prev.push({...curr,average:avg});
//  return prev;
//   },[]) ;
//   console.log(result);
// let name="ajay";
// let address="moradabad";
// let email="rajeevsaini@4776";
// let users={
//     name,
//     address,
//     email
// }
// console.log(users);
// const cart =[
//     {
//          product:"laptop",
//          price:50000,
//          qty:2
//      },
//       {
//          product:"mouse",
//          price:500,
//          qty:3,
//      },
//  ];
//  const total=cart.reduce((prev,curr)=>{
//     return prev+(curr.qty*curr.price);
//  },0)
//  console.log(total);
 const users=[
     {name:"ajay", age:25,role:"admin", isActive:true},
     {name:"rajeev",age:30,role:"user",isActive:true},
     {name:"kapil",age:25,role:"Developer",isActive:false},
     {name:"akash",age:40,role:"user",isActive:true},
     {name:"rizwan",age:45,role:"Developer",isActive:true},
     {name:"vishal",age:30,role:"user",isActive:false},
     {name:"banti",age:45,role:"manager",isActive:true},
     {name:"viaksh",age:40,role:"user",isActive:true}
 ];
//  const usersbyage=users.reduce((Prev,curr)=>{
//     let age=curr.age;
//     if(!Prev[age]){
//         Prev[age]=[curr];

//     }else{
//         Prev[age].push[curr];
//     }
//     return Prev;
//  });
//  console.log(usersbyage);
 const checkstatus=users.reduce((prev,curr)=>{
 if(curr.isActive){
    prev["activeusers"]=prev["activeusers"]+1;
 }else{
    prev["inactiveusers"]=prev["inactiveusers"]+1;
 }
 return prev;
},
 {activeusers:0,inactiveusers:0},
 );
 console.log(checkstatus);

    
 