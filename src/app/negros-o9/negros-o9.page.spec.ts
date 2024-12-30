import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO9Page } from './negros-o9.page';

describe('NegrosO9Page', () => {
  let component: NegrosO9Page;
  let fixture: ComponentFixture<NegrosO9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
