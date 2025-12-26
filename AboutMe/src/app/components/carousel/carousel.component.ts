import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
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
  startIndex = 0;
  itemsPerPage = 1
  isMobile = false;
  @Input() language: 'es' | 'en' = 'es';

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
    this.adjustItemsPerPage();
  }

  getProjects() {
    this.projectService.getProjects().subscribe({
      next: (list) => {
        this.projectList = list;
      }
    });
  }

  get visibleProjects(): Project[] {
    return this.isMobile
      ? this.projectList
      : this.projectList.slice(this.startIndex, this.startIndex + this.itemsPerPage);
  }

  nextSlide() {
    if (!this.isMobile && this.startIndex + this.itemsPerPage < this.projectList.length) {
      this.startIndex++;
    }
  }

  prevSlide() {
    if (!this.isMobile && this.startIndex > 0) {
      this.startIndex--;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustItemsPerPage();
  }

  adjustItemsPerPage() {
    const width = window.innerWidth;
    this.isMobile = width <= 768;

    if (width > 1200) {
      this.itemsPerPage = 2;
    } else if (width > 900) {
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 1;
    }
  }
}
