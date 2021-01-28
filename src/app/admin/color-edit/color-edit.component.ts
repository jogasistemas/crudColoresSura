import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ColorService } from '../services/color.service';
import Color from '../../models/color.model';

@Component({
  selector: 'app-color-edit',
  templateUrl: './color-edit.component.html',
  styleUrls: ['./color-edit.component.css']
})
export class ColorEditComponent implements OnInit {
 color: Color;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private colorService: ColorService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.colorService.getColorByid(+params.get('id'))
        .subscribe((color: Color) => this.color =  color);
    });
  }

  onSaveColor(color: Color) {
    this.colorService.updateColor(color).subscribe(res => {
      console.log('update : '+ JSON.stringify(color));
      this.router.navigate(['/admin']);
    });
  }

}
