import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bukidnon2Page } from './bukidnon2.page';

describe('Bukidnon2Page', () => {
  let component: Bukidnon2Page;
  let fixture: ComponentFixture<Bukidnon2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bukidnon2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
