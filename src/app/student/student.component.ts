import { Component, OnInit } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
  searchData: string;
  constructor(private _listService: ListService, private _dropDownService: DropDownService,private router: Router) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      genderType: '',
      date: ''
    }
    this.genderArray = this._dropDownService.getDropDown();
    this.searchData = '';
  }


  submit(values) {

    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.gender,
      date: values.date
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
    this.router.navigateByUrl('/list');
  }
  
}