import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import Color from '../../models/color.model';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  allColors:Color[];
  colors:Color[];
  numPag:number = 0;
  flagDelete:boolean=false;
  auxPag:number;

  constructor( private colorService: ColorService) { }

  ngOnInit() {

    this.colorService.getAllColors().subscribe((colors:Color[]) => {
      this.allColors = colors;
      console.log(this.allColors);
      this.showColors(this.numPag);
    });

  }
  showColors(pag: number){
    
    let amountPag = this.allColors.length/9;
    let modulo = this.allColors.length%9;
    console.log("auxPag "+this.auxPag+"amountPag "+amountPag+" aa "+ pag+" this.flagDelete "+this.flagDelete);
    if(modulo==0&&this.flagDelete)
    {
      this.auxPag=this.auxPag-1;
    }
    if(Number.isInteger(pag))
    {
      this.auxPag=pag;
    }
    console.log("auxPag "+this.auxPag+"amountPag "+amountPag+" aa "+ pag);
    if((this.allColors.length>=9)&&(amountPag>=this.auxPag)){
      let start = (this.auxPag+1)*9-9;
      this.colors=[...this.allColors].slice(start,start+9);
      console.log('1');
    }else if((this.allColors.length>9)&&(modulo>0)&&(amountPag>this.auxPag)&&(this.auxPag!=0)){
    
      let start = (this.auxPag+1)*8+modulo-1;
      this.colors=[...this.allColors].slice(start,start+modulo);
      console.log('2');
      this.flagDelete=false;
    }
    if(this.allColors.length<9){
      this.colors=[...this.allColors].slice(0,modulo);
      console.log('3');
    }
    console.log(this.colors);
    this.numPag=amountPag-1;
}
refresh(loading:boolean){
 this.flagDelete=true;
  if(loading){
    this.colorService.getAllColors().subscribe((colors:Color[]) => {
      this.allColors = colors;
      this.showColors(this.numPag);
    });
  }
}

}
