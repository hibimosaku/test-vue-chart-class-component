import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import { Line } from 'vue-chartjs';


@Component
export class App extends mixins(Vue, Line) {
  private data = {
    labels: [ '8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7' ],
    datasets: [
      {
        label: '最高気温 (℃)',
        data: [ 35, 34, 37, 35, 34, 35, 34, 25 ],
        borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
      {
        label: '最低気温 (℃)',
        data: [ 25, 27, 27, 25, 26, 27, 25, 21 ],
        borderColor: 'rgba(0, 0, 255, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    ],
  };

  private options = {
    title: {
      display: true,
      text: '気温 (8/1 ~ 8/7)',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 40,
            suggestedMin: 0,
            stepSize: 10,
            callback: value => `${value} ℃`,
          },
        },
      ],
    },
  };

  mounted() {
    this.renderChart(this.data, this.options);
  }
};
