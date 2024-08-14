import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilizationService {
  private apiUrl = 'https://localhost:7128/api';
 
  constructor(private http: HttpClient) { }
 
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
formData.append('file', file, file.name);
return this.http.post(`${this.apiUrl}/Upload`, formData);
  }
 
  getAssociateData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Associate`);
  }
  getBillingData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Project`);
  }
  getProjectData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing`);
  }

  getOnsiteFTE(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing/OnsiteTotalFTE`);
  }
  getOffshoreFTE(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing/OffShoreTotalFTE`);
  }
  getOnsiteCount(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing/OnsiteTotalCount`);
  }
  getOffshoreCount(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing/OffShoreTotalCount`);
  }
  getTotalCount(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Billing/TotalCount`);
  }
}
