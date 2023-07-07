import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function SimpleDonut() {
    var colors = ['#F44336', '#E91E63', '#9C27B0']
    const [state , setState] = useState({
       
        series: [44, 55, 41],
        labels: {fontColor:['#fff'],},
            options: {
                colors: colors,
              chart: {
                foreColor: '#fff',
                width: 380,
                type: 'donut',
                
              },
              
              plotOptions: {
                
                pie: {
                  startAngle: -90,
                  endAngle: 270,
                }
              },
              dataLabels: {
                enabled: true,
                show:false,
                style: {
                  colors: ['#fff'],
                  fontWeight:'normal',
                  fontFamily: 'Bai Jamjuree'
                },
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Invoice Statistics',
                style: {
                    fontSize: "16px",
                    color: '#fff',
                    fontWeight: 'normal',
                    fontFamily: 'Bai Jamjuree'
                  }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
      
      })

  return (
    <div><ReactApexChart options={state.options} series={state.series} type="donut" height={250}/></div>
  )
}

export default SimpleDonut