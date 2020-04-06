import { Component, OnInit } from '@angular/core';
import { sites } from '../sites';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  sites = sites;
  constructor() { }

  ngOnInit() {
  }

}