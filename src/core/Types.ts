interface NavbarLinks extends Array<{
    type: string,
    link: string
}> {}

export const requestType: NavbarLinks = [
  {
    type: 'SEASON', link: '/'
  },
  {
    type: 'ANIME', link: '/anime'
  },
  {
    type: 'MANGA', link: '/manga'
  }
];

export interface AnimeData {
  id?: number,
  title? : string,
  mean? : number,
  num_list_users? : number,
  media_type? : string,
  status? : string,
  num_episodes? : number,
  start_season? : {
    year? : number,
    season: string
  }
}

export type DisplayResultFunction = () => string | undefined
