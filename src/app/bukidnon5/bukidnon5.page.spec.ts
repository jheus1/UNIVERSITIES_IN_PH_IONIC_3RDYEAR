import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon5Page } from './bukidnon5.page';

describe('Bukidnon5Page', () => {
  let component: Bukidnon5Page;
  let fixture: ComponentFixture<Bukidnon5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
