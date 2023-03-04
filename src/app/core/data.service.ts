import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters } from 'src/models/characters';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Episode } from 'src/models';
const PATH = '';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * Get all characters.
   *
   * @param page Page to get.
   * @returns Characters list.
   */
  getCharacters(page: number): Observable<Characters> {
    return this.http.get<Characters>(
      `${environment.baseApiUrl}character?page=${page}`
    );
  }

  /**
   * Get episode.
   *
   * @param index Episode id.
   * @returns Episode data.
   */
  getEpisode(id: string): Observable<Episode> {
    return this.http.get<Episode>(
      `${environment.baseApiUrl}episode/${id}`
    );
  }
}
