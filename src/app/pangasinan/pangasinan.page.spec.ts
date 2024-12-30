import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PangasinanPage } from './pangasinan.page';

describe('PangasinanPage', () => {
  let component: PangasinanPage;
  let fixture: ComponentFixture<PangasinanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PangasinanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
