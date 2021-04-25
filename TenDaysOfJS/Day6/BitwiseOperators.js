function getMaxLessThanK(n, k) {
    const range = [...Array(n + 1).keys()];
    range.shift();
    let max = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            let andValue = range[i] & range[j];
            if (andValue > max && andValue < k) {
                max = andValue;
            }
        }
    }
    return max;
}

function main() {
    const q = 1;

    for (let i = 0; i < q; i++) {
        const [n, k] = [8, 5];

        console.log(getMaxLessThanK(n, k));
    }
}

main();