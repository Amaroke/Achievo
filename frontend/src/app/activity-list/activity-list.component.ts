import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent {
  @Input() activities: any[];

  constructor() {
    this.activities = [];
  }

  calculateProgress(startDate: string, endDate: string): number {
    const currentTime = new Date().getTime();
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();

    if (currentTime < startTime) {
      return 0;
    }

    if (currentTime >= endTime) {
      return 100;
    }

    const progress = ((currentTime - startTime) / (endTime - startTime)) * 100;
    return Math.min(progress, 100);
  }

  calculateRemainingTime(endDate: string): string {
    const currentTime = new Date().getTime();
    const endTime = new Date(endDate).getTime();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      return 'Terminée';
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    let remainingTimeText = '';

    if (days > 0) {
      remainingTimeText += `${days}j `;
    }

    if (hours > 0) {
      remainingTimeText += `${hours}h `;
    }

    if (minutes > 0) {
      remainingTimeText += `${minutes}m`;
    }

    return remainingTimeText.trim();
  }

}