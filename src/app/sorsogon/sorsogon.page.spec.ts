import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SorsogonPage } from './sorsogon.page';

describe('SorsogonPage', () => {
  let component: SorsogonPage;
  let fixture: ComponentFixture<SorsogonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SorsogonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
