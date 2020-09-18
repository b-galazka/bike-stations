import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-bike-stations-list-page',
  templateUrl: './bike-stations-list-page.component.html',
  styleUrls: ['./bike-stations-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeStationsListPageComponent implements OnInit {
  ngOnInit(): void {}
}
