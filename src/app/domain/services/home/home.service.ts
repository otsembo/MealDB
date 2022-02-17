import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomeApiResponse} from "../../../data/model/HomeApiResponse";
import {AppUtil} from "../../../common/constants/app-util";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //util class
  appUtil!:AppUtil;

  constructor(private http: HttpClient) {
    this.appUtil = new AppUtil()
  }

  public getRandomFood(){

    return new Promise<HomeApiResponse>(((resolve, reject) => {

      this.http.get<HomeApiResponse>(this.appUtil.homeAPI).subscribe(
        response => {
          resolve(response)
        },
        error => {
          reject(error)
        }
      )

    }))


  }


  public searchFood(query:string){

    return new Promise<HomeApiResponse>(((resolve, reject) => {

      this.http.get<HomeApiResponse>(this.appUtil.foodSearchAPI+query).subscribe(
        response => {
          resolve(response)
        },
        error => {
          reject(error)
        }
      )

    }))


  }

  public getBannerImg(){
    return this.appUtil.bannerImg;
  }

}
