import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Isabela2Page } from './isabela2.page';

describe('Isabela2Page', () => {
  let component: Isabela2Page;
  let fixture: ComponentFixture<Isabela2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Isabela2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
