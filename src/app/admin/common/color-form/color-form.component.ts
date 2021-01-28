import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Color from '../../../models/color.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
  colorForm;
  isLoading: boolean = false;

  @Input() model: Color;
  @Output() completedform: EventEmitter<Color> = new EventEmitter<Color>();
  constructor(private location: Location) { }

  ngOnInit() {

    this.colorForm = new FormGroup({
      name: new FormControl(this.model.name || '', [
        Validators.required
      ]),
      color: new FormControl(this.model.color || '', [
        Validators.required
      ]),
      pantone: new FormControl(this.model.pantone || '', [
        Validators.required, Validators.min(1)
      ]),
      year: new FormControl(this.model.year || '', [
        Validators.required, Validators.min(1990),Validators.max(2021), Validators.pattern(/^([0-9])*$/)
      ])
    });
  }

  onBack() {
    this.location.back();
  }

  onSubmit(e) {
    e.preventDefault();
    const { value, valid } = this.colorForm;
    this.isLoading = true;

    if (valid) {
      if (this.model.id) {
        value.id = this.model.id;
      }

      value.year = parseInt(value.year, 10);

      this.completedform.emit(value);
    }
  }
}
