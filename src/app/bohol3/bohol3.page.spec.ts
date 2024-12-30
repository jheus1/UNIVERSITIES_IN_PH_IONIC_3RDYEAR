import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol3Page } from './bohol3.page';

describe('Bohol3Page', () => {
  let component: Bohol3Page;
  let fixture: ComponentFixture<Bohol3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
