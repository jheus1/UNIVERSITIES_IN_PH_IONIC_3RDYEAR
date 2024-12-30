import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga3Page } from './pampanga3.page';

describe('Pampanga3Page', () => {
  let component: Pampanga3Page;
  let fixture: ComponentFixture<Pampanga3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
