import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'add', component: NoteFormComponent },
  { path: 'edit/:id', component: NoteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
