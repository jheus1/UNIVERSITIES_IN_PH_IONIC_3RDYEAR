import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan7Page } from './cagayan7.page';

describe('Cagayan7Page', () => {
  let component: Cagayan7Page;
  let fixture: ComponentFixture<Cagayan7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
