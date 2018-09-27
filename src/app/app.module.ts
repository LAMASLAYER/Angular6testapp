import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashComponent } from './dash/dash.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/userService';
import {RouterModule, Routes} from '@angular/router';
import { FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  { path: 'dash', component: DashComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FileUploadModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
