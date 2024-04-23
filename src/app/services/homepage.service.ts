import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  sliders: any[] = [];
  topProducts: any[] = [];
  featuredProducts: any[] = [];
  sliderloaded = false;
  topLoaded = false;
  featuredLoaded = false;
  constructor(private client: ApiService) {
    this.loadSliders();
   }

  loadSliders() {
    if (!this.sliderloaded) {
      this.client.get('sliders').subscribe(
        (res: any) => {
          this.sliders = res;
          console.log(res);
          this.sliderloaded = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
