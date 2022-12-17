import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit { 
  @Input()
  photo: string = ""
  @Input()
  smallTitle: string = ""
  @Input()
  smallDescription1: string = ""
  @Input()
  smallDescription2: string = ""
  @Input()
  smallDescription3: string = ""
  constructor() { }

  ngOnInit(): void{

  }
}
