import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoblonPage } from './roblon.page';

describe('RoblonPage', () => {
  let component: RoblonPage;
  let fixture: ComponentFixture<RoblonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoblonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
