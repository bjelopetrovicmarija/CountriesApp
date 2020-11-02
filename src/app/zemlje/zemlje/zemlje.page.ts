import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';
import {Zemlja} from '../../../../types/api';

@Component({
  selector: 'app-zemlje',
  templateUrl: './zemlje.page.html',
  styleUrls: ['./zemlje.page.scss'],
})
export class ZemljePage implements OnInit {

  constructor(private api: ApiService) { }
  zemlje: Observable<Zemlja[]>;

  ngOnInit(): void{
    this.zemlje = this.api.vratiSveZemlje();
  }

}
