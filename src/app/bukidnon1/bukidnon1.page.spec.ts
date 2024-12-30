import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon1Page } from './bukidnon1.page';

describe('Bukidnon1Page', () => {
  let component: Bukidnon1Page;
  let fixture: ComponentFixture<Bukidnon1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
