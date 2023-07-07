import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function LineChart() {
    const [state , setState] = useState({
        series: [{
          
          name: 'Revenue',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        options: {
          chart: {
            foreColor: '#fff',
            zoom: {
              type: 'x',
              enabled: false,
              autoScaleYaxis: true,
            },
            height: 350,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7,
          },
          stroke: {
            width: 5,
            curve: 'smooth',
            
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels: {
              style: {
                fontFamily: 'Bai Jamjuree',
                color: '#fff'
              },
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: 'Revenue',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#fff',
              fontFamily: 'Bai Jamjuree',
              fontWeight: 'normal'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#F44336' , '#E91E63', '#9C27B0'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
        },
      
      })
    
      return (
        <div><ReactApexChart options={state.options} series={state.series} type="line"  height={250}/></div>
      )
    }

export default LineChart