import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
     public data:any;
     public info:any;
     constructor(private http: HttpClient){}
     title ='api2'
  ngOnInit(): void {
    this.fetchDetails;
  }

   fetchDetails(){
    this.http.get('')
    .subscribe((res:any)=>{
      console.log();
      this.data =res;
    })

    this.http.get('')
    .subscribe((res:any)=>{
      console.log();
      this.info =res;
    })

   }

   
}
