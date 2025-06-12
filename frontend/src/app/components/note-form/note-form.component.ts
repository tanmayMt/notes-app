import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;
  isEdit = false;
  noteId!: number;

  constructor(
    private fb: FormBuilder,
    private noteSvc: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      tag: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.noteId = +id;
      this.noteSvc.getOne(this.noteId).subscribe({
        next: note => this.noteForm.patchValue(note)
      });
    }
  }

  submit() {
    const fn = this.isEdit
      ? this.noteSvc.update(this.noteId, this.noteForm.value)
      : this.noteSvc.create(this.noteForm.value);

    fn.subscribe({
      next: () => {
        this.snack.open('Saved!', 'OK', { duration: 2000 });
        this.router.navigate(['/']);
      },
      error: err => this.snack.open(`Error: ${err.message}`, 'Close')
    });
  }
}
