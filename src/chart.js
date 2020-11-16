import React from 'react';
import{ LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import mergeData from './mergeData';
import extractPoints from './extractPoints.js';

export default function Chart( {countryData, path1, path2, persist} ) {
  let extractedPoints = {};
  for (let country in countryData) {
  extractedPoints[country] = extractPoints(countryData[country], path1, path2, persist);
  }
  const [countries, plotData] = mergeData(extractedPoints);
    
  const renderLineChart = (
    <LineChart width={600} height={300} data={plotData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      {LineGenerator(countries)}
      <Legend  verticalAlign="top" height={20} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
    return (
      <>
        {renderLineChart}
      </>
    );
  }
// width={80} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}
function LineGenerator(countries) {
  const colors = ['#039dfc', '#de3933', '#2dba40', '#bfbd3f', '#d18843', '#b437c4'];
  let i = -1;
  const lines = countries.map((country)=>{
    i++;
    if (i === colors.length){
      i = 0;
    }
    return <Line type='monotone' dot={null} key={country} dataKey={country} stroke={colors[i]} />
  });
  return lines;
}