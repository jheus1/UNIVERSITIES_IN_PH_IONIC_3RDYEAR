import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique3Page } from './antique3.page';

describe('Antique3Page', () => {
  let component: Antique3Page;
  let fixture: ComponentFixture<Antique3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
