import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {

  private currentOpenSection = new BehaviorSubject<number | null>(null);
  public currentOpenSection$ = this.currentOpenSection.asObservable();
  constructor() { }

  toggleSection(index: number) {
    if (this.currentOpenSection.getValue() === index) {
      this.currentOpenSection.next(null);
    }else {
      this.currentOpenSection.next(index);
    }
  }

  public getCurrentOpenSection(): Observable<number | null> {
   return this.currentOpenSection.asObservable();
  }
}
