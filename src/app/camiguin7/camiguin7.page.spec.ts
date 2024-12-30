import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin7Page } from './camiguin7.page';

describe('Camiguin7Page', () => {
  let component: Camiguin7Page;
  let fixture: ComponentFixture<Camiguin7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
