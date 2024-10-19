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