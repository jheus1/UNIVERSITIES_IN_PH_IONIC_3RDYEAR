import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz4Page } from './capiz4.page';

describe('Capiz4Page', () => {
  let component: Capiz4Page;
  let fixture: ComponentFixture<Capiz4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
