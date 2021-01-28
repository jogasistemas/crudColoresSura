import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Color from '../../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  readonly API = 'colores';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {

   }

   getAllColors() {
    const url = `${this.BASE_URL}/${this.API}/`;

    return this.http.get(url);
  }
  createColor(color: Color) {
    const url = `${this.BASE_URL}/${this.API}/`;

    return this.http.post(url,color);
  }

  deleteColor(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.delete(url);
  }

  getColorByid(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}/`;

    return this.http.get(url);
  }

  updateColor(color: Color) {
    const url = `${this.BASE_URL}/${this.API}/${color.id}`;

    return this.http.put(url, color);
  }
}
