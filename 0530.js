//0723 나이 출력
function solution(age) {
  // 지금 - 태어난 +1 = 나이
  // 2022 - ? +1 = age
  // 2022 +1 -age = ?
  return 2022 + 1 - age;
}

let age = 40;
console.log(solution(age));
