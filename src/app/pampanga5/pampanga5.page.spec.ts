import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga5Page } from './pampanga5.page';

describe('Pampanga5Page', () => {
  let component: Pampanga5Page;
  let fixture: ComponentFixture<Pampanga5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
