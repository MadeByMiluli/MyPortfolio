import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project: Project = {link:'', title: '', info: '', source: '', language:'' }; ;
  constructor(private route:Router){}
  click(link:string){
    window.open(link, '_blank')

 }


}
