import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz5Page } from './capiz5.page';

describe('Capiz5Page', () => {
  let component: Capiz5Page;
  let fixture: ComponentFixture<Capiz5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
