import { sha1 } from './sha1'

export const getShard = (value:  string, shards: number) => {
    const hash = sha1(value)
    return Buffer.from(hash).readUInt16BE(0) % shards
}
