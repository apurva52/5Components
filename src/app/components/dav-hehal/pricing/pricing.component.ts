import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  @Input() inputprop;
  text: string = ""
  constructor() {

  }

  ngOnInit() {
    console.log("dsbhdshdb");
    this.text = "Text";
  }
  ngOnChanges(changes: SimpleChanges) {
    this.text = this.inputprop;
  }

}
