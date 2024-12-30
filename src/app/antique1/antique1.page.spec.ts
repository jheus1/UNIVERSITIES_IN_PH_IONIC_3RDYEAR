import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique1Page } from './antique1.page';

describe('Antique1Page', () => {
  let component: Antique1Page;
  let fixture: ComponentFixture<Antique1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
