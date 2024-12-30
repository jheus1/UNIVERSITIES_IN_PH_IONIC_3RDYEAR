import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique5Page } from './antique5.page';

describe('Antique5Page', () => {
  let component: Antique5Page;
  let fixture: ComponentFixture<Antique5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
