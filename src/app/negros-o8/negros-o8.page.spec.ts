import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO8Page } from './negros-o8.page';

describe('NegrosO8Page', () => {
  let component: NegrosO8Page;
  let fixture: ComponentFixture<NegrosO8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
