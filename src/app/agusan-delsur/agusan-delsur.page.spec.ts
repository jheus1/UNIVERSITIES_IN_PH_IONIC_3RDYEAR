import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgusanDelsurPage } from './agusan-delsur.page';

describe('AgusanDelsurPage', () => {
  let component: AgusanDelsurPage;
  let fixture: ComponentFixture<AgusanDelsurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgusanDelsurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
