import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon9Page } from './bukidnon9.page';

describe('Bukidnon9Page', () => {
  let component: Bukidnon9Page;
  let fixture: ComponentFixture<Bukidnon9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
