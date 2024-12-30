import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon3Page } from './bukidnon3.page';

describe('Bukidnon3Page', () => {
  let component: Bukidnon3Page;
  let fixture: ComponentFixture<Bukidnon3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
