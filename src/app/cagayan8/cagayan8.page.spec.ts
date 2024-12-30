import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan8Page } from './cagayan8.page';

describe('Cagayan8Page', () => {
  let component: Cagayan8Page;
  let fixture: ComponentFixture<Cagayan8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
