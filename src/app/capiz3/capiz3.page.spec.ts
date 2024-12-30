import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz3Page } from './capiz3.page';

describe('Capiz3Page', () => {
  let component: Capiz3Page;
  let fixture: ComponentFixture<Capiz3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
