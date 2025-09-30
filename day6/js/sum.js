//1~5까지 출력하기
const result=document.getElementById("result")
for(let i=1; i<=5;i++){
    console.log(i);
    
    result.innerHTML +=`${i} `
}
//1~5까지의 합계
let sum=0;
for(let i=1; i<=5; i++){
    sum +=i;//sum=sum+i
}
result.innerHTML=`합계:${sum}`;