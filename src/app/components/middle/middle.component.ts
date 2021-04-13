import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  @Input() inputprop;
  text: string = ""
  constructor() {

  }

  ngOnInit() {
    console.log("dsbhdshdb");
    this.text = "Text";
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("amamam", this.inputprop);
    this.text = this.inputprop;
  }
}
