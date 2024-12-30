import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasayPage } from './pasay.page';

describe('PasayPage', () => {
  let component: PasayPage;
  let fixture: ComponentFixture<PasayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
