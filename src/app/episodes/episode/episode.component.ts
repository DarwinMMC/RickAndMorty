import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { first } from 'rxjs';
import { Episode } from 'src/models';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episode!: Episode;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  /**
   * Get episode.
   */
  private getParams(): void {
    const episode = this.route.snapshot.paramMap.get('id');
    episode && this.getEpisode(episode);
  }

  getEpisode(episode: string): void {
    this.dataService
      .getEpisode(episode)
      .pipe(first())
      .subscribe({
        next: (episode) => {
          this.episode = episode;
        },
      });
  }
}
