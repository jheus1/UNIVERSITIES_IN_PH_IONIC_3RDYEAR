import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino9Page } from './quirino9.page';

describe('Quirino9Page', () => {
  let component: Quirino9Page;
  let fixture: ComponentFixture<Quirino9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
