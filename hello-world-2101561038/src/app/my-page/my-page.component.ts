import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TogglerService } from '../toggler.service';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css'
})
export class MyPageComponent implements OnInit, OnDestroy{
  about!: {name: string, age: number, birthDate: string}
  isClicked: boolean = false;
  sectionIndex: number = 5;
  toggleSub?: Subscription;
  
  constructor(private togglingService: TogglerService) {
  
  }
  
  ngOnInit(): void {
    this.toggleSub = this.togglingService.getCurrentOpenSection().subscribe(index => this.sectionIndex === index ? this.isClicked = true : this.isClicked = false);
  }
  
  toggleContent() {
    this.togglingService.toggleSection(this.sectionIndex);
  }
  
  ngOnDestroy(): void {
    if (this.toggleSub) {
      this.toggleSub.unsubscribe();
    }
  }
  }