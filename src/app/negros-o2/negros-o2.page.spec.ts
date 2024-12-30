import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO2Page } from './negros-o2.page';

describe('NegrosO2Page', () => {
  let component: NegrosO2Page;
  let fixture: ComponentFixture<NegrosO2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
