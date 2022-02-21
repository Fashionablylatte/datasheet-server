import { fluxus } from './fluxus'
import { timemap } from './lib'

export default {
  gsheets: [],
  xlsx: [
    {
      name: 'fluxus_consolidated',
      path: 'data/fluxus_consolidated.xlsx',
      tabs: fluxus.default
    }
  ]
}
