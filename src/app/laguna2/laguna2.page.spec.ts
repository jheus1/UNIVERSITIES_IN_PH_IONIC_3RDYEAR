import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna2Page } from './laguna2.page';

describe('Laguna2Page', () => {
  let component: Laguna2Page;
  let fixture: ComponentFixture<Laguna2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
