import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html'
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(data => this.notes = data);
  }

  // deleteNote(id: number): void {
  //   this.noteService.deleteNote(id).subscribe(() => this.getNotes());
  // }
  deleteNote(id: number | undefined): void {
  if (id === undefined) return;
  this.noteService.deleteNote(id).subscribe(() => this.getNotes());
}
}
