import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay8Page } from './albay8.page';

describe('Albay8Page', () => {
  let component: Albay8Page;
  let fixture: ComponentFixture<Albay8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
