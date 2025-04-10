import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


 private apiUrl="https://myportfolio-0zl4.onrender.com/projects"



 private http= inject(HttpClient);

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl)

  }
}
