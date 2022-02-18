import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Meal} from "../../data/model/Meal";
import {MealRepository} from "../../data/repository/MealRepository";
import {HomeApiResponse} from "../../data/model/HomeApiResponse";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  isLoading:boolean = false;

  formData!:FormGroup

  searchTerm!:string
  mealRepo:MealRepository

  meals:Meal[] = [];
  

  constructor(mealRepo:MealRepository) {
    this.mealRepo = mealRepo
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      search: new FormControl("")
    })
  }

  private toggleIsLoading(){
    this.isLoading = !this.isLoading
  }

  searchFood(data: any){
      this.toggleIsLoading()
      console.log(data)
      this.mealRepo.searchFood(this.searchTerm).then(
        (response:HomeApiResponse) => {
          this.meals = response.meals;
          this.toggleIsLoading()
          console.log(response.meals)
        }
      )
    
  }

}
