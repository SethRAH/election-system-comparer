import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparerPageComponent } from './comparer-page.component';

describe('ComparerPageComponent', () => {
  let component: ComparerPageComponent;
  let fixture: ComponentFixture<ComparerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
