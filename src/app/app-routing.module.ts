import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationComponent } from './utilization/utilization.component';
import { FteSummaryComponent } from './component/fte-summary/fte-summary.component';

const routes:Routes=[
  {
    path:'', component:UtilizationComponent
  },
  {
    path:'ftesummary', component:FteSummaryComponent
  }
  
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
