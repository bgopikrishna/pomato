import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantCardComponent } from './resturant-card.component';

describe('ResturantCardComponent', () => {
  let component: ResturantCardComponent;
  let fixture: ComponentFixture<ResturantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
