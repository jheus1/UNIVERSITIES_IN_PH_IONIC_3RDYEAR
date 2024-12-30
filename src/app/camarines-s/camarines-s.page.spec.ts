import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesSPage } from './camarines-s.page';

describe('CamarinesSPage', () => {
  let component: CamarinesSPage;
  let fixture: ComponentFixture<CamarinesSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
