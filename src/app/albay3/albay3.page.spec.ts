import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay3Page } from './albay3.page';

describe('Albay3Page', () => {
  let component: Albay3Page;
  let fixture: ComponentFixture<Albay3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
