import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  public baseURL = 'http://localhost:3000/api/v1/';

  constructor(
    private readonly http: HttpClient
  ) { }

  createHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  getAllShipments(): Observable<any> {
    const url = `${this.baseURL}shipments`;
    return this.http.get<any>(url);
  }

  getSingleShimpent(sscc: string): Observable<any> {
    let params = new HttpParams();
    const url = `${this.baseURL}shipments`;
    params = params.append(url, sscc);
    return this.http.get<any>(url);
  }

  createShipment(): Observable<any> {
    const url = `${this.baseURL}populates/shipments`;
    return this.http.post<any>(url, null);
  }

  createMilestone(): Observable<any> {
    const url = `${this.baseURL}populates/milestones`;
    return this.http.post<any>(url, null);
  }
}
