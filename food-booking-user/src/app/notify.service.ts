import { Injectable } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private notification = new Subject()
  
  constructor() { }

  updateNotification(data){
    this.notification.next(data);
  }

  getNotification(){
    return this.notification.asObservable();
  }
}
