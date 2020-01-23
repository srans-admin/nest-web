import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {
   private baseUrl = environment.appUrl+'/api/v1/hostels/{id}/sharing-type-chart-info';

  constructor() { }


}
