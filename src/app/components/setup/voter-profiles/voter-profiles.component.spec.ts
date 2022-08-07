import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterProfilesComponent } from './voter-profiles.component';

describe('VoterProfilesComponent', () => {
  let component: VoterProfilesComponent;
  let fixture: ComponentFixture<VoterProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
