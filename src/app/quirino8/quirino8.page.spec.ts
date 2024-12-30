import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino8Page } from './quirino8.page';

describe('Quirino8Page', () => {
  let component: Quirino8Page;
  let fixture: ComponentFixture<Quirino8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
