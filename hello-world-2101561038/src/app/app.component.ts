import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { YoutubeCreatorComponent } from './youtube-creator/youtube-creator.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SpecsComponent } from './specs/specs.component';
import { MyPageComponent } from './my-page/my-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, YoutubeCreatorComponent, HobbiesComponent, SpecsComponent, MyPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
