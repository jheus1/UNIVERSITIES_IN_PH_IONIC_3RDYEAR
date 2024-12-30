import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna1Page } from './laguna1.page';

describe('Laguna1Page', () => {
  let component: Laguna1Page;
  let fixture: ComponentFixture<Laguna1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
