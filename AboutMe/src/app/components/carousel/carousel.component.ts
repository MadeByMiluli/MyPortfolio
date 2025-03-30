import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  projectList: Project[] = [];
  constructor(private projectService:ProjectsService){

  }

  ngOnInit(){
    this.getProjects()

  }

  getProjects(){
    this.projectService.getProjects().subscribe(
      {
        next:(list)=>{
          this.projectList =list
          console.log(list)


        }
      }
    )

  }


}
