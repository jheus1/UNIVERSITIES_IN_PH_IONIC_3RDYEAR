import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan5Page } from './aklan5.page';

describe('Aklan5Page', () => {
  let component: Aklan5Page;
  let fixture: ComponentFixture<Aklan5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
