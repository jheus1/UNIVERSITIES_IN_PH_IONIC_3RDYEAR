import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay7Page } from './albay7.page';

describe('Albay7Page', () => {
  let component: Albay7Page;
  let fixture: ComponentFixture<Albay7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
