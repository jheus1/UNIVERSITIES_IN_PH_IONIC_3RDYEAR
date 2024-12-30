import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zambales1Page } from './zambales1.page';

describe('Zambales1Page', () => {
  let component: Zambales1Page;
  let fixture: ComponentFixture<Zambales1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Zambales1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
