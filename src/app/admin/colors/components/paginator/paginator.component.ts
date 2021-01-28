import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() numPaginador = new EventEmitter<number>();
  @Input() positionPag:number;

  numPag:number=0;

  constructor() { }
  
   sigBefore:string= '<';
   sigAfter:string= '>';

  ngOnInit() {
  }

  sendNumPag(event:any){
    if(event.target.id=="before"&&this.numPag>0){
       this.numPag= this.numPag-1;
    }
    if(event.target.id=="after"&&(this.numPag<this.positionPag)){
      console.log(this.numPag+" ddddd "+this.positionPag);
        this.numPag= this.numPag+1;
    }
    console.log("this.numPag "+this.numPag);
    this.numPaginador.emit(this.numPag);
  }
}
