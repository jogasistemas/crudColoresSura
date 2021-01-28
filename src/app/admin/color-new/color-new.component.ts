import { Component, OnInit } from '@angular/core';
import Color from '../../models/color.model';
import { Router } from '@angular/router';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-color-new',
  templateUrl: './color-new.component.html',
  styleUrls: ['./color-new.component.css']
})
export class ColorNewComponent implements OnInit {

  color: Color;

  constructor(
    private router: Router,
    private colorService: ColorService

  ) { }

  ngOnInit() {
    this.color = {
      name: '',
      color: '',
      pantone: '',
      year:1990
    };
  }
  onSaveColor(color: Color) {
    this.colorService.createColor(color).subscribe(res => {
      this.router.navigate(['/admin/colors']);
    });
  }
}
