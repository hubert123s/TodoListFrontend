import {Component, OnInit} from '@angular/core';
import {RequestcountService} from 'src/app/services/requestcount.service';

@Component({
  selector: 'app-requestcount',
  templateUrl: './requestcount.component.html',
  styleUrls: ['./requestcount.component.css']
})
export class RequestcountComponent implements OnInit {

  requestCount: number | undefined;
  constructor(private requestcount: RequestcountService) {
  }

  ngOnInit(): void {
    this.requestcount.getRequestCount().subscribe(value=>{
        this.requestCount=value;
      }
    )
  }

}
