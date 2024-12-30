import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv4Page } from './negros-ov4.page';

describe('NegrosOv4Page', () => {
  let component: NegrosOv4Page;
  let fixture: ComponentFixture<NegrosOv4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
