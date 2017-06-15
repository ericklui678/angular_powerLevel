import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerlevel: number = 0;
  powerArr = this.createPowerLevel();
  createPowerLevel(){
    let arr: Array<number> = [];
    for (let i = 0; i < 100; i++){
      arr.push(i+1);
    }
    return arr;
  }
}
