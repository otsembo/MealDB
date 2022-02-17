import { Component, OnInit } from '@angular/core';
import {MealRepository} from "../../data/repository/MealRepository";
import {Meal} from "../../data/model/Meal";
import {HomeApiResponse} from "../../data/model/HomeApiResponse";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //global variables
  bannerImg!:string;
  repo:MealRepository;
  meal!:Meal;

  constructor(repo:MealRepository) {
    this.repo = repo;
  }

  ngOnInit(): void {

    this.bannerImg = this.repo.getBanner()

    this.repo.getRandomFood().then(
      (response:HomeApiResponse) => {
        this.meal = response.meals[0]
      }
    )
  }

}
