import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent implements OnInit {
  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}
  colors: Color[];
  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.colorService.getCarColorId(params['id']).subscribe((data) => {
          this.colors = data;
        });
      } else {
        this.colorService.getColors().subscribe((data) => {
          this.colors = data;
        });
      }
    });
  }
}
