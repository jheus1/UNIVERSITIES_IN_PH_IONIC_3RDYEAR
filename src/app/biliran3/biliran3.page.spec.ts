import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran3Page } from './biliran3.page';

describe('Biliran3Page', () => {
  let component: Biliran3Page;
  let fixture: ComponentFixture<Biliran3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
