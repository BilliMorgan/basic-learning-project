import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This a simply path',
      'https://getsmartratsolutions.com/wp-content/uploads/2021/11/thanksgiving-recipe-ideas.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This a simply path',
      'https://getsmartratsolutions.com/wp-content/uploads/2021/11/thanksgiving-recipe-ideas.jpg'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
}
