import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosO3Page } from './negros-o3.page';

describe('NegrosO3Page', () => {
  let component: NegrosO3Page;
  let fixture: ComponentFixture<NegrosO3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosO3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
