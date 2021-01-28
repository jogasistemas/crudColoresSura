import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input()
  year:number;

  @Input()
  nameColor:string;

  @Input()
  color:string;

  @Input()
  pantone:string;

  @Input()
  id:number;

  @Output() refresh = new EventEmitter<boolean>();

  loading:boolean= false;

  constructor(private colorService:ColorService) { }

  ngOnInit() {
  }

  onDeleteColor(id: number) {
    this.loading=true;
    console.log("#s");
    this.colorService.deleteColor(id).subscribe(res => {
      this.refresh.emit(this.loading);
    });

  }
}
