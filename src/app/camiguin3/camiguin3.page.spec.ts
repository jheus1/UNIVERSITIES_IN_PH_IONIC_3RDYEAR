import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin3Page } from './camiguin3.page';

describe('Camiguin3Page', () => {
  let component: Camiguin3Page;
  let fixture: ComponentFixture<Camiguin3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
