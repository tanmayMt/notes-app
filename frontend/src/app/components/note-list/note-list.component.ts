import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../../services/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteSvc: NoteService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.noteSvc.getAll().subscribe({
      next: data => (this.notes = data),
      error: err => this.snack.open(`Error: ${err.message}`, 'Close')
    });
  }

  deleteNote(id: number) {
    if (!confirm('Delete this note?')) return;
    this.noteSvc.delete(id).subscribe({
      next: () => {
        this.snack.open('Deleted', 'OK', { duration: 2000 });
        this.fetchNotes();
      },
      error: err => this.snack.open(`Error: ${err.message}`, 'Close')
    });
  }
}
