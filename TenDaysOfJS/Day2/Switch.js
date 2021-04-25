const result = (str) => {
    switch (str[0]) {
        case String(str[0].match(/[aeiou]/)): return "A"; break;
        case String(str[0].match(/[bcdfg]/)): return "B"; break;
        case String(str[0].match(/[hjklm]/)): return "C"; break;
        case String(str[0].match(/[npqrstvwxyz]/)): return "D"; break;
    }
}

console.log(result("z"));