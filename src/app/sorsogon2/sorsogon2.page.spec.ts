import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sorsogon2Page } from './sorsogon2.page';

describe('Sorsogon2Page', () => {
  let component: Sorsogon2Page;
  let fixture: ComponentFixture<Sorsogon2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sorsogon2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
