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
  displayedColumns: string[] = ['associateId', 'associateName', 'gradeName','utilization',
  'isOnsite', 'projectId','projectName','customerId','pratice','billedFTE',
  'totalFTE','unbilledFTE','parentCustomer','gradeName','allocationPercentage',
  'allocationStaringDate','allocationEndDate'];
 combinedData:any[]=[]
  constructor(private utilizationService: UtilizationService) { }
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 
  onUpload() {
    if (this.selectedFile) {
      this.utilizationService.uploadFile(this.selectedFile).subscribe((data) => {
        console.log(data)
        this.loadAssociateData();
        this.loadBillingData();
        this.loadProjectData();
      });
    }
  }
 
  loadAssociateData() {
    this.utilizationService.getAssociateData().subscribe(data => {
      this.associateData = data;
      console.log(this.associateData);
      this.combinedDataw();
 
    });
  }
loadBillingData(){
  this.utilizationService.getBillingData().subscribe(data => {
    this.billingData =data;
    console.log(this.billingData);
    this.combinedDataw();
  })
}
loadProjectData(){
  this.utilizationService.getProjectData().subscribe(data => {
    this.projectData =data;
  console.log(this.projectData);
  this.combinedDataw();
  })
}

combinedDataw(){
 this.combinedData=this.associateData.map(associate =>{
  const billing = this.billingData.find(b => b.associateDetailsId === associate.id);
  const project = this.projectData.find(p => p.associateDetailsId === associate.id);
  return{
    ...associate,
    ...billing,
    ...project
  }
 })
}
  ngOnInit() {
    this.loadAssociateData();
    this.loadBillingData();
    this.loadProjectData();
   
  
}
}