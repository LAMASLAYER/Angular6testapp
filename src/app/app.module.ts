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
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/userService';
import {RouterModule, Routes} from '@angular/router';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileUploadModule} from 'ng2-file-upload';


const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'upload', component: PhotoUploadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavbarComponent,
    PhotoUploadComponent
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
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'fleurslesale', upload_preset: 'canh3gtz'}),
    FileUploadModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
