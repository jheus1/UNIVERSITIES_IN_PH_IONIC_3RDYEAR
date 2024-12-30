import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv8Page } from './negros-ov8.page';

describe('NegrosOv8Page', () => {
  let component: NegrosOv8Page;
  let fixture: ComponentFixture<NegrosOv8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
