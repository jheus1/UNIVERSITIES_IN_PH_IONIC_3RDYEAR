import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique10Page } from './antique10.page';

describe('Antique10Page', () => {
  let component: Antique10Page;
  let fixture: ComponentFixture<Antique10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
