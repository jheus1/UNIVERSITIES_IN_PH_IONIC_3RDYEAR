import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AklanPage } from './aklan.page';

describe('AklanPage', () => {
  let component: AklanPage;
  let fixture: ComponentFixture<AklanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AklanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
