import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zambales10Page } from './zambales10.page';

describe('Zambales10Page', () => {
  let component: Zambales10Page;
  let fixture: ComponentFixture<Zambales10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Zambales10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
