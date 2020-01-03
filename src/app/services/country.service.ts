import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
array = [];
  constructor(private firebase: AngularFireDatabase) {
    this.countrylist = this.firebase.list('countries');
    this.countrylist.snapshotChanges().subscribe(
      list => {
        this.array = list.map( item => {
          return {
            $code: item.key,
            ...item.payload.val()
          };
        });
      });
   }
  countrylist: AngularFireList<any>;
  countryform: FormGroup = new FormGroup ({
    region: new FormControl(0),
    $code: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    status: new FormControl('')
  });
  initializeForm() {
    this.countryform.setValue({
      region: 0,
      $code: '',
      description: '',
      status: true
    });
  }
  getCountry()  {
    this.countrylist = this.firebase.list('countries');
    return this.countrylist.snapshotChanges();
  }
  insertregion(country: { region: any; $code: any; description: any; status: boolean; }) {
    this.countrylist.push({
      region: country.region,
      code: country.$code,
      description: country.description,
      status: country.status
    });
}
updateregion(country) {
  this.countrylist.update(country.$code, {
    region: country.region,
    description: country.description,
    status: country.status
  }
    );
}
populate(country: { region: any; $code: any; description: any; status: boolean; }) {
  this.countryform.setValue(_.omit(country, 'regionname'));
}
getcountryName($code) {
  if ($code === '0') {
    return '';
  } else {
      return _.find(this.array, (obj) => {
         return obj.$code === $code;
        }).description;
    }
}

}
