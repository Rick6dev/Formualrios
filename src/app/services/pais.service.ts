import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/lang/spanish')
      .pipe(
        map((paises: any[]) => paises.map(pais => ({
          nombre: pais.name.common,
          codigo: pais.altSpellings[0],
          img:pais.coatOfArms.png
        }
        
        
        
        )))
      );
  }

}
