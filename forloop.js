for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    });
}

let i=0;
while (i < 10) {
    
    if (i === 5) continue;
    console.log(i);
    i++;
}
let j=0;
do{
    console.log(i);
    i++;
}while(i<5);