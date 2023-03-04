import { Location } from './location';

export interface Character {
  /**int	The id of the character. */
  id: number;
  /** The name of the character. */
  name: string;
  /**The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: string;
  /** The species of the character. */
  species: string;
  /** The type or subspecies of the character. */
  type: string;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: string;
  /** Name and link to the character's origin location. */
  origin: Location;
  /** Name and link to the character's last known location endpoint. */
  location: Location;
  /** (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
  image: string;
  /**(urls)	List of episodes in which this character appeared. */
  episode: string[];
  /**(url)	Link to the character's own URL endpoint. */
  url: string;
  /** Time at which the character was created in the database. */
  created: string;
}
