import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Isabela1Page } from './isabela1.page';

describe('Isabela1Page', () => {
  let component: Isabela1Page;
  let fixture: ComponentFixture<Isabela1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Isabela1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
