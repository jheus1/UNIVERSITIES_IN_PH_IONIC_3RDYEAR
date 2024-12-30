import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol8Page } from './bohol8.page';

describe('Bohol8Page', () => {
  let component: Bohol8Page;
  let fixture: ComponentFixture<Bohol8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
