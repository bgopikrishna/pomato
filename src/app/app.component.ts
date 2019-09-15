import { Component, OnInit } from '@angular/core';
import { SyncService } from './services/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pomato';

  constructor(private syncService: SyncService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.syncService.get("locations?query=Kothagudem").subscribe(data => console.log(data)
    )
  }
}
