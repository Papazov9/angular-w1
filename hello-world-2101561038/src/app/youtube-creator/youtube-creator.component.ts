import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TogglerService } from '../toggler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-youtube-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-creator.component.html',
  styleUrl: './youtube-creator.component.css'
})
export class YoutubeCreatorComponent implements OnInit{
  isClicked: boolean = false;
  sectionIndex: number = 2;
  toggleSub?: Subscription;
  constructor(private togglingService: TogglerService) {

  }
  ngOnInit(): void {
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
