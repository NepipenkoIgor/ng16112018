import { Injectable } from '@angular/core';
import { SmallService } from './small.service';
import { LargeService } from './large.service';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  public determineService(): SmallService | LargeService {
    const width: number = Math.max((document.documentElement as HTMLElement)
      .clientWidth, window.innerHeight || 0);

    if (width < 800) {
      return new SmallService();
    }
    return new LargeService();
  }
}
