import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LagunaPage } from './laguna.page';

describe('LagunaPage', () => {
  let component: LagunaPage;
  let fixture: ComponentFixture<LagunaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LagunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
