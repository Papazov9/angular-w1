import { Component, OnDestroy, OnInit } from '@angular/core';
import { TogglerService } from '../toggler.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specs.component.html',
  styleUrl: './specs.component.css'
})
export class SpecsComponent implements OnInit, OnDestroy{
  skillList!: {skillName: string}[];
  isClicked: boolean = false;
  sectionIndex: number = 4;
  toggleSub?: Subscription;
  
  constructor(private togglingService: TogglerService) {
  
  }
  
  ngOnInit(): void {
    this.skillList = [
      {skillName: 'Java Backend Developer'},
      {skillName: 'JS-Front-end/Angular Developer'},
      {skillName: 'motivated'},
      {skillName: 'quick-witted'}
    ]
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