const result = (s) => {
    try {

        s = s.split("").reverse().join("");
    } catch (e) {
        console.log(e.message);
    } finally {
        return s;
    }
}

//console.log(result("1234"));
console.log(result(Number(1234)));