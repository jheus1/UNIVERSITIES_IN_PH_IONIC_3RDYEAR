import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon7Page } from './bukidnon7.page';

describe('Bukidnon7Page', () => {
  let component: Bukidnon7Page;
  let fixture: ComponentFixture<Bukidnon7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
