import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
 private apiUrl="http://localhost:3000/projects"
=======
 private apiUrl="assets/projects.json"
>>>>>>> Stashed changes
=======
 private apiUrl="assets/projects.json"
>>>>>>> Stashed changes
 private http= inject(HttpClient);

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl)

  }
}
