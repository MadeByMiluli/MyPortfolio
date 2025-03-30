import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  constructor(private router: Router) {}

  navigateToSection() {
    this.router.navigate(['/start'], { fragment: 'intro' });
  }

  }


