import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit {
    public pass_data = { date:""};

    feedback: string = ''

    constructor(private router: Router) { }

    ngOnInit() {}

    toResultPage(){
        if(this.pass_data.date)
        {
            this.router.navigateByUrl('/result', { state: this.pass_data });
        }else{
            this.feedback = "Field must be filled"
        }
    }

}