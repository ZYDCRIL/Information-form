import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  formData: FormGroup;
  coverPhotoUrl: string | ArrayBuffer | null = null;
  profilePhotoUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formData = this.fb.group({
      username: ['', Validators.required],
      nickname: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      startingDate: ['', Validators.required],
      coverPhoto: [null],
      profilePhoto: [null],
      position: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {}

  onFileChange(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === 'coverPhoto') {
          this.coverPhotoUrl = reader.result;
        } else if (type === 'profilePhoto') {
          this.profilePhotoUrl = reader.result;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    console.log(this.formData.value);
  }

  selectPosition(position: string): void {
    const positionControl = this.formData.get('position');
    if (positionControl) {
      positionControl.setValue(position);
  }
  }}