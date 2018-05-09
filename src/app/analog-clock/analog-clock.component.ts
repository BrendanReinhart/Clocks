import { Component, OnInit } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {

  private now;
  private hours: Number;
  private minutes: Number;
  private seconds: Number;
  private clockCanvas: any;
  private width: number;
  private height: number;
  private sinVals = [];
  private cosVals = [];
  constructor() { }

  ngOnInit() {
    this.width = 250;
    this.height = 250;

    // generate sin and cos arrays:
    for (let i = 0; i <= 120; i++) { // Use 120 specifically as 60 and 24 both divide evenly
      this.sinVals.push(Math.sin((i / 60) * Math.PI));
    }
    for (let i = 0; i <= 120; i++) {
      this.cosVals.push(Math.cos((i / 60) * Math.PI));
    }

    setInterval(() => {
      this.now = new Date();
      this.hours = this.now.getHours();
      this.minutes = this.now.getMinutes();
      this.seconds = this.now.getSeconds();
      // console.log('time: ', hours + ':' + minutes, seconds);
      this.drawClock(this.hours, this.minutes, this.seconds);
    }, 1000);


  }



  drawClock(hours, minutes, seconds) {
    let clockRadius = 120;
    this.clockCanvas = document.getElementById('clock');
    let ctx = this.clockCanvas.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw clock outline:
    ctx.beginPath();
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 2;
    ctx.arc(this.width / 2, this.height / 2, clockRadius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw hours hand:
    let hourHandLength = clockRadius * 0.6;
    let hourX = (this.width / 2) + ((hourHandLength) * this.sinVals[2 * hours]);
    let hourY = (this.height / 2) - ((hourHandLength) * this.cosVals[2 * hours]);
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.moveTo(this.width / 2, this.height / 2);
    ctx.lineTo(hourX, hourY);
    ctx.stroke();

    // Draw minutes hand:
    let minuteHandLength = clockRadius * 0.85;
    let minuteX = (this.width / 2) + ((minuteHandLength) * this.sinVals[2 * minutes]);
    let minuteY = (this.height / 2) - ((minuteHandLength) * this.cosVals[2 * minutes]);
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.moveTo(this.width / 2, this.height / 2);
    ctx.lineTo(minuteX, minuteY);
    ctx.stroke();

    // Draw seconds hand:
    let secondHandLength = clockRadius * 0.9;
    let secondX = (this.width / 2) + ((secondHandLength) * this.sinVals[2 * seconds]); // Use every second value in arrays for length 120
    let secondY = (this.height / 2) - ((secondHandLength) * this.cosVals[2 * seconds]); // minus here due to y-orientation of canvas
    ctx.beginPath();
    ctx.strokeStyle = '#bb0000';
    ctx.lineWidth = 1;
    ctx.moveTo(this.width / 2, this.height / 2);
    ctx.lineTo(secondX, secondY);
    ctx.stroke();

  }

}
