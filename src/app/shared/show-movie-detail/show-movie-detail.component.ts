import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-movie-detail',
  templateUrl: './show-movie-detail.component.html',
  styleUrls: ['./show-movie-detail.component.scss']
})
export class ShowMovieDetailComponent implements OnInit {
 @Input() movieDetail
  constructor() { }

  ngOnInit() {
  }

}
