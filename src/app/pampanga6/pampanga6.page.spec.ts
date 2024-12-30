import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga6Page } from './pampanga6.page';

describe('Pampanga6Page', () => {
  let component: Pampanga6Page;
  let fixture: ComponentFixture<Pampanga6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
