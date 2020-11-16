export default function extractPoints(data, path1, path2, persist) {
  let day;
  let yValue;
  let points = [];
  let first = true;
    for (let dataPoint of data) {
      day = dataPoint.day;
      yValue = Number(dataPoint[path1][path2]);
      if (yValue === null && (!persist || first)) {
        yValue = 0;
      } else if (persist && !first && (yValue === null || yValue < points[points.length-1][1])) {
        yValue = points[points.length-1][1];
      }
      points.push([day, yValue]);
      if (first) first = false;
    }
    return points;
}
