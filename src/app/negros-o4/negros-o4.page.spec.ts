import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO4Page } from './negros-o4.page';

describe('NegrosO4Page', () => {
  let component: NegrosO4Page;
  let fixture: ComponentFixture<NegrosO4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
