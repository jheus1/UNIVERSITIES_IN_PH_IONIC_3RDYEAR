import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz8Page } from './capiz8.page';

describe('Capiz8Page', () => {
  let component: Capiz8Page;
  let fixture: ComponentFixture<Capiz8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
