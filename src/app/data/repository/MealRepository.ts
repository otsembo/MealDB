import {HomeService} from "../../domain/services/home/home.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MealRepository{

  // service
  homeService:HomeService

  constructor(homeService:HomeService) {
    this.homeService = homeService;
  }

  getRandomFood(){
    return this.homeService.getRandomFood()
  }

  getBanner(){
    return this.homeService.getBannerImg()
  }

  searchFood(query:string){
    return this.homeService.searchFood(query)
  }

}
