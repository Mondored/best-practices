import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/stock']);
  }
}
