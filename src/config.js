import { timemap } from './lib'
import BP from './lib/blueprinters'

export default {
  gsheets: [],
  xlsx: [
    {
      name: 'incidents',
      path: 'data/incidents.xlsx',
      tabs: { coding: BP.deeprows}
    }
  ]
}
