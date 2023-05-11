"use strict" 
 
let i=0; 
while (i<=100){ 
    document.open(); 
    document.write(i); 
    document.close(); 
    i++; 
} 
 
let m=0; 
do { 
    console.log(m) 
    m++; 
} while (m<=10); 
 
for (let n=10000; n>50; n=n/2) { 
    console.log(n); 
}