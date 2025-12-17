import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  successKey = '';
  errorKey = '';
  isSubmitting = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.successKey = '';
    this.errorKey = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.errorKey = 'contact.errors.fillAll';
      return;
    }

    this.isSubmitting = true;

    this.http.post('http://localhost:3000/contact', this.contactForm.value)
      .subscribe({
        next: () => {
          this.successKey = 'contact.success.sent';
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: () => {
          this.errorKey = 'contact.errors.sendFailed';
          this.isSubmitting = false;
        }
      });
  }
}
