import { Component, OnInit } from '@angular/core';
import { faCalendar, faDollarSign, faClipboardList, faComments, faDownload, faEllipsisVertical, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    // var myLineChart = new Chart("myAreaChart", {
    //   type: 'line',
    //   data: {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //     datasets: [{
    //       label: "Earnings",
    //       lineTension: 0.3,
    //       backgroundColor: "rgba(78, 115, 223, 0.05)",
    //       borderColor: "rgba(78, 115, 223, 1)",
    //       pointRadius: 3,
    //       pointBackgroundColor: "rgba(78, 115, 223, 1)",
    //       pointBorderColor: "rgba(78, 115, 223, 1)",
    //       pointHoverRadius: 3,
    //       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
    //       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
    //       pointHitRadius: 10,
    //       pointBorderWidth: 2,
    //       data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
    //     }],
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     layout: {
    //       padding: {
    //         left: 10,
    //         right: 25,
    //         top: 25,
    //         bottom: 0
    //       }
    //     },
    //     scales: {
    //       xAxes: [{
    //         time: {
    //           unit: 'date'
    //         },
    //         gridLines: {
    //           display: false,
    //           drawBorder: false
    //         },
    //         ticks: {
    //           maxTicksLimit: 7
    //         }
    //       }],
    //       yAxes: [{
    //         ticks: {
    //           maxTicksLimit: 5,
    //           padding: 10,
    //           // Include a dollar sign in the ticks
    //           callback: function(value, index, values) {
    //             return '$' + number_format(value);
    //           }
    //         },
    //         gridLines: {
    //           color: "rgb(234, 236, 244)",
    //           zeroLineColor: "rgb(234, 236, 244)",
    //           drawBorder: false,
    //           borderDash: [2],
    //           zeroLineBorderDash: [2]
    //         }
    //       }],
    //     },
    //     legend: {
    //       display: false
    //     },
    //     tooltips: {
    //       backgroundColor: "rgb(255,255,255)",
    //       bodyFontColor: "#858796",
    //       titleMarginBottom: 10,
    //       titleFontColor: '#6e707e',
    //       titleFontSize: 14,
    //       borderColor: '#dddfeb',
    //       borderWidth: 1,
    //       xPadding: 15,
    //       yPadding: 15,
    //       displayColors: false,
    //       intersect: false,
    //       mode: 'index',
    //       caretPadding: 10,
    //       callbacks: {
    //         label: function(tooltipItem, chart) {
    //           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
    //           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
    //         }
    //       }
    //     }
    //   }
    // });


    // PieChart
    var myPieChart = new Chart("myPieChart", {
      type: 'doughnut',
      data: {
        labels: ["Direct", "Referral", "Social"],
        datasets: [{
          data: [55, 30, 15],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
          hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  }

  faCalender = faCalendar;
  faDollarSign = faDollarSign;
  faClipboardList = faClipboardList;
  faComments = faComments;
  faDownload = faDownload;
  faEllipsisVertical = faEllipsisVertical;
  faCircle = faCircle;
}
