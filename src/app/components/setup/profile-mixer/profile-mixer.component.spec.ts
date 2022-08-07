import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMixerComponent } from './profile-mixer.component';

describe('ProfileMixerComponent', () => {
  let component: ProfileMixerComponent;
  let fixture: ComponentFixture<ProfileMixerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMixerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
