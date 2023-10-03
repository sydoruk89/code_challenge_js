const checkVowels = (word)=>{
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i<word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}
const longestWord = (sent)=>{
    const clearSentance = sent.replace(/[^a-zA-Z0-9\s]/g, ''); 
    const words = clearSentance.split(" ")
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
const sent  = "Smart people learn from everything and everyone, average people from their, stupid people already, have all the answers"
console.log(longestWord(sent))