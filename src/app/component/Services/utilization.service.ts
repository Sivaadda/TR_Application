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
return this.http.post(`${this.apiUrl}/upload`, formData);
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
}