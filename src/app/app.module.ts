import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PhraseInputFormComponent } from './components/phrase-input-form/phrase-input-form.component';


@NgModule({
  declarations: [
    AppComponent ,
    FileUploadComponent,
    PhraseInputFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
