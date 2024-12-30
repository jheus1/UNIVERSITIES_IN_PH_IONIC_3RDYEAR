import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino10Page } from './quirino10.page';

describe('Quirino10Page', () => {
  let component: Quirino10Page;
  let fixture: ComponentFixture<Quirino10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
