import { Component, HostListener } from '@angular/core';
import { Language } from '../../models/languages';
import { LanguagesService } from '../../services/languages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages-carous',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages-carous.component.html',
  styleUrl: './languages-carous.component.css'
})
export class LanguagesCarousComponent {

  languageList: Language[] = [];
  startIndex = 0;
  itemsPerPage = 1;
  isMobile = false;

  constructor(private languageService: LanguagesService) {}

  ngOnInit() {
    this.getLanguages();
    this.adjustItemsPerPage();
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe({
      next: (response) => {
        this.languageList = response;
      }
    });
  }

  get visibleLanguages(): Language[] {
    return this.isMobile
      ? this.languageList
      : this.languageList.slice(this.startIndex, this.startIndex + this.itemsPerPage);
  }

  nextSlide() {
    if (!this.isMobile && this.startIndex + this.itemsPerPage < this.languageList.length) {
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
      this.itemsPerPage = 4;
    } else if (width > 900) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 1;
    }
  }


}
