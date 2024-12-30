import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani4Page } from './sarangani4.page';

describe('Sarangani4Page', () => {
  let component: Sarangani4Page;
  let fixture: ComponentFixture<Sarangani4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
