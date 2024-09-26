function solution(n) {

  return String (n).split('').map(Number).reduce((a,b)=>a+b,0);
    ;
}

// 문자열로 바꿔주고 split으로 배열 -> map 돌면서 다시 숫자로 -> reduce 하나로 합
