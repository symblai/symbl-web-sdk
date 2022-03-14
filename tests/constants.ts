require('dotenv').config()

export const APP_ID = process.env.APP_ID
export const APP_SECRET = process.env.APP_SECRET
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN
export const EXPIRED_ACCESS_TOKEN = process.env.EXPIRED_ACCESS_TOKEN

export const VALID_INSIGHT_TYPES = ['action_item', 'question']
export const VALID_ENCODING = ['LINEAR16', 'Opus'];
export const LINEAR16_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 44100, 48000];
export const OPUS_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 48000];