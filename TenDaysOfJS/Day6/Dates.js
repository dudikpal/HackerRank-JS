
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName;
    // Write your code here     
    dayName = days[new Date(dateString).getDay()];   
    
    return dayName;
}


function main() {
    const d = 2;
    const dates = ["10/11/2009", "11/10/2010"];

    for (let i = 0; i < d; i++) {
        const date = dates[i];
        
        console.log(getDayName(date));
    }
}

main();