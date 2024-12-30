import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv10Page } from './negros-ov10.page';

describe('NegrosOv10Page', () => {
  let component: NegrosOv10Page;
  let fixture: ComponentFixture<NegrosOv10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
