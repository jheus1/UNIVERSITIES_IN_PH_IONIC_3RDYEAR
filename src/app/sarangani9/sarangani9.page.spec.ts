import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani9Page } from './sarangani9.page';

describe('Sarangani9Page', () => {
  let component: Sarangani9Page;
  let fixture: ComponentFixture<Sarangani9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
