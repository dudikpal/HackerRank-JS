const result = (a) => {
    if (a > 0) {
        console.log("YES");
    } else if (a === 0) {
        console.error("Zero Error");
    } else {
        console.error("Negative Error");
    }
}

result(4);
result(0);
result(-4);