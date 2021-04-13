import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

declare var require: any;

@Component({
  selector: 'app-shortly',
  templateUrl: './shortly.component.html',
  styleUrls: ['./shortly.component.css']
})
export class ShortlyComponent implements OnInit {
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
