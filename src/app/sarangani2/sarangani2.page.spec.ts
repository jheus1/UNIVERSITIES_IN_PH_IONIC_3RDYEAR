import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani2Page } from './sarangani2.page';

describe('Sarangani2Page', () => {
  let component: Sarangani2Page;
  let fixture: ComponentFixture<Sarangani2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
