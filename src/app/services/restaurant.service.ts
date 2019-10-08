import { Injectable } from '@angular/core';
import { SyncService } from './sync.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private syncService:SyncService) { }


  getRestaurantDetails(id:string|number){
    return this.syncService.get(`restaurant?res_id=${id}`)
  }
}
