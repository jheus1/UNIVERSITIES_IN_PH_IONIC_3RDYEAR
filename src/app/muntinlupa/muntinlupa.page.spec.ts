import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuntinlupaPage } from './muntinlupa.page';

describe('MuntinlupaPage', () => {
  let component: MuntinlupaPage;
  let fixture: ComponentFixture<MuntinlupaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MuntinlupaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
