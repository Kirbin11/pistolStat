import { getStatsByMatchId } from './match-stats'
import { getMatches } from './matches'
import { getPistol } from './pistol'
import { getResults } from './results'
import getRSS from './rss'

export default {
  getNews: async () => getRSS('news'),
  getResults,
  getStatsByMatchId,
  getMatches,
  getPistol,
}
