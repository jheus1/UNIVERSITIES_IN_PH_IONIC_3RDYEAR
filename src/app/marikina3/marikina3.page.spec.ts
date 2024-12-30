import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina3Page } from './marikina3.page';

describe('Marikina3Page', () => {
  let component: Marikina3Page;
  let fixture: ComponentFixture<Marikina3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
