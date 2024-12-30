import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal3Page } from './rizal3.page';

describe('Rizal3Page', () => {
  let component: Rizal3Page;
  let fixture: ComponentFixture<Rizal3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
