import { Component, OnInit } from '@angular/core';
import { tsLib } from '@nx-yarn-pnp-example/ts-lib';

@Component({
  selector: 'nx-yarn-pnp-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit(): void {
    tsLib();
  }
}
