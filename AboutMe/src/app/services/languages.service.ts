import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/languages';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {


  private apiUrl="https://myportfolio-0zl4.onrender.com/languages"



   private http= inject(HttpClient);

    getLanguages():Observable<Language[]>{
      return this.http.get<Language[]>(this.apiUrl)

    }
}
