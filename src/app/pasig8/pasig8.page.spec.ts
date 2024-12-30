import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig8Page } from './pasig8.page';

describe('Pasig8Page', () => {
  let component: Pasig8Page;
  let fixture: ComponentFixture<Pasig8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
