import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html'
})
export class NoteFormComponent {
  @Input() note: Note = { title: '', description: '', tag: '' };

  constructor(private noteService: NoteService) {}

  onSubmit(): void {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, this.note).subscribe();
    } else {
      this.noteService.createNote(this.note).subscribe();
    }
  }
}
