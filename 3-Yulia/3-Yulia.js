// задание 1
// let product = "Печенье «Юбилейное», 1 кг";
// let inBasket = true;
// let quantity = 5;
// if ( inBasket == true && quantity > 0 ){ добавили знакчение больше нуля
//     console.log(quantity, "x",  product ) спросить про запятые
// }
// // задание 2
// let accountStatus = 'vip';
// let userName = "Yulia";
// let cashbackPercentage ;
// if (accountStatus == "regular" ){
//     cashbackPercentage = "10%"
// }
// if (accountStatus == "extended"){
//     cashbackPercentage = "15%"
// }
//     if(accountStatus == "premium"){
//         cashbackPercentage = "20%"
//     }
// if(accountStatus == "vip"){
//     cashbackPercentage = "30%"
// }
// console.log(userName, accountStatus, "account")
// console.log("Вы получаете" , cashbackPercentage, "с покупок на бонусный счет")
// задача 3
let user = 'Killer2001';
let newOrders = 6;
let errorOrders = 3;
if (user == 'admin') {
    console.log("Привет, админ!/ Проверь нет ли жалоб от пользователей!");
} else {
    console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
}
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
    console.log('В магазине ' + newOrders + ' новых заказов (с ошибкой: ' + errorOrders + ')');
}
if (newOrders === errorOrders) {
    console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
}
