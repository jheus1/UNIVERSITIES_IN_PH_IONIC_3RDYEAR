import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO5Page } from './negros-o5.page';

describe('NegrosO5Page', () => {
  let component: NegrosO5Page;
  let fixture: ComponentFixture<NegrosO5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
