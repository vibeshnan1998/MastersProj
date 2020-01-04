import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef, MatSlideToggleChange } from '@angular/material';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {

  private status = false;
  lstatus = 'Active';
    constructor(private service: CityService,
                private Sservice: StateService,
                private notificationService: NotificationService,
                public dialogref: MatDialogRef<CityViewComponent>) { }
    ngOnInit() {
  this.service.getCity();
    }
    toggle(event: MatSlideToggleChange) {
      console.log('toggle', event.checked);
      this.status = event.checked;
      if (this.status === true) {
               this.lstatus = 'Active';
      } else {
        this.lstatus = 'InActive';
      }
    }
    onclear() {
      if (!this.service.cityform.get('$code').value && !this.service.cityform.get('description').value) {
        this.notificationService.success('Fields Are Now Empty To Fill');
        } else {
          this.notificationService.success('cleared successfully');
        }
      this.service.initializeForm();
      this.service.cityform.reset();
     }
     onsubmit() {
       if ( this.service.cityform.valid) {
         if (!this.service.cityform.get('$code').value) {
           this.service.insertregion(this.service.cityform.value);
           this.service.cityform.reset();
           this.service.initializeForm();
           this.notificationService.success('Submitted Successfully');
              } else {
                this.service.updateregion(this.service.cityform.value);
                this.notificationService.success('Updated Successfully');
                this.dialogref.close();
                     }
                   }
      }
       onclose() {
         this.service.cityform.reset();
         this.service.initializeForm();
         this.dialogref.close();
       }

}
