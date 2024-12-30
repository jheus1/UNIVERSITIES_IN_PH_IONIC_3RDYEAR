import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay9Page } from './albay9.page';

describe('Albay9Page', () => {
  let component: Albay9Page;
  let fixture: ComponentFixture<Albay9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
