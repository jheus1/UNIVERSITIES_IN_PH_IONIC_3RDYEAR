import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay3Page } from './pasay3.page';

describe('Pasay3Page', () => {
  let component: Pasay3Page;
  let fixture: ComponentFixture<Pasay3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
