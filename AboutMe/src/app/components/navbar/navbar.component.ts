import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from '../../models/languages';
import{ EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 @Output() languageChange = new EventEmitter<'es' | 'en'>();
  constructor(private router: Router) {}

  language: 'es' | 'en' = 'es';
  ngOnInit() {this.language = 'es';
    this.languageChange.emit(this.language);}

  goToSection(sectionId: string) {
    this.router.navigate([''], { fragment: sectionId });
  }
 toggleLanguage() {
    this.language = this.language === 'es' ? 'en' : 'es';
    this.languageChange.emit(this.language);
    console.log('Idioma cambiado a:', this.language);
  }
}
