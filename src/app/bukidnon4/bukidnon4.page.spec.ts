import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon4Page } from './bukidnon4.page';

describe('Bukidnon4Page', () => {
  let component: Bukidnon4Page;
  let fixture: ComponentFixture<Bukidnon4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
