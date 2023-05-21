let date = new Date()
let time = date.getTime()

alert(date, time)


    var n = Math.floor(Math.random() * 101);
    console.log (n);
    while(true) {
        var x = prompt("Число від 0 до 100");
        if (isNaN(x)) {
            alert("Я Ж СКАЗАВ ЧИСЛО ВІД 0 ДО 100!!!")
            break;
        } else if (x < n) {
            alert("МАло");
        } else if (x > n) {
            alert("Багато");
        }  else {
            alert("Перемога!!");
            break;
        }
    }
