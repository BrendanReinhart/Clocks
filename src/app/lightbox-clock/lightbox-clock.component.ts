import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox-clock',
  templateUrl: './lightbox-clock.component.html',
  styleUrls: ['./lightbox-clock.component.css']
})
export class LightboxClockComponent implements OnInit {
  private now;
  private hours: Number;
  private minutes: Number;
  private seconds: Number;
  private clockCanvas: any;
  height = 400;
  width = 600;
  constructor() { }

  ngOnInit() {
    this.now = new Date();
    this.hours = this.now.getHours();
    this.minutes = this.now.getMinutes();
    this.seconds = this.now.getSeconds();

    setInterval(() => {
      this.now = new Date();
      this.hours = this.now.getHours();
      this.minutes = this.now.getMinutes();
      this.seconds = this.now.getSeconds();
      // console.log('time: ', hours + ':' + minutes, seconds);
      this.drawLightBoxClock(this.hours, this.minutes, this.seconds);
    }, 1000);
  }

  drawLightBoxClock(hour, minute, second) {
    let boxwidth = 100;
    this.clockCanvas = document.getElementById('lightbox-clock');
    let ctx = this.clockCanvas.getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw empty boxes:
    // ctx.beginPath();
    // ctx.strokeStyle = '#000000';
    // ctx.lineWidth = 2;
    // ctx.moveTo(this.width / 2, this.height / 2);
    // ctx.lineTo(minuteX, minuteY);
    // ctx.stroke();

    // Draw past (complete) hours:
    for (let i = 0; i < hour; i++) {
      let xPos = i % 6 || 0;
      let yPos = Math.floor(i / 6);

      ctx.beginPath(); // why isnt this working?
      ctx.fillstyle = "#444444";
      // ctx.lineWidth = 1;
      ctx.rect(2 + 100 * xPos, 2 + 100 * yPos, 97, 97);
      ctx.fill();
      ctx.closePath();
    }
    // Draw the minute boxes inside this hour:


    // Fill the minute box inside this hour:

/*
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
    */

  }

}
