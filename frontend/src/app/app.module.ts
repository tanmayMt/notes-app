import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NoteListComponent, NoteFormComponent],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatToolbarModule, MatCardModule,
    MatInputModule, MatButtonModule, MatIconModule, MatListModule,
    MatSnackBarModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
