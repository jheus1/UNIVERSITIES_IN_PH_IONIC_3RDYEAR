import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique7Page } from './antique7.page';

describe('Antique7Page', () => {
  let component: Antique7Page;
  let fixture: ComponentFixture<Antique7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
