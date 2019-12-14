import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConfig {

    private serverUrl = 'http://localhost:8080/nest-server';

    getServerURL(){
        return this.serverUrl;
    }
}