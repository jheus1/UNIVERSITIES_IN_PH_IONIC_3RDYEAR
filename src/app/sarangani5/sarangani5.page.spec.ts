import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani5Page } from './sarangani5.page';

describe('Sarangani5Page', () => {
  let component: Sarangani5Page;
  let fixture: ComponentFixture<Sarangani5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
