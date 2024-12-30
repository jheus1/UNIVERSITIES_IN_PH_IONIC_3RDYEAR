import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz2Page } from './capiz2.page';

describe('Capiz2Page', () => {
  let component: Capiz2Page;
  let fixture: ComponentFixture<Capiz2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
