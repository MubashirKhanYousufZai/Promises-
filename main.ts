 import inquirer from "inquirer";
// // PROMISES:

let order = await inquirer.prompt([
    {
        name: "Order",
        message: "Sir what's your order?",
        type: "text"
    }
])

function orderBiryani(){
    return new Promise(   () =>{
        setTimeout(() => {
            console.log("Order placed✔");
        },2000)
    } )
}

function prepareBiryaniProm(){
    return new Promise( (resolve) => {
        setTimeout(  ()  => {
            console.log("Sir your order will be prepared in 5 min😊");
            resolve("")
        },3000)
    })
}

function eat(){
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log("Sir your order is here.🍛");
            console.log("Enjoy your order😊");
            resolve("")
        },10000);
    })
}

orderBiryani().then((prepareBiryaniProm) => {}).then((eat) => {})
prepareBiryaniProm();
eat();
