//const 상수를 만드는 키워드 
//상수 : 프로그램네에서 수정할수 는수
const result = document.getElementById("result");
/*
let num =10;
if(num % 2 ==0 ){
    //result.textContent =num+"는 짝수입니다";
    result.textContent =`${num}는 은 짝수입니다`;
}else{
    result.textContent=num+"홀수입니다"
}
*/
let num = prompt("숫자를 입력하세요")
console.log(typeof(num)) //string
num= parseInt(num); //문자를 숫자로 변환

if(num != null){
if(num % 2 ==0 ){
    //result.textContent =num+"는 짝수입니다";
    //백틱은 ``D사용 템플릿 리터컬  변수를 $와 함께 중괄호 ({})사용
    result.textContent =`${num}는 은 짝수입니다`;
}else{
    //result.textContent=num+"홀수입니다"
    result.innerHTML= `${num}은 홀수입니다`;
}else if(isNaN(num)){
    result.textContent= "유효한 숫자를 입력하세요";
}
}else{ //num==null
    result.textContent="입력이 취소되었습니다";
}