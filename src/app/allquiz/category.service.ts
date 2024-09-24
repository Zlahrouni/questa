import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  user: { id: number; username: string; } | undefined;
  allCatQuizz: any[] = [];

  constructor(private http: HttpClient) { }


  getAllCategory(){
    return this.http.get<any>('http://localhost:3000/categories');
  }

  getCategoryById(categoryId : number){
    return this.http.get('http://localhost:3000/categories?categories.id=' + categoryId);
  }



}
