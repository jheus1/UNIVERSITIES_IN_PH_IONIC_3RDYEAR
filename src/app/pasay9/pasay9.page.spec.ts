import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay9Page } from './pasay9.page';

describe('Pasay9Page', () => {
  let component: Pasay9Page;
  let fixture: ComponentFixture<Pasay9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
