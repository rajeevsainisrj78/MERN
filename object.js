// const cart =[
//     {
//         product:"laptop",
//         price:50000,
//         qty:2
//     },
//     {
//         product:"mouse",
//         price:500,
//         qty:3,
//     },
// ];
// const  total=cart.reduce((prev,curr)=>
// {
//     return prev+(curr.qty*curr.price)
// } ,0);
// console.log(total);
//
// 
// const users=[
//     {id:1,name:"rahul"},
//     {id:2,name:"ajay"},
// ];
// const profile=[{userid:1,city:"delhi"}];
// const userwithprofile=users.map((v)=>{
//     let uid=v.id;
//     let uprofile=profile.find((obj)=>obj.userid==uid);
//     if(uprofile){
//         return{...v,city:uprofile.city};
//     }else{
//          return{...v,message:"user does not set city"};
//     }
// });
// console.log(userwithprofile);
// const users=[
//     {name:"ajay", age:25,role:"admin", isActive:true},
//     {name:"rajeev",age:30,role:"user",isActive:true},
//     {name:"kapil",age:25,role:"Developer",isActive:false},
//     {name:"akash",age:40,role:"user",isActive:true},
//     {name:"rizwan",age:45,role:"Developer",isActive:true},
//     {name:"vishal",age:30,role:"user",isActive:false},
//     {name:"banti",age:45,role:"manager",isActive:true},
//     {name:"viaksh",age:40,role:"user",isActive:true}
// ];
// const usersbyage=users.reduce((prev,curr)=>{
//     let age=curr.age;
//     if(!prev[age]){
//         prev[age]=[curr];
//     }else{
//         prev[age].push(curr);
//     }
//     return prev;
// });
// console.log(usersbyage);

// const checkstatus=users.reduce((prev,curr)=>{
// if(curr.isActive){
//     prev["activeusers"]=prev["activeusers"]+1;
//     }else{
//         prev["inactiveusers"]=prev["inactiveusers"]+1;
//     }
//     return prev;
// },
// {activusers:0,inactiveusers:0},
// );
// console.log(checkstatus);

// const usersbyagewithrole=users.reduce((prev,curr)=>
// {
//     const age=curr.age;
//     const role=curr.role;
//     if(!prev[age]){
//         prev[age]={};
//     }
//     if(!prev[age][role]){
//         prev[age][role]=[]
//     }prev[age][role].push(curr);
//     return prev;
// },{});
// console.log(usersbyagewithrole);
//  const question=[
//      {
//          id:1,
//          subject:"js",
//          difficulty:"easy",
//      },
//      {
//      id:2,
//          subject:"js",
//          difficulty:"medium",
//      },
//      {
//          id:3,
//          subject:"react",
//         difficulty:"easy"
//      }
//  ];
// const questionbylevel=question.reduce((prev,curr)=>{
//     let level=curr.difficulty;
//     if(prev[level]){
//         prev[level]=prev[level]+1;
//     }else{
//         prev[level]=1;
//     }
//     return prev;


// },{});
// console.log(questionbylevel);
// const questionbysubject=question.reduce((prev,curr)=>{
//     let name=curr.subject;
//     if(prev[name]){
//         prev[name]=prev[name]+1;
//     }else{
//         prev[name]=1;
//     }
//     return prev;
// },{});
// console.log(questionbysubject);
// const students=[
//     {
//         name:"rahul",
//         lessons:[{completed:true},{completed:true},{completed:false}],
//     },
// ];
// let lessons=students.lessons;
// let chapters=lessons.length;
// let avg=100/chapters;
// let completedchapters=lessons.filter( lessons=>lessons.completed).length;
// let progress=avg*completedchapters;
// console.log(students);

// const p=new Promise((resolve,reject)=>{
//     resolve("json data from server");
//     reject("error from server");
// });
// p.then(console.log).catch(console.log);
// async function abc(){
//     try{
//         let res=await Promise;
//         console.log(res);

//     } catch(error){
//         console.log(error);
//     }
// }
// abc();
const product =[
    {
        id:1,
        stock:10,

    },
    {
      id:2,
      stock:20,
    },
];
const oders=[
    {
        productid:1,
        qty:3

    },
    {
        productid:2,
        qty:5,
    },
];
const updatestock = product.reduce((prev, curr) => {
    let id = curr.id;
        let item=oders.find((oder)=>oder.productid===id);
       if(item){
        prev.push({...curr,stock:curr.stock- item.qty});
       }else{
        prev.push(curr);
       }
       return prev;
    },[]);
    console.log(updatestock);
    // const updatestock=oders.reduce((prev,curr)=>{
    //     let oid=curr.productid;
    //     let qty=curr.qty;
    //     let updeteddata=prev.map((p)=>{
    //         if(p.id===oid){
    //             return{...p,stock:p.stock-qty};
    //         }
    //         return p;


    //     });
    //     return updeteddata;
    // },product);
    // console.log(updatestock);
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 0);
    const p = new Promise((resolve, reject) => {
        resolve("promise resolved");
    });
    p.then((data) => console.log(data))
        .catch((err) => console.log(err))
        .finally(() => console.log("done"));
    console.log("C");
