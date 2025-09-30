//객체접근
const result =document.getElementById("result")
//문자열을 저장할 배열 생성
let arr=["사과","배","포도","바나나"]
console.log(arr);
console.log(arr.length);
//요소
for(let i=0; i<arr.length;i++){
    result.innerHTML+=`${arr[i]}      `
} 
//요소추가
arr[4] ='달기';
    
    //요소추가(push)
    arr.push("건포도");
        result.innerHTML+= `<br> 요소 추가후 ${arr} `;




    //요소 삭제
    arr[1] = undefined;
        result.innerHTML+= `<br> 요소 삭제후 ${arr} `;

  //요소 삭제(splice)
  arr.splice(1,1)
  result.innerHTML+= `<br> 요소 삭제후 ${arr} `;
//인덱싱