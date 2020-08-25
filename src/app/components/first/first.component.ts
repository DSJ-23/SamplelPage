import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService} from '../../backend.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private Backend: BackendService) { }

  player_data: Array<any>;
  b_done: boolean = false;

  displayedColumns: string[] = ['name', 'pick', 'pos', 'bye', 'team'];
  dataSource: any = null

  ngOnInit(): void {



    this.Backend.getAll().subscribe((data: any) => {
      this.player_data = data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.player_data)
      this.b_done = true;
    })

  }

}
