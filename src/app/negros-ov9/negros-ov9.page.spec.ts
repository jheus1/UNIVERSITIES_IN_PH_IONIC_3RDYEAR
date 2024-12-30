import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv9Page } from './negros-ov9.page';

describe('NegrosOv9Page', () => {
  let component: NegrosOv9Page;
  let fixture: ComponentFixture<NegrosOv9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
