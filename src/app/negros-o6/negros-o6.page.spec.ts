import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO6Page } from './negros-o6.page';

describe('NegrosO6Page', () => {
  let component: NegrosO6Page;
  let fixture: ComponentFixture<NegrosO6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
