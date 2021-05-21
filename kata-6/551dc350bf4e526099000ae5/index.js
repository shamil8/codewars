const songDecoder = s => s.split('WUB').filter(Boolean).join(' ')

// with regular expressions (the best!)
const songDecoderReg = s => s.replace(/(WUB)+/g, ' ').trim()

export default songDecoder