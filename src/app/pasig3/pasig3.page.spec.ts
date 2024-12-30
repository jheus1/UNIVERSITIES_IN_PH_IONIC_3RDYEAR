import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig3Page } from './pasig3.page';

describe('Pasig3Page', () => {
  let component: Pasig3Page;
  let fixture: ComponentFixture<Pasig3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
