import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique4Page } from './antique4.page';

describe('Antique4Page', () => {
  let component: Antique4Page;
  let fixture: ComponentFixture<Antique4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
