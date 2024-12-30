import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol7Page } from './bohol7.page';

describe('Bohol7Page', () => {
  let component: Bohol7Page;
  let fixture: ComponentFixture<Bohol7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
