import { Component, OnInit } from '@angular/core';
import { BackendService} from '../../backend.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private Backend: BackendService) { }

  player_data: Array<any>;
  b_done: boolean = false;

  ngOnInit(): void {

    this.Backend.getAll().subscribe((data: any) => {
      this.player_data = data;
      console.log(data)
      this.b_done = true;
    })

  }

}
