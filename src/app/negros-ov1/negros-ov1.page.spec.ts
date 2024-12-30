import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv1Page } from './negros-ov1.page';

describe('NegrosOv1Page', () => {
  let component: NegrosOv1Page;
  let fixture: ComponentFixture<NegrosOv1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
