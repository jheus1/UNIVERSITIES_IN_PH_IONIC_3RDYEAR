import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BukidnonPage } from './bukidnon.page';

describe('BukidnonPage', () => {
  let component: BukidnonPage;
  let fixture: ComponentFixture<BukidnonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BukidnonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
