function modifyArray(nums) {
    let result = [];
    nums.forEach(num => {
        num % 2 === 0 ? result.push(num * 2) : result.push(num * 3);
    });
    return result;
}


function main() {
    const n = 5;
    const a = [1, 2, 3, 4, 5];

    console.log(modifyArray(a).toString().split(',').join(' '));
}

main();