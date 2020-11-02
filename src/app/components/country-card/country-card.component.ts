import {Component, Input, OnInit} from '@angular/core';
import {Zemlja} from '../../../../types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
@Input()
  zemlja: Zemlja;




}
