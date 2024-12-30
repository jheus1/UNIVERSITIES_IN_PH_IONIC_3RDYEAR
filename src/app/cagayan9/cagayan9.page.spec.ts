import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan9Page } from './cagayan9.page';

describe('Cagayan9Page', () => {
  let component: Cagayan9Page;
  let fixture: ComponentFixture<Cagayan9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
