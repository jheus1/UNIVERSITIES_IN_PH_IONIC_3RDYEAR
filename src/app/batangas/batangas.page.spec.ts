import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatangasPage } from './batangas.page';

describe('BatangasPage', () => {
  let component: BatangasPage;
  let fixture: ComponentFixture<BatangasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BatangasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
