import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SultanKudaratPage } from './sultan-kudarat.page';

describe('SultanKudaratPage', () => {
  let component: SultanKudaratPage;
  let fixture: ComponentFixture<SultanKudaratPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SultanKudaratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
