import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiquirjorPage } from './siquirjor.page';

describe('SiquirjorPage', () => {
  let component: SiquirjorPage;
  let fixture: ComponentFixture<SiquirjorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiquirjorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
