import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public teacherName;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  points = "";
  one = 0;
  two = 0;
  three = 0;
  four = 0;
  five = 0;

  constructor(private autser: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.teacherName = this.autser.getTeacher();

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this.formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this.formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this.formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this.formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this.formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
  }
  public submit()
  {    
    this.points = this.firstFormGroup.value.firstCtrl+this.secondFormGroup.value.secondCtrl+
    this.thirdFormGroup.value.thirdCtrl+this.fourthFormGroup.value.fourthCtrl+this.fifthFormGroup.value.fifthCtrl+
    this.sixthFormGroup.value.sixthCtrl+this.seventhFormGroup.value.seventhCtrl+this.eighthFormGroup.value.eighthCtrl+
    this.ninthFormGroup.value.ninthCtrl+this.tenthFormGroup.value.tenthCtrl;
    for(let i = 0; i < this.points.length; i++)
    {
      if(this.points[i] == '1')
      {
        this.one++;
      }
      else if(this.points[i] == '2')
      {
        this.two++;
      }
      else if(this.points[i] == '3')
      {
        this.three++;
      }
      else if(this.points[i] == '4')
      {
        this.four++;
      }
      else if(this.points[i] == '5')
      {
        this.five++;
      }
    }

    console.log(this.points+ "one= " +this.one+ " two= "+this.two+" three= "+this.three+" four= "+this.four+" five= "+this.five)

  }
}
