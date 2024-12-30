import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv2Page } from './negros-ov2.page';

describe('NegrosOv2Page', () => {
  let component: NegrosOv2Page;
  let fixture: ComponentFixture<NegrosOv2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
