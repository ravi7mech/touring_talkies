import { Component, OnInit } from '@angular/core';
import { TouringAPIService } from '../../touring-service/touring-api.service';
import { ApiResponse } from 'src/app/touring-models/api-response';
import {
  MOVIE_GENRES,
  TV_GENRES
} from 'src/app/touring-models/touring-constants';

@Component({
  selector: 'app-entry-slider',
  templateUrl: './entry-slider.component.html',
  styleUrls: ['./entry-slider.component.scss'],
  providers: [TouringAPIService]
})
export class EntrySliderComponent implements OnInit {
  responseData: ApiResponse;
  headers: string[];
  imgprefix = 'https://image.tmdb.org/t/p/w780';
  constructor(private touringService: TouringAPIService) {}

  ngOnInit() {
    this.touringService.Trending().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
      console.log(this.headers);
      this.responseData = { ...resp.body };
      console.log(this.responseData.results);
    });
  }

  findGenre(show: any, showType: any) {
    return showType === 'M'
      ? show.map(
          genere_id =>
            MOVIE_GENRES.find(
              master_genereid => master_genereid.id === genere_id
            ).name
        )
      : show.map(
          genere_id =>
            TV_GENRES.find(master_genereid => master_genereid.id === genere_id)
              .name
        );
  }
}
