import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  public myFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
  });

  public myFormBuilder = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: new FormControl('',Validators.required),
  });

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  public onSubmit(): void {
    //console.log('thanh cong ' , this.myFormGroup.value);

    this.common.submitData(this.myFormBuilder.value);
  }
}
