import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon8Page } from './bukidnon8.page';

describe('Bukidnon8Page', () => {
  let component: Bukidnon8Page;
  let fixture: ComponentFixture<Bukidnon8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
