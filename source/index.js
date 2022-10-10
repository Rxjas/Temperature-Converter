let fahr = document.getElementById('f');
let cel = document.getElementById('c');
let answer = document.getElementById('answer');
let btn = document.getElementById('submit');

let f = fahr.value;
let c = cel.innerHTML;

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

function test(){
  console.log(fahr)
  console.log(c)
}
// ftoc();
// ctof();
btn.addEventListener('click', test);
answer.innerHTML = ans


// I cannot find the answer to the problem I have
// mistyping is my specialty fr
// Who knew that only doing commit without message makes it mess up lmao
// I miss my friends I frr wish we could hangout like we use to; or at least n** would talk to me and say she cannot talk rather than ignoring me when she is going through something
// I seriouasly want to be so much better than I am. And I know it will take time but there is so much wrong I want it to be right ASAp
// I am so sleepy
// The time is 1112 and I want to sleep so ba//
// This is one sleeoi