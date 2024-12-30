import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani3Page } from './sarangani3.page';

describe('Sarangani3Page', () => {
  let component: Sarangani3Page;
  let fixture: ComponentFixture<Sarangani3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
