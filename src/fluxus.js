import BP from './lib/blueprinters'

function prefixedTabs (prefix, cfg) {
  if (!cfg) cfg = {}
  const prf = key => cfg[key] ? `${prefix}_` : ''
  return {
    [`${prf('Consolidated')}Consolidated`]: BP.deeprows
  }
}

export const fluxus = {
  default: prefixedTabs(),
  prefixedTabs
}
