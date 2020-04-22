import { Component, OnInit } from '@angular/core';
import { Server} from '../../shared/server'

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  Servers: Server[] = [
    {id: 1,
    name: 'dev-web',
    status: true},
    {id: 1,
    name: 'dev-mail',
    status: true},
    {id: 1,
    name: 'prod-web',
    status: false}

  ]

  ngOnInit() {
  }

}
