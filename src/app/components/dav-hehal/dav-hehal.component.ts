import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';



declare var require: any;
@Component({
  selector: 'app-dav-hehal',
  templateUrl: './dav-hehal.component.html',
  styleUrls: ['./dav-hehal.component.css']
})
export class DavHehalComponent implements OnInit {
  items: MenuItem[];
  inputvalue: string;

  constructor(private http: HttpClient, route: ActivatedRoute, private router: Router) {
    //console.log("MULTI", this.du);
  }

  ngOnInit() {


  }
}