import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/languages';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

<<<<<<< Updated upstream
  private apiUrl="http://localhost:3000/languages"
=======
  private apiUrl="assets/languages.json"
>>>>>>> Stashed changes
   private http= inject(HttpClient);

    getLanguages():Observable<Language[]>{
      return this.http.get<Language[]>(this.apiUrl)

    }
}
