//객체접근
const result = document.getElementById("result")
//함수정의
function sayHello(){
    result.innerText="안녕";
}
//매개변수 - 이름 입력
function sayHello2(name){
    result.innerText=`안녕~${name}`;
}
//구구단 출력함수 
let display = document.querySelector("#display");
function showGugudan(dan){
    for(let i= 0; i<=9; i++){
        display.innerHTML += `${dan}x${i} = ${dan*i}<br>`;
    }
}
//함수호출
sayHello();
sayHello2("상진");