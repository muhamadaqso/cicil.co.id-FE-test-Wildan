import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as moment from 'moment';


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
})

export class resultComponent implements OnInit {
    receivedData;
    result_date : string = '';
    
    constructor(private location:Location, private router: Router) {
        let now = moment(); 

     }

    ngOnInit() {
        this.receivedData = this.location.getState() 
        if(this.receivedData.date)
        {
            this.result_date = moment(this.receivedData.date).local().format('dddd, D MMMM YYYY');

        }else{
            this.router.navigate(['']);
        }
    }

}