import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes():Observable< Dish[] > {
    return of( DISHES);
  }
  getDish(id: number):Observable< Dish > {
    return of(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
  
  getDishIds(): Observable<number[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
  
  constructor() { }
}
