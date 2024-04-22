import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TogglerService } from '../toggler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy{
about!: {name: string, age: number, birthDate: string}
isClicked: boolean = false;
sectionIndex: number = 1;
toggleSub?: Subscription;

constructor(private togglingService: TogglerService) {

}

ngOnInit(): void {
  this.about = {
    name: "Blagovest Papazov",
    age: 21,
    birthDate: "2001-05-11"
  }

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
