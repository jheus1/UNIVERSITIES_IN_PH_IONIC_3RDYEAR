import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz9Page } from './capiz9.page';

describe('Capiz9Page', () => {
  let component: Capiz9Page;
  let fixture: ComponentFixture<Capiz9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
