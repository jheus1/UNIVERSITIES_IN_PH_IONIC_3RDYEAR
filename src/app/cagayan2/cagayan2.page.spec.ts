import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan2Page } from './cagayan2.page';

describe('Cagayan2Page', () => {
  let component: Cagayan2Page;
  let fixture: ComponentFixture<Cagayan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
