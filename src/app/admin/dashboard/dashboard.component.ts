import { Component } from '@angular/core';
import { ChartType, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cardList: any = [
    {
      label: 'User Count',
      count: 54
    },
    {
      label: 'User Added Today',
      count: 1
    },
    {
      label: 'Approved Users',
      count: 50
    },
    {
      label: 'Approval Pending',
      count: 4
    },
  ];

  barChartType: ChartType = 'bar';
  lineChartType: ChartType = 'line';
  pieChartType: ChartType = 'pie';

  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
  };

  barChartData: ChartData<'bar'> = {
    labels: ['User Count', 'User Added Today', 'Approved Users', 'Approval Pending'],
    datasets: [
      {
        label: 'Users Stats',
        data: [54, 1, 50, 4],
        backgroundColor: ['#f00058', '#4285F4', '#34A853', '#FBBC05']
      },
    ]
  };


  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  pieChartData: ChartData<'pie'> = {
    labels: this.cardList.map((item: any) => item.label),
    datasets: [
      {
        data: this.cardList.map((item: any) => item.count),
        backgroundColor: ['#f00058', '#4285F4', '#34A853', '#FBBC05']
      }
    ]
  };

  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  lineChartData: ChartData<'line'> = {
    labels: this.cardList.map((item: any) => item.label),
    datasets: [
      {
        label: 'User Stats',
        data: this.cardList.map((item: any) => item.count),
        fill: true,
        tension: 0.3,
        borderColor: '#4285F4',
        backgroundColor: 'rgba(66, 133, 244, 0.2)',
        pointBackgroundColor: '#4285F4',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointRadius: 4
      }
    ]
  };


  latestUserData: any = [
    {
      userName: 'Akash',
      email: 'akash@gmail.com',
      mobile: '8989898989',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Mukesh',
      email: 'Mukesh@gmail.com',
      mobile: '6585647859',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Vikash',
      email: 'Vikash@gmail.com',
      mobile: '9874563214',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Aman',
      email: 'Aman@gmail.com',
      mobile: '6857475869',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Meena',
      email: 'Meena@gmail.com',
      mobile: '9898653258',
      status: 'Approved',
      role: 'User'
    }
  ];
}
