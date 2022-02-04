import { HttpClient } from '@angular/common/http';

/* import { AppRoutingModule } from '; */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
              + parametros.pais + '&category=' + parametros.categoria + '&apiKey=3fc1932f20f5432688088907bb369d6d'
    return this.http.get(URL);
  }
}

