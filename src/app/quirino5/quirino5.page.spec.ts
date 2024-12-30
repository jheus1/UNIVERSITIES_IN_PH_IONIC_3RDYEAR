import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino5Page } from './quirino5.page';

describe('Quirino5Page', () => {
  let component: Quirino5Page;
  let fixture: ComponentFixture<Quirino5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
