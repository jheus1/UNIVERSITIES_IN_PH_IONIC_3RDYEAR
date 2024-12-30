import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrientalMPage } from './oriental-m.page';

describe('OrientalMPage', () => {
  let component: OrientalMPage;
  let fixture: ComponentFixture<OrientalMPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrientalMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
