import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-student-feed',
  templateUrl: './student-feed.component.html',
  styleUrls: ['./student-feed.component.css']
})
export class StudentFeedComponent implements OnInit {

  private class;
  
  constructor( 
    private http: HttpClient,
    private authser: AuthService,
    private uiser: UIService
  ) { }

  ngOnInit() {
    this.class = this.authser.getClass();
    this.http.get('http://localhost:3000/api/student'+'?class='+this.class)
    .subscribe(response => {
      console.log(response);
    }, error => {
      this.uiser.showSnackbar(error.message, 'ok',5000);
    });
  }

}
