import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon10Page } from './bukidnon10.page';

describe('Bukidnon10Page', () => {
  let component: Bukidnon10Page;
  let fixture: ComponentFixture<Bukidnon10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
