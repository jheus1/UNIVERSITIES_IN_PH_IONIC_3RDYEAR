import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay1Page } from './pasay1.page';

describe('Pasay1Page', () => {
  let component: Pasay1Page;
  let fixture: ComponentFixture<Pasay1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
