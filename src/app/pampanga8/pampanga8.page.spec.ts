import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga8Page } from './pampanga8.page';

describe('Pampanga8Page', () => {
  let component: Pampanga8Page;
  let fixture: ComponentFixture<Pampanga8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
