import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv7Page } from './negros-ov7.page';

describe('NegrosOv7Page', () => {
  let component: NegrosOv7Page;
  let fixture: ComponentFixture<NegrosOv7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
