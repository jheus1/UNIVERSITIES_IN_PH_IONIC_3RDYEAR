import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOv3Page } from './negros-ov3.page';

describe('NegrosOv3Page', () => {
  let component: NegrosOv3Page;
  let fixture: ComponentFixture<NegrosOv3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOv3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
