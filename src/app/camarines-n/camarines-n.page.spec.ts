import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesNPage } from './camarines-n.page';

describe('CamarinesNPage', () => {
  let component: CamarinesNPage;
  let fixture: ComponentFixture<CamarinesNPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
