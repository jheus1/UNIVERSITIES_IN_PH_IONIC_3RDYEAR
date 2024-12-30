import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasbatePage } from './masbate.page';

describe('MasbatePage', () => {
  let component: MasbatePage;
  let fixture: ComponentFixture<MasbatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasbatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
