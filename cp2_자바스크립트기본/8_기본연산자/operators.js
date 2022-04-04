//아래 코드가 실행된 후, 변수 a, b, c, d엔 각각 어떤 값들이 저장될까요?
let a = 1, b = 1;

let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1


//아래 코드가 실행되고 난 후, e와 x엔 각각 어떤 값이 저장될까요?
let e = 2;
let x = 1 + (e *= 2); // e = 4, x = 5


//아래 표현식들의 결과를 예측해 보세요.
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9  " + 5 // " -9 5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2


//아래 코드가 제대로 동작하도록 코드를 수정 해 보세요.
let firstNum = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
let secondNum = Number(prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2));

alert(firstNum + secondNum); // 3