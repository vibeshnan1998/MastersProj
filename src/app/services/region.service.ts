import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regionlist: AngularFireList<any>;
  array = [];
  constructor(private firebase: AngularFireDatabase) {
    this.regionlist = this.firebase.list('regions');
    this.regionlist.snapshotChanges().subscribe(
      list => {
        this.array = list.map( item => {
          return {
            $code: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  form: FormGroup = new FormGroup({
    $code: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('')
  });
  initializeForm() {
    this.form.setValue({
      $code: '',
      description: '',
      status: true
    });
  }
  getRegion()  {
    this.regionlist = this.firebase.list('regions');
    return this.regionlist.snapshotChanges();
  }
  insertregion(region: { $code: any; description: any; status: boolean; }) {
    this.regionlist.push({
      code: region.$code,
      description: region.description,
      status: region.status
    });
}
updateregion(region) {
  this.regionlist.update(region.$code, {
    description: region.description,
    status: region.status
  }
    );
}
populate(region) {
  this.form.setValue(region);
}


// region to country
getregionnName($code) {
  if ($code === '0') {
    return '';
  } else {
      return _.find(this.array, (obj) => {
        return obj.$code === $code;
      }).description;
    }
}
}
