import { Component } from '@angular/core';
import { UtilizationService } from '../component/Services/utilization.service';

@Component({
  selector: 'app-utilization',
  templateUrl: './utilization.component.html',
  styleUrl: './utilization.component.css'
})
export class UtilizationComponent {
  selectedFile!: File;
  associateData:any[] = []
  projectData:any[] = []
  billingData:any[] = []
  displayedColumns: string[] = ['associateId', 'associateName', 'gradeName','utilization','isOnsite', 'projectId','projectName','customerId','pratice','billedFTE','totalFTE','unbilledFTE','parentCustomer','allocationPercentage','gradeName','allocationStaringDate','allocationEndDate'];
 combinedArray = []
  constructor(private utilizationService: UtilizationService) { }
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 
  onUpload() {
    if (this.selectedFile) {
      this.utilizationService.uploadFile(this.selectedFile).subscribe(() => {
        this.loadAssociateData();
      });
    }
  }
 
  loadAssociateData() {
    this.utilizationService.getAssociateData().subscribe(data => {
      this.associateData = data;
      console.log(this.associateData);
      console.log(data);
    });
  }
loadBillingData(){
  this.utilizationService.getBillingData().subscribe(data => {
    this.billingData =data;
    console.log(this.billingData);
  })
}
loadProjectData(){
  this.utilizationService.getProjectData().subscribe(data => {
    this.projectData =data;
    console.log(this.projectData);
  })
}
  ngOnInit() {
    this.loadAssociateData();
    this.loadBillingData();
    this.loadProjectData();
   this.combinedArray = [...this.associateData,...this.projectData,...this.billingData];
}
}