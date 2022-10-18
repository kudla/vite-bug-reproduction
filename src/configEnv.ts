import { BidsConfig } from './configDesc'

const {
    VITE_APP_NUMBERS,
    VITE_APP_STRINGS,
    VITE_APP_DUR_MINUTES,
    VITE_APP_DUR_SECONDS,
} = import.meta.env

const BidsConfig: BidsConfig = {
    VITE_APP_NUMBERS,
    VITE_APP_STRINGS,
    VITE_APP_DUR_MINUTES,
    VITE_APP_DUR_SECONDS,
}

Object.assign(
    window,
    {
        BidsConfig,
    }
)
