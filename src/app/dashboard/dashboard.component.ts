import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
  ) { }

  menus: any = [
    { label: "Shop", icon: "home" },
    { label: "Category", icon: "search" },
    { label: "New", icon: "tag" },
    { icon: "shopping-cart", border_display: {
      label: "Free",
      icon: ""
    }},
    { label: "Me", icon: "user" },
  ];
  menu_icon: string = 'home';

  ngOnInit(): void {
  }

  setIconVal(icon: any): void {
    this.menu_icon = icon;
  }
}
