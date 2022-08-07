import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComparerPageComponent } from './components/comparer-page/comparer-page.component';
import { SetupComponent } from './components/setup/setup-section/setup.component';
import { ResultsComponent } from './components/results/results.component';
import { SystemsComponent } from './components/setup/systems/systems.component';
import { CandidatesComponent } from './components/setup/candidates/candidates.component';
import { VoterProfilesComponent } from './components/setup/voter-profiles/voter-profiles.component';
import { ProfileMixerComponent } from './components/setup/profile-mixer/profile-mixer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GettingStartedComponent,
    ComparerPageComponent,
    SetupComponent,
    ResultsComponent,
    SystemsComponent,
    CandidatesComponent,
    VoterProfilesComponent,
    ProfileMixerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
