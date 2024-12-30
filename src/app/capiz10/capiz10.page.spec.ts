import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz10Page } from './capiz10.page';

describe('Capiz10Page', () => {
  let component: Capiz10Page;
  let fixture: ComponentFixture<Capiz10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
