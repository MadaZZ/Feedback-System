import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { UIService } from './../../shared/ui.service';

@Component({
  selector: 'app-teacher-feed',
  templateUrl: './teacher-feed.component.html',
  styleUrls: ['./teacher-feed.component.css']
})
export class TeacherFeedComponent implements OnInit {

  constructor(private auser: AuthService, private http: HttpClient, private uiser: UIService) { }

  private name;
  private teachersData;
  private oneStar;
  private twoStar;
  private threeStar;
  private fourStar;
  private fiveStar;
  private oneStarRating;
  private twoStarRating;
  private threeStarRating;
  private fourStarRating;
  private fiveStarRating;
  private Reviews;
  private reviewForTeacher = ["hello", "what", "doit22"];

  private total;
  private totalRatings;
  private ratingSum

  private percentage
  ngOnInit() {

    this.name = this.auser.getName();
    console.log(this.name);
    this.http.get('http://localhost:3000/api/searchTeachersName/?name=' + this.name)
      .subscribe(response => {
        console.log(response);
        this.teachersData = response;
        this.oneStar = this.teachersData[0].rating.oneStar;
        this.twoStar = this.teachersData[0].rating.twoStar;
        this.threeStar = this.teachersData[0].rating.threeStar;
        this.fourStar = this.teachersData[0].rating.fourStar;
        this.fiveStar = this.teachersData[0].rating.fiveStar;
        this.Reviews = this.teachersData[0].reviews;

        //  for(let i of this.Reviews)
        if (this.Reviews != null)
          this.reviewForTeacher = this.Reviews.split('$');

        this.setRatings();
        console.log(this.oneStar + " " + this.twoStar + " " + this.threeStar + " " + this.fourStar + " " + this.fiveStar + " " + this.Reviews);
      }, error => {
        this.uiser.showSnackbar(error.message, 'ok', 5000);
      });
  }
  setRatings() {
    this.totalRatings = this.oneStar + this.twoStar + this.threeStar + this.fourStar + this.fiveStar;
    this.total = 5 * (this.oneStar + this.twoStar + this.threeStar + this.fourStar + this.fiveStar);
    this.ratingSum = 1 * this.oneStar + 2 * this.twoStar + 3 * this.threeStar + 4 * this.fourStar + 5 * this.fiveStar;
    this.percentage = ((this.ratingSum) / (this.total)) * 100;
    
    this.percentage = Math.round(this.percentage);

    this.oneStarRating = (this.oneStar / this.totalRatings) * 100;
    console.log(this.oneStarRating);
    this.twoStarRating = (this.twoStar / this.totalRatings) * 100;
    console.log(this.twoStarRating);
    this.threeStarRating = (this.threeStar / this.totalRatings) * 100;
    console.log(this.threeStarRating);
    this.fourStarRating = (this.fourStar / this.totalRatings) * 100;
    console.log(this.fourStarRating);
    this.fiveStarRating = (this.fiveStar / this.totalRatings) * 100;
    console.log(this.fiveStarRating);
  }
}