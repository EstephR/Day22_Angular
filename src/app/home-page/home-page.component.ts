import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
cars: Array<{brand: string, model: string, year: number, img: string}> = [
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2020,
    img: "https://www.tesla.com/assets/img/m3_fb_s.jpg"
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2020,
    img: "https://imgr1.auto-motor-und-sport.de/Tesla-Model-S-Aero-Paket-article169Gallery-65db1f01-1843210.jpg"
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2020,
    img: "https://cdn.pocket-lint.com/r/s/970x/assets/images/144304-cars-review-tesla-model-x-review-lead-image1-vdycmknzck-jpg.webp"
  },
  {
    brand: "Audi",
    model: "A4",
    year: 2019,
    img: "https://www.ccarprice.com/products/Audi-A4-Prestige-2022.jpg"
  },
  {
    brand: "Audi",
    model: "RS7",
    year: 2018,
    img: "https://cdn.motor1.com/images/mgl/Kpk8R/s1/4x3/nebulus-audi-rs7.webp"
  },
  {
    brand: "Audi",
    model: "RS7 Q8",
    year: 2020,
    img: "https://i.auto-bild.de/ir_img/2/9/9/7/6/1/5/5462cd63235aed93.jpg?impolicy=og_images"
  },
  {
    brand: "BMW",
    model: "1",
    year: 2019,
    img: "https://i.auto-bild.de/mdb/extra_large/55/3-f5e.jpg"
  },
  {
    brand: "BMW",
    model: "435",
    year: 2021,
    img: "https://www.autoscout24.at/assets/auto/images/model/bmw/bmw-435/bmw-435-l-03.jpg"
  },
  {
    brand: "BMW",
    model: "X7",
    year: 2020,
    img: "https://i.auto-bild.de/mdb/extra_large/28/x7-bdc.png"
  }
];

carForm = new FormGroup({
  brand: new FormControl("",Validators.required),
  model: new FormControl("", Validators.required),
  year: new FormControl("", Validators.required),
  img: new FormControl("", Validators.required),
})



  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    if (this.carForm.valid) {
       var printObj = this.carForm.value;
    this.cars.push(printObj);
    }
  }

}
