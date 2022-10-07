let fahr = document.querySelector('#f');
let cel = document.querySelector('#c');
let answer = document.querySelector('#answer');
let btn = document.querySelector('#submit');
let f = fahr.value;
let c = cel.value;
let ans = 0;
function ftoc(){
  console.log(f)
 ans = (f - 32);
 ans = (ans * 0.5556);
 console.log(ans);
};
function ctof(){
ans = (c * 1.8);
ans += 32;
console.log('mega hit')
console.log(ans);
};
ftoc();
ctof();
btn.addEventListener('click', ftoc);
answer.innerhtml = ans









