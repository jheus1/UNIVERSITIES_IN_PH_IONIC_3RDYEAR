import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv5Page } from './negros-ov5.page';

describe('NegrosOv5Page', () => {
  let component: NegrosOv5Page;
  let fixture: ComponentFixture<NegrosOv5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
