import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarinduquePage } from './marinduque.page';

describe('MarinduquePage', () => {
  let component: MarinduquePage;
  let fixture: ComponentFixture<MarinduquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarinduquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
