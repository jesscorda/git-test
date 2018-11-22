import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { visibility } from '../animations/app.animations'

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
  animations: [ visibility() ]
})
export class DishdetailComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;
  visibility = 'shown';
  dishes = DISHES; 
  dish: Dish;
  a={
    author:'',
    rating:'',
    comment:''
  };
  currentTime = new Date();
  dishIds: number[];
  prev: number;
  next: number;

  feedbackForm: FormGroup;

  formErrors = {
    'author': '',
    'rating': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'This field is required.',
      'minlength': 'Must be at least 2 characters long.',
      'maxlength': 'Cannot be more than 25 characters long.'
    },
    'rating': {
      'required': 'Please rate us.'
    },
    'comment': {
      'required': 'This field is required'
      }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
    this.createForm();
     }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        console.log(this.formErrors[field])
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          console.log(messages)
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
              console.log(this.formErrors[field])
            }
          }
        }
      }
    }
  }

  ngOnInit() {
    this.a = this.feedbackForm.value;
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: ['5', [Validators.required ]],
      comment: ['', [Validators.required]],
      
    });

    this.feedbackForm.valueChanges
      .subscribe((data) => {
        this.a=data
        this.onValueChanged(data)
        console.log(data)
      });

    this.onValueChanged();
  
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit() {
 
    this.feedbackForm.reset({
      author: '',
      rating: '',
      comment: ''
    });
    this.feedbackFormDirective.resetForm();
  }
  onClick(){
    

    
  }
}
