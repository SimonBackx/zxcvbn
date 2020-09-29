import { REGEXEN } from '~/data/const'
import { sorted } from '~/helper'
/*
 * -------------------------------------------------------------------------------
 *  regex matching ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */
class MatchRegex {
  match(password, regexes = REGEXEN) {
    const matches = []
    Object.keys(regexes).forEach((name) => {
      const regex = regexes[name]
      regex.lastIndex = 0 // keeps regexMatch stateless
      const regexMatch = regex.exec(password)
      if (regexMatch) {
        const token = regexMatch[0]
        matches.push({
          pattern: 'regex',
          token,
          i: regexMatch.index,
          j: regexMatch.index + regexMatch[0].length - 1,
          regexName: name,
          regexMatch,
        })
      }
    })
    return sorted(matches)
  }
}

export default MatchRegex
