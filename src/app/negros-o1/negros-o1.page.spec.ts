import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO1Page } from './negros-o1.page';

describe('NegrosO1Page', () => {
  let component: NegrosO1Page;
  let fixture: ComponentFixture<NegrosO1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
