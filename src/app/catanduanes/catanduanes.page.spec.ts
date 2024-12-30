import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatanduanesPage } from './catanduanes.page';

describe('CatanduanesPage', () => {
  let component: CatanduanesPage;
  let fixture: ComponentFixture<CatanduanesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatanduanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
