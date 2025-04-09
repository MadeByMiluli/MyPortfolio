import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesCarousComponent } from './languages-carous.component';

describe('LanguagesCarousComponent', () => {
  let component: LanguagesCarousComponent;
  let fixture: ComponentFixture<LanguagesCarousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesCarousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesCarousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
