import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  activities = [
    {
      title: 'Lire 10 chapitres de "Guerre et Paix"',
      favorite: true,
      mission: `Lire des livres`,
      quantity: 10,
      progression: 3,
      objective: '',
      organizer: 'Jean Dupont',
      participants: ['Pierre Dupré', 'André Dupuis'],
      startDate: '2023-09-17',
      endDate: '2023-09-24',
    },
    {
      title: 'Planter 20 roses dans le jardin',
      favorite: false,
      mission: `Jardiner`,
      quantity: 20,
      progression: 7,
      objective: '',
      organizer: 'Marie Martin',
      participants: ['Alice Robert', 'Lucie Lambert'],
      startDate: '2023-09-20',
      endDate: '2023-09-25',
    },
    {
      title: 'Apprendre à jouer 5 chansons à la guitare',
      favorite: true,
      mission: `Apprendre la musique`,
      quantity: 5,
      progression: 2,
      objective: '',
      organizer: 'Michel Leclerc',
      participants: ['Sophie Gagnon', 'Paul Durand'],
      startDate: '2023-09-18',
      endDate: '2023-09-30',
    },
    {
      title: 'Préparer un repas pour 6 personnes',
      favorite: false,
      mission: `Cuisiner`,
      quantity: 1,
      progression: 0,
      objective: '',
      organizer: 'Isabelle Tremblay',
      participants: ['Éric Dubois', 'Claire Lavoie'],
      startDate: '2023-09-22',
      endDate: '2023-09-22',
    },
    {
      title: 'Faire 15 km de VTT en montagne',
      favorite: true,
      mission: `Faire du vélo`,
      quantity: 15,
      progression: 5,
      objective: '',
      organizer: 'Philippe Girard',
      participants: ['David Gagné', 'Julie Tremblay'],
      startDate: '2023-09-19',
      endDate: '2023-09-21',
    },
  ];

  constructor() {
    this.activities.forEach(activity => {
      activity.objective = `${activity.mission} (${activity.progression}/${activity.quantity})`;
    });
  }

}
