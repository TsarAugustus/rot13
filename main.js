let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let rotNum = 0;

let returnRot = function(thisString, rot) {
    let thisStringLowercase = thisString.toLowerCase();
    let newString = [];
    for(let stringLettter in thisStringLowercase) {
        let thisLetterPlace = alphabet.indexOf(thisStringLowercase[stringLettter]);
        if((thisLetterPlace + rot) > alphabet.length) {
            let newNum = (thisLetterPlace + rot) - alphabet.length;
            newString.push(alphabet[newNum])
        } else {
            newString.push(alphabet[thisLetterPlace + rot]);
        }   
                
    }
    
    return newString.join('');
}

console.log(returnRot('THERE there', 13));