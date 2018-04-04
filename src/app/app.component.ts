import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB-aj2NcEdVPP_LqtR7uWycSB-kHWkHHZw',
            authDomain: 'todo-list-marygi.firebaseapp.com'
        });
    }
}
