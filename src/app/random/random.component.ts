import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Production } from '../model/production';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public randomBeers:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

 onClickRandomBeers(){
    console.log("random!!")
    this.dataService.getRandomBeers()
    .subscribe(data => this.randomBeers = data)
  } 

}
