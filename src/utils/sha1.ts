import sha1Util from 'sync-sha1/rawSha1'

export const sha1 = (str: string = '') => {

    // Async implementation
    // const buffer = new TextEncoder().encode(str)
    // const hash = await crypto.subtle.digest('SHA-1', buffer)
    // const hexCodes = []
    // const view = new DataView(hash)
    // for (let i = 0; i < view.byteLength; i += 1) {
    //   const byte = view.getUint8(i)
    //   hexCodes.push(byte)
    // }
    // return hexCodes//.join('');


    const buffer = new Uint8Array(str.split('').map((c) => c.charCodeAt(0)))
    const hash = sha1Util(buffer)
    return hash
}