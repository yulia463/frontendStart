// let name  = "Vova" ;
// let balance = 90;
// if (name == "админ"){
//     console.log("администратор")
// }
// if(name == "!"){
//     console.log("guest")
// }
// if (balance > 1000){
//     console.log("permanentCustomer")
// }
// if (balance > 5000){
//     console.log("vipCustomer")
// }

//
// let user = "netologist"
//     let orderOwner = "leo_Tolstoy"
// if(user == "admin" || user == orderOwner){
//    console.log("редактирование разрешено ")
// }
// else {
//     console.log("заказ нельзя редактировать ")
// }

//ВАША ЧАСТЬ ПРАВИЛЬНОГО РЕШЕНИЯ
let bonusBalance = 500;
let sum = 3000;
let mount = 2;
let standartMountProsent = 10;
    let increasetProsent = 20;
    let frequentPurchasesProsent = 5 ;
//ВАША ЧАСТЬ ПРАВИЛЬНОГО РЕШЕНИЯ

//ПРАВИЛЬНОЕ РЕШЕНИЕ
let finalProsent = standartMountProsent;
if(bonusBalance > 5000){
    finalProsent = increasetProsent
}
if(mount > 1){
    finalProsent = finalProsent + frequentPurchasesProsent;
}

console.log('Процент от покупки: ', finalProsent)
//ПРАВИЛЬНОЕ РЕШЕНИЕ

// if (sum == "" + mount = 1 ){
//     console.log(standartMountProsent)
// }
// if (sum == "" + mount >= 2 ){
//     console.log (standartMount + frequentPurchases)
// }
// if (bonusBalance > 5000 ){
//     console.log(sum + increasetProsent)
// }
// else if (
//     console.log( sum == "" + mount >= 2 + increasetProsent + frequentPurchasesProsent)
// )


