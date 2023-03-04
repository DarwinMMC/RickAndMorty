import { Character } from './character';
import { Location } from './location';

export interface Characters {
  info: {
    /** The length of the response. */
    count: number;
    /**The amount of pages. */
    pages: number;
    /** (url)	Link to the next page (if it exists). */
    next: string;
    /** (url)	Link to the previous page (if it exists). */
    prev: string;
  };
  results: Character[];
}
