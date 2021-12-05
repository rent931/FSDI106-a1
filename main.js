
function printName(){
    console.log("Miguel");
}

function sayHello(name){
    if(personalbar.length == 0){
        return;
    }
    console.log("Hello " + name);
}

function sumTwoNumbers(num1, num2){
    let res = num1 + num2;
    return res;
}

function init(){
    console.log("Super cool page");
    printName()
    sayHello("James");
    sayHello("Matt");
    let res = sumTwoNumbers(21,23);
    console.log(res);
    //arryas
    let colors = [];
    colors.push("Red");
    colors.push("Blue");
    colors.push("Green");
    colors.push("Yellow");
    colors.push("Pink");

    console.log(colors[0]);

    //for loop
    for(let i=0; i<colors.length; i++){
        let color = colors[i];
        console.log(color);
    }

    //print numbers
    for(let i = 0; i<=21; i++){
        if(i !=7 && i !=13){
            console.log(i);
        }
         
    }

    let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234, 123897];
    let total= 0;
    for(let i=0; i<numbers.length; i++){
        let num = numbers[i];
        total = total + num;
    }
   
    console.log("The Sum is: " + total);
    


}



window.onload = init;