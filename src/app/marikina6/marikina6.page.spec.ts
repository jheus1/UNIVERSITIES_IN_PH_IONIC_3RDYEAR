import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina6Page } from './marikina6.page';

describe('Marikina6Page', () => {
  let component: Marikina6Page;
  let fixture: ComponentFixture<Marikina6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
