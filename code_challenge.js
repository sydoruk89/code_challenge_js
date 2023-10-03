const checkVowels = (word)=>{
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i<word.length; i++){
        if(vowels.includes(word[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
const longestWord = (sent)=>{
    if(!sent){
        return
    }
    const clearSentance = sent.replace(/[^a-zA-Z\s]/g, ''); 
    const words = clearSentance.split(" ")
    if(!words){
        return
    } else if (!words[1]){
        return words[0]
    }
    const sortedWords = words.sort((a,b)=> b.length - a.length);
    if (!(sortedWords[0].length === sortedWords[1].length)){
        return sortedWords[0]
    }
    const longestWords = sortedWords.filter(el=> el.length === sortedWords[0].length)
    longestWords.sort((a,b)=>{
        const vowelsA = checkVowels(a);
        const vowelsB = checkVowels(b);
        return vowelsB - vowelsA;
    })
    return longestWords[0]
}
const sent  = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
// test 1 - "Smart people learn from everything and everyone, average people from their, stupid people already, have all the answers"
// test 2 - "1"
// test 3 - "0"
// test 4 - "," "." "?" "!"
// test 5 - " "
// test 6 - "apple"
// test 7 - "apple1"
// test 8 - "apple,"
// test 9 - "apple_"
// test 10 - "apple, peach"
// test 11 - "apple_peach"
// test 12 - "apple peach"
// test 13 - "APPLE"
// test 14 - "ApPle"
// test 13 - try foreign language
// test 14 - huge text
console.log(longestWord(sent))