import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySliderComponent } from './entry-slider.component';

describe('EntrySliderComponent', () => {
  let component: EntrySliderComponent;
  let fixture: ComponentFixture<EntrySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntrySliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
