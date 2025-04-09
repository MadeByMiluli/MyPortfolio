import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
import { LanguagesCarousComponent } from "../languages-carous/languages-carous.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CarouselComponent, LanguagesCarousComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  constructor(
    private scroller: ViewportScroller,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {

        setTimeout(() => {
          this.scroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }

}
