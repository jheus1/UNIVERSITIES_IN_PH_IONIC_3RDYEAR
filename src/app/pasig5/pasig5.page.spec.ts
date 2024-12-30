import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig5Page } from './pasig5.page';

describe('Pasig5Page', () => {
  let component: Pasig5Page;
  let fixture: ComponentFixture<Pasig5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
