import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuezonPage } from './quezon.page';

describe('QuezonPage', () => {
  let component: QuezonPage;
  let fixture: ComponentFixture<QuezonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuezonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
