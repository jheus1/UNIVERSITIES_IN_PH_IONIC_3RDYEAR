import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay1Page } from './albay1.page';

describe('Albay1Page', () => {
  let component: Albay1Page;
  let fixture: ComponentFixture<Albay1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
