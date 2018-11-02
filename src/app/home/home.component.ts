import { Component, OnInit } from '@angular/core';
import { Dish } from './../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];
  item: Dish;

  onSelect(dish: Dish) {
    this.item = dish;
  }

  constructor(private dishService: DishService ) { }

  ngOnInit() {
    this.dishes = this.dishService.returnDishes();
  }

          }

