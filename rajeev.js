//console.log("hello word");
// var name="ajay";
// var name="rajeev";
// console.log(name);

let age=15;
age=26;
 age=30;
console.log(age);
// const pi=3.14;
// pi=3.15;
// console.log(pi);
// let name="ajay"
// console.log(name);
// var age=30;
// console.log(age);
// let price=99.99;
// console.log(price);
// let x="ajay";
// console.log(x);
// let y=null;
// console.log(y);
// let bignumber=123456789012345678901234567890n;
// console.log(bignumber);
// let id=Symbol("id");
// console.log(id);
// let x=10;
// x="hello";
// console.log(x);
// let a=10;
// let b=3;
// console.log(a+b);
// console.log(a*b);
//console.log(a**b)
// let x=5;
// x+=5;
// console.log(x);
// let x=10;
// x-=5;
// console.log(x);
//console.log(5!="5");
//console.log(5==="5");
// let isstudent=true;
// let isadult=false;
// console.log(isstudent&& isadult);
// console.log(isstudent || isadult);
// console.log(!isstudent);
// let firstname="ajay";
// let lastname="saini";
// console.log(firstname+" "+ lastname);
// console.log(`${firstname} ${lastname}`);
// let age=18;
// if(age>=18){
//     console.log("ajay saini");
// }else if(age>=13){
//     console.log("rajeev saini")
// }else{
//     console.log("you are a child");

// }
//console.log(age);
// let day="friday"
// switch (day) {
//     case "monday":
//         console.log("start of the week")
//         break;
//         case "friday":
//             console.log("weekend is near");
//             break;
//             case "saturdat":
//             console.log("my name is ajay");
//             break;
//             default:
//                 console.log("it a regular day");
// }
// for(let i=0;i<=5;i++){
//     console.log(i);

// }
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);
// for( let i=0;i<10;i++)
// {
//     if(i===6)break;

// console.log(i);
// }
// for(let i=0;i<10;i++){
//     if(i===6)continue;
//     console.log(i);

// }
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,5));
// const multiply=function(a,b){
//     return a*b;
// }
// console.log(multiply(3,5));
// const square=x=>x*x;
// console.log(square(5));

//console.log(arr.length);
//arr.push(50);
// arr.pop();
// arr. unshift(5);
// arr.shift();a
// console.log(arr);
//console.log(arr[2]);

// arr.splice(2,1,"x");
// console.log(arr);
// arr.forEach((index,value)=>{
//     console.log(index,value);
// });
// let arr1=arr.map(v=>v*2);
// console.log(arr1);
// let even=arr.filter(v=>v%2===0);
// console.log(even);
// let old=arr.filter(v=>v%2!==0);
// console.log(old);
// let sum=arr.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);
// let num=arr.every(v=>v>5);
// console.log(num);

// let some=arr.some(v=>v<0);
// console.log(some);
// let index=arr.indexOf(2);
// console.log(index);
// let found=arr.includes(50);
// console.log(found);
// let found=arr.find(n=>n>25);
// console.log(found);
//arr.sort((a,b)=>a-b);
//arr.sort((a,b)=>b-a);
// let str=arr.join("-")
// arr.toString();
// console.log(str);
//console.log(arr);
// arr.reverse();
// console.log(arr);
// let arr1=arr.slice(2,5);
// console.log(arr1);
//let arr=[10,20,30,40 ,25,35];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// function reversearray(arr){
//     let reversed=[];
// for(let i =arr.length-1;i>=0;i--){
//     reversed.push(arr[i]);
// }
// return reversed;
// };
// console.log(reversearray(arr));
//let arr=[10,20,30,40 ,25,20,10,35];
// let arr2=[69,60,20,30,55];
// function findcommon(arr1,arr2){
//     return arr1.filter(item=>arr2.includes(item));
// }
// console.log(findcommon(arr1,arr2));
// function removeduplicates(arr){
//     return [...new Set(arr)];
// }
// console.log(removeduplicates(arr));
// let person={
// name:"ajay",
// age:18,
// city:"moradabad",
// }
//console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.values(person).length);
// Object.freeze(person);
//console.log(person.hasOwnProperty( "name"));
//console.log(person);
// console.log(person.toString());
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("success"),1000)
// });
// promise.then(console.log).catch(console.error)
// async function fetcdata() {
//     const p=await fetch("")
//     const data=await p.json();
//     if(!data){
//         console.log("data does not exist!");
//         return;
//     }
    

// const result=data.map((obj)=>{
//     return{name:obj.name,city:obj.address.city}
// });
// console.log("total users-",data.length);
// console.log(result);
// }
// fetcdata();
const doctorslist =[
    {
        name:"Dr.sharma",
        specialty:"cardiologist",
        languages:["hindi","English"],
        appointmentsbooked:["2026-06-20","2026-06-22"]
    },
    {
        name:"Dr.patil",
        specialty:"Dermatologist",
        languages:["marthi","hindi"],
        appointmentsbooked:["2026-06-25"]
    },
    {
        name:"Dr.reddy",
        specialty:"pediatrician",
        languages:["Telugu","English"],
        appointmentsbooked:["2026-06-20"]
    },
    {
        name:"Dr.gomez",
        specialty:"dentist",
        languages:["English"],
        appointmentsbooked:["2026-06-20"]
    },
];

    const patientRequirement={
        preferredlanguage:"English",
        bookingdate:["2026-06-20"],
};
const filtereddoctors=doctorslist.filter((obj)=>{
    const planguage=patientRequirement.preferredlanguage;
    const bdate=patientRequirement.bookingdate
    return
    obj.languages.includes(planguage)&&! 
    obj.appointmentsbooked.includes(bdate);
});
console.log(filtereddoctors);
