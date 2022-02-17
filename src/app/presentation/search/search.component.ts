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

  searchResults: number[] = [];
  specialsImg:string = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
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
      this.mealRepo.searchFood("french").then(
        (response:HomeApiResponse) => {
          this.meals = response.meals;
          this.toggleIsLoading()
          console.log(response.meals)
        }
      )
  }

}
