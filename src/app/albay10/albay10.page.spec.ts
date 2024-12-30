import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay10Page } from './albay10.page';

describe('Albay10Page', () => {
  let component: Albay10Page;
  let fixture: ComponentFixture<Albay10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
