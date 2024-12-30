import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamarPage } from './samar.page';

describe('SamarPage', () => {
  let component: SamarPage;
  let fixture: ComponentFixture<SamarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
