import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique9Page } from './antique9.page';

describe('Antique9Page', () => {
  let component: Antique9Page;
  let fixture: ComponentFixture<Antique9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
