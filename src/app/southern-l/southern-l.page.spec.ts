import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernLPage } from './southern-l.page';

describe('SouthernLPage', () => {
  let component: SouthernLPage;
  let fixture: ComponentFixture<SouthernLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
