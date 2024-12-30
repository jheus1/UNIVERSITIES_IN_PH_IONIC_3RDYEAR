import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU3Page } from './la-u3.page';

describe('LaU3Page', () => {
  let component: LaU3Page;
  let fixture: ComponentFixture<LaU3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
