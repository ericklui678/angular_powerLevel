import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
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
