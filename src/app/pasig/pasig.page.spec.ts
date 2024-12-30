import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasigPage } from './pasig.page';

describe('PasigPage', () => {
  let component: PasigPage;
  let fixture: ComponentFixture<PasigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
