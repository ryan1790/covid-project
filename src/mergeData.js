import compareDates from './compareDates';

export default function mergeData(data) {
    let combinedData = [];
    let [countries, points] = parseData(data);
    let continueLoop = true;
    while (continueLoop) {
        continueLoop = false;
        let newData = {};
        let dates = [];
        for (let dataSet of points) {
            if(dataSet[0]) dates.push(dataSet[0][0]);
        }
        let earliestDay = compareDates(dates);
        let [year, month, day] = earliestDay.split('-');
        newData.date = `${month}/${day}/${year.slice(2)}`;
        let i=0;
        for (let dataSet of points) {
            if (dataSet && earliestDay === dataSet[0][0]) {
                newData[countries[i]] = dataSet[0][1];
                dataSet.splice(0,1);
            } 
            if (dataSet.length > 0) continueLoop = true;
            i++;
        }
        combinedData.push(newData);
    }
    return [countries, combinedData];
}

function parseData(data) {
    let countries = [];
    let points = [];
    for (let country in data) {
        countries.push(country);
        points.push(data[country]);
    }
    return [countries, points];
}