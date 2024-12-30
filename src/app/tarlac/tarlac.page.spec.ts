import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarlacPage } from './tarlac.page';

describe('TarlacPage', () => {
  let component: TarlacPage;
  let fixture: ComponentFixture<TarlacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarlacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
