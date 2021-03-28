// let month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];

function getMonth(month) {
    let monthNum;
    switch (month) {
        case "JAN": monthNum = 01;
            break;
        case "FEB": monthNum = 02;
            break;
        case "MAR": monthNum = 03;
            break;
        case "APR": monthNum = 04;
            break;
        case "MAY": monthNum = 05;
            break;
        case "JUN": monthNum = 06;
            break;
        case "JUL": monthNum = 07;
            break;
        case "AUG": monthNum = 08;
            break;
        case "SEPT": monthNum = 09;
            break;
        case "OCT": monthNum = 10;
            break;
        case "NOV": monthNum = 11;
            break;
        case "DEC": monthNum = 12;
            break;
    }

    return monthNum

}


function getNextDate(dateStr) {
    let date = dateStr.split("-");
    let day = date[0]
    let month = getMonth(date[1]);
    let year = date[2]

    let newDate = new Date(year, month, day);


    console.log(newDate+1)

}

getNextDate("14-JAN-1982")