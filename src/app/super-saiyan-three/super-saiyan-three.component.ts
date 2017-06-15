import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() powerlevel;
  boolArr: Array<boolean> = [false, false, false];
  ngOnChanges(){
    if (this.powerlevel === 50000) {
      this.boolArr = [true, false, false];
    }
    else if (this.powerlevel > 20000) {
      this.boolArr = [false, true, false];
    }
    else if (this.powerlevel > 9000) {
      this.boolArr = [false, false, true];
    }
    return;
  }
  constructor() { }

  ngOnInit() {
  }

}
