import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalawanPage } from './palawan.page';

describe('PalawanPage', () => {
  let component: PalawanPage;
  let fixture: ComponentFixture<PalawanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PalawanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
