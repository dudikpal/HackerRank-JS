function getCount(objects) {
    let counter = 0;
    objects.forEach(obj => {
        counter += objProcesser(obj);
    });
    return counter;
}

const objProcesser = (obj) => {
    if (obj.x === obj.y) {
        //console.log(obj);
        return 1;
    }
    return 0;
}

const objects = [
    {x: 1, y: 1},
    {x: 1, y: 2},
    {x: 2, y: 2},
    {x: 3, y: 2}

];

console.log(getCount(objects));