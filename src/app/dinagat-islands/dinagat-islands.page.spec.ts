import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinagatIslandsPage } from './dinagat-islands.page';

describe('DinagatIslandsPage', () => {
  let component: DinagatIslandsPage;
  let fixture: ComponentFixture<DinagatIslandsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DinagatIslandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
