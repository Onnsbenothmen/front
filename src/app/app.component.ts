// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: '<h1>{{ message }}</h1>',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    message!: string;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<any>('http://localhost:8087/api/message').subscribe(data => {
            this.message = data.content;
        });
    }
}
