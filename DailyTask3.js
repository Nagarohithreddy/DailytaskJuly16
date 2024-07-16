//Multiplication Table using for loop

let n = 5;
for(let i = 1;i <= 10; ++i)
    console.log(n + "*" + i + "=" + n * i);

//Sum of Even Numbers between 1 and 50

let sum = 0
for(i = 1;i <= 50;i++)
{
    if(i%2 === 0)
        sum = sum + i
}
console.log('sum of even numbers between 1 to 50:'+ sum);

//While loop to print prime numbers between 2 to 20

let N = 2
let P
while(N <= 20){
    P = 1
    let Count = 0
    while(P <= N){
        if(N % P == 0){
            Count++
        }
        P++
    }
    if(Count == 2){
        console.log(N+' is a prime number');
    }
    N++
}

//While loop to print odd numbers

let R = 1
let Sum = 0
while(R <= 20){
    if(R % 2 !== 0)
    {
        Sum = Sum + R
    }
    R++
}
console.log('sum of odd numbers between 1 to 20:' +Sum);

//factorial program

let fact = 1
let S = 5
let T = 1
while(T <= S){
    fact = fact*T
    T++
}
console.log('factorial of 5 is:' +fact);