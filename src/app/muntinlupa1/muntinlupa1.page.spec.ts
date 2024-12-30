import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Muntinlupa1Page } from './muntinlupa1.page';

describe('Muntinlupa1Page', () => {
  let component: Muntinlupa1Page;
  let fixture: ComponentFixture<Muntinlupa1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Muntinlupa1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
