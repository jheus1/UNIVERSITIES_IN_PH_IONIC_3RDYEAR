import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig7Page } from './pasig7.page';

describe('Pasig7Page', () => {
  let component: Pasig7Page;
  let fixture: ComponentFixture<Pasig7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
