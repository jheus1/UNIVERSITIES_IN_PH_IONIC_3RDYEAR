import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol1Page } from './bohol1.page';

describe('Bohol1Page', () => {
  let component: Bohol1Page;
  let fixture: ComponentFixture<Bohol1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
