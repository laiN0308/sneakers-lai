import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-men',
  standalone: true,
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [HttpClientModule]
})
export class MenComponent implements OnInit {
  exercises: any[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseService.getExercises().subscribe((data: any) => {
      this.exercises = data;
    });
  }
}