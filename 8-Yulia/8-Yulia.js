// Вы: Привет! Мисс Марпл: Здорово, коль не шутишь!
// let messenger = [];
// messenger.push("Я принесла тебе утренний чай. Обычно ты еще спишь.");
// messenger.push("Вы приносите мне чай по утрам?");
// messenger.push("А ты как думаешь, откуда он берётся?");
// messenger.push("Не знаю. Я думал, это само собой разумеющееся.");
// // for (let i = 0; i < messenger.length; i++) {
// //     if (i % 2 === 0) {
// //         console.log(" бабка: " + messenger[i]);
// //     } else {
// //         console.log(" я: " + messenger[i]);
// //     }
// // }
// let word = "чай";
// for (let i = 0; i < messenger.length; i++) {
//     if (messenger[i].includes(word)) {
//         console.log(messenger[i])
//     }
// }
// console.log(messenger[1].includes(word))
let messengers = [];
messengers.push(["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."])
messengers.push(["zloy-zloy", "У Алеши завтра День рождения."]);
messengers.push(["zloy-zloy", "Он мой дед. Ему будет 81 год."]);
messengers.push(["Вы", "LOL."]);
for(let i = 0; i<messengers.length; i++){
    console.log(messengers[i][0] + messengers[i][1])

}