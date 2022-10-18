import addMinutes from 'date-fns/fp/addMinutes'
import addSeconds from 'date-fns/fp/addSeconds'
import intervalToDuration from 'date-fns/fp/intervalToDuration'
import flow from 'lodash/flow'
import compact from 'lodash/fp/compact'
import isNaN from 'lodash/fp/isNaN'
import map from 'lodash/fp/map'
import reject from 'lodash/fp/reject'
import size from 'lodash/fp/size'
import split from 'lodash/fp/split'
import { BidsConfig } from './configDesc'

const {
    VITE_APP_NUMBERS,
    VITE_APP_STRINGS,
    VITE_APP_DUR_MINUTES,
    VITE_APP_DUR_SECONDS,
} = (window as any).BidsConfig as BidsConfig

export const confDurMinutes = intervalToDuration({start:0, end: addMinutes(Number(VITE_APP_DUR_MINUTES), 0)})
export const confDurSeconds = intervalToDuration({start:0, end: addSeconds(Number(VITE_APP_DUR_SECONDS), 0)})

export const confStrings = flow(
    split(/[;,\s]+/),
    compact,
)(VITE_APP_STRINGS)

export const confNumbers = flow(
    split(/[;,\s]+/),
    compact,
    map(Number),
    reject(isNaN),
)(VITE_APP_NUMBERS) as number[]

if (
    size(confStrings) !== 2
) {
    throw new Error('Invalid botWorkingHours')
}
