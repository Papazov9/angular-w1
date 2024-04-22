import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TogglerService } from '../toggler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit{

  isClicked: boolean = false;
  hobbies!: {name: string}[]
  sectionIndex: number = 3;
  toggleSub?: Subscription;

  constructor(private togglingService: TogglerService) {

  }
  

  ngOnInit(): void {
    this.hobbies = [
      {name: 'Football'},
      {name: 'CrossFit'},
      {name: 'Running'},
      {name: 'Cyber Security'}
    ]

    this.toggleSub =  this.togglingService.getCurrentOpenSection().subscribe(index => this.sectionIndex === index ? this.isClicked = true : this.isClicked = false);
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
