import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




export interface User{
  id?:number;
  name?:string;
  age?:number;
}


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getEmployees = ():User[] =>
    [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 1, "name": "Carla", "age": 28},
      {"id": 1, "name": "Thomas", "age": 25},
      {"id": 1, "name": "Andrew", "age": 19}
  
      ];

      /*private _url:string = 'first-project-angular\bakery\src\app\data\employees.json';
      errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
      }
  

      getEmployees(): Observable<User[]>{
        return this.http.get<User[]>(this._url)
        .catch(this.errorHandler);
        
      }
*/
      
} 

