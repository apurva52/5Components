import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-featrures',
  templateUrl: './featrures.component.html',
  styleUrls: ['./featrures.component.css']
})
export class FeatruresComponent implements OnInit {
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
