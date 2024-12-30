import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga1Page } from './pampanga1.page';

describe('Pampanga1Page', () => {
  let component: Pampanga1Page;
  let fixture: ComponentFixture<Pampanga1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
