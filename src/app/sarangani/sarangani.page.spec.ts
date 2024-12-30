import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaranganiPage } from './sarangani.page';

describe('SaranganiPage', () => {
  let component: SaranganiPage;
  let fixture: ComponentFixture<SaranganiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaranganiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
