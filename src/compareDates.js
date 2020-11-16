export default function compareDates(dates){
    let dateList = [...dates];
    for (let date of dates) {
        dateList.push(new Date(date));
    }
    let min = dateList[0];
    for (let date of dateList) {
        if (date < min) {
            min = date;
        }
    }
    return min;
}