import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv6Page } from './negros-ov6.page';

describe('NegrosOv6Page', () => {
  let component: NegrosOv6Page;
  let fixture: ComponentFixture<NegrosOv6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
