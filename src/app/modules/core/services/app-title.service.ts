import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private readonly baseTitle = this.titleService.getTitle();

  constructor(private readonly titleService: Title) {}

  setPageTitle(pageTitle: string): void {
    this.titleService.setTitle(`${this.baseTitle} | ${pageTitle}`);
  }

  resetTitle(): void {
    this.titleService.setTitle(this.baseTitle);
  }
}
