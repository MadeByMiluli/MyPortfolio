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
 @Input() project: Project = {link:'', title_es: '', title_en: '', info_es: '', info_en: '', source: '', language:'' };
 @Input() language: 'es' | 'en' = 'es';
  constructor(private route: Router) {}

  click(link: string) {
    window.open(link, '_blank');
  }


}
