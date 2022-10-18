import  React from  'react'
import  { Box } from  '@mui/material'
import Axios from 'axios'
import { EventEmitter } from 'events'
import { flow } from 'lodash'
import { groupBy, identity, isNil, join, keyBy, map, mapKeys, mapValues, omit, property } from 'lodash/fp'
import { format } from 'util'
import * as utils from '../utils'


import * as config from '../config'

export const Deps = () => {
    const a = flow(
        map(identity),
    )([Date.now()])
    return (
        <Box
        >
            {JSON.stringify({
                config,
                EventEmitter,
                flow,
                groupBy, identity, isNil, join, keyBy, map, mapKeys, mapValues, omit, property,
                format,
                a,
                utils,
            })}
            {String(Axios)}
        </Box>
    )
}