import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina1Page } from './marikina1.page';

describe('Marikina1Page', () => {
  let component: Marikina1Page;
  let fixture: ComponentFixture<Marikina1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
