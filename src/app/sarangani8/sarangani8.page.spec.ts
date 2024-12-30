import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani8Page } from './sarangani8.page';

describe('Sarangani8Page', () => {
  let component: Sarangani8Page;
  let fixture: ComponentFixture<Sarangani8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
