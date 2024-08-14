import { Component } from '@angular/core';
import { UtilizationService } from '../Services/utilization.service';

@Component({
  selector: 'app-fte-summary',
  templateUrl: './fte-summary.component.html',
  styleUrl: './fte-summary.component.css'
})
export class FteSummaryComponent {
  onSiteFTE:any[];
  offShoreFTE:any[];
  onSiteCount:any[];
  offShoreCount:any[];
  totalCount:any[];
  
constructor(private utilization:UtilizationService){

}
getOnsiteTotalFTE() {
  this.utilization.getOnsiteFTE().subscribe(data => {
this.onSiteFTE=data;

console.log(this.onSiteFTE);

  })
}
getOffshoreTotalFTE() {
  this.utilization.getOffshoreFTE().subscribe(data => {
this.offShoreFTE=data;
console.log(this.offShoreFTE);
  })
}
getOffshoreTotalCount() {
  this.utilization.getOffshoreCount().subscribe(data => {
this.offShoreCount=data;
console.log(this.offShoreCount);
  })
}
getOnsiteTotalCount() {
  this.utilization.getOnsiteCount().subscribe(data => {
this.onSiteCount=data;
console.log(this.onSiteCount);
  })
}
getTotalCount() {
  this.utilization.getTotalCount().subscribe(data => {
this.totalCount=data;
console.log(this.totalCount);
  })
}

showInsite(index:number):number{
return 3;
}
ngOnInit(){
  this.getOnsiteTotalFTE();
  this.getOffshoreTotalFTE();
  this.getOnsiteTotalCount();
  this.getOffshoreTotalCount();
  this.getTotalCount();
}
}
