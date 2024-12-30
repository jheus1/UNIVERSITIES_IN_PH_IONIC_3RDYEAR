import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu8Page } from './cebu8.page';

describe('Cebu8Page', () => {
  let component: Cebu8Page;
  let fixture: ComponentFixture<Cebu8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
