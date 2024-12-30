import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO7Page } from './negros-o7.page';

describe('NegrosO7Page', () => {
  let component: NegrosO7Page;
  let fixture: ComponentFixture<NegrosO7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
