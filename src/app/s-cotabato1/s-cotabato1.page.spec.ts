import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SCotabato1Page } from './s-cotabato1.page';

describe('SCotabato1Page', () => {
  let component: SCotabato1Page;
  let fixture: ComponentFixture<SCotabato1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SCotabato1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
