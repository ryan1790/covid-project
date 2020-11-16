import React from 'react';
import{ LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function Chart( {countryData} ) {
  let dates = [];
  let deaths = [];
  console.log(countryData);
  for (let country in countryData) {
    let day;
    let day_deaths;
    for (let dataPoint of countryData[country]) {
      day = dataPoint.day;
      day_deaths = Number(dataPoint.deaths.new);
      if (day_deaths === null) {
        day_deaths = 0;
      }
      dates.push(day);
      deaths.push(day_deaths);
      }
    }
  let data = [];
  for (let i = 0; i < dates.length; i++) {
    data.push({date: dates[i], deaths: deaths[i]});
  }
    
  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="deaths" stroke="#8884d8" />
      <Legend width={80} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

    return (
      renderLineChart
    );
  }