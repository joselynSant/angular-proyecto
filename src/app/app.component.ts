import { NoticiaService } from './services/noticia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lisNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService){

  }

buscadorNoticias(parametros: any) {
this.loading = true;
this._noticiaService.getNoticias(parametros).subscribe(data => {
    this.loading = false;
    this.lisNoticias = [] ;
    this.lisNoticias = data.articles;
  }, error => {
    console.log(error);
    this.loading = false;
  })
}
}
