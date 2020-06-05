import { Component, OnInit } from '@angular/core';
import { ForexService } from "../forex.service";

@Component({
  selector: 'app-forexapi',
  templateUrl: './forexapi.component.html',
  styleUrls: ['./forexapi.component.css']
})
export class ForexapiComponent implements OnInit {

  public data;
  constructor(private forex: ForexService) {
    console.log('Forex component constructor called');
  }

  ngOnInit(): void {
    this.forex.latestRates().subscribe(data => this.data = data);

    console.log('Data:', this.data)
  }
}
