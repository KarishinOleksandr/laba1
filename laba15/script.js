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
let result=39.0625;
let counter=9;
console.log(result);
console.log(counter);

let month = prompt("Введіть число місяця", "Наприклад:'4'");
if (month == 12 ||month ==  1 ||month == 2) {
    alert ("Це зима");
} else if (month == 3||month == 4 ||month == 5) {
    alert("Це весна");
} else if (month == 6 ||month == 7 ||month == 8) {
    alert ("Це літо");
} else if (month == 9 ||month == 10 ||month == 11) {
    alert("Це осінь");
} else {
    alert("Від 1 до 12");
}

let tempurature = prompt("Математика температур", "'Цельсії'");
let vidvid = (9/5)*tempurature + 32
alert(vidvid)

let day = prompt("Жаби тиждня");
if (day == 1) {
    alert("Понеділок");
} else if (day == 2){
    alert("Вівторок");
} else if (day == 3) {
    alert("Середа");
} else if (day == 4) {
    alert("Четвер");
}else if (day == 5) {
    alert("П'ятниця");
}else if (day == 6) {
    alert("Субота");
}else if (day == 7) {
    alert("Неділя");
} else {
    alert("Від 1 до 7");
}