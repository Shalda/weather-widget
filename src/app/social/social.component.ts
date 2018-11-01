import {Component, Input} from '@angular/core';
import {IPlaces, ISocial} from '../data';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  @Input()
      public currentPlace: ISocial;
}
