import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  bigTitle: string = ""
  @Input()
  bigSubTitle: string = ""
  @Input()
  bigDescription: string = ""
  constructor() { }

  ngOnInit(): void{

  }
}
