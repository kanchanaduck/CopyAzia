import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};


  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      "dom": "<'row'<'col-sm-12 col-md-6'><'col-sm-12 col-md-6 text-right'B>>" +
      "<'row'<'col-sm-12 mt-1'tr>>" +
      "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      // dom: 'Bfrtip',
      buttons: [
        /* {
          extend: 'copy',
          className: 'btn btn-outline-primary',
        },
        {
          extend: 'print',
          className: 'btn btn-outline-primary',
        },
        {
          extend: 'excel',
          className: 'btn btn-outline-primary',
        },
        {
          text: 'Some button',
          className: 'btn btn-outline-primary',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }, */
        {
          text: '<i class="fas fa-plus"></i> Add</button>',
          className: 'btn btn-outline-primary btn-rounded',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
    };
  }

}
