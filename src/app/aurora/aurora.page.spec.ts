import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuroraPage } from './aurora.page';

describe('AuroraPage', () => {
  let component: AuroraPage;
  let fixture: ComponentFixture<AuroraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuroraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
