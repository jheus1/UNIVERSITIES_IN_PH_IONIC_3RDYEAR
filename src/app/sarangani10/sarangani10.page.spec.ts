import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani10Page } from './sarangani10.page';

describe('Sarangani10Page', () => {
  let component: Sarangani10Page;
  let fixture: ComponentFixture<Sarangani10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
