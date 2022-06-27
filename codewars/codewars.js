function disemvowel(str) {
    const res = [];
    for (let i = 0; i < str.length; i++){
        if (
            str[i].toLowerCase() !== 'a' &&
            str[i].toLowerCase() !== 'e' &&
            str[i].toLowerCase() !== 'o' &&
            str[i].toLowerCase() !== 'u' &&
            str[i].toLowerCase() !== 'i'
        ){
            res.push(str[i])
        }
    }
    return res.join('');
}