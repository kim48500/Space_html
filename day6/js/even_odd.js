
function getResult(){
    const result =document.getElementById("result");
    let num =document.getElementById("num").value;
    console.log(num);
    
    console.log(typeof(num));//스트링

    if(num ===""||isNaN(num)){
        result.textContent=" 유효한 숫자를 입력하세요"
    }else{
        num= parseInt(num); //숫자로 변환
        if(num %2==0){
            result.textContent =`${num}은  짝수입니다`;
        }else{
           result.textContent =`${num}은  홀수입니다`; 
        }
    }

}