const palindromes = function (word) {
    let wordRevised = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return wordRevised === wordRevised.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
