import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamisOrientalPage } from './misamis-oriental.page';

describe('MisamisOrientalPage', () => {
  let component: MisamisOrientalPage;
  let fixture: ComponentFixture<MisamisOrientalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisamisOrientalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
