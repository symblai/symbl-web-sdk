export const DEFAULT_SAMPLE_RATE_HERTZ = 16000;
export const DEFAULT_ENCODING_TYPE = 'LINEAR16';
export const VALID_INSIGHT_TYPES = ['action_item', 'question', 'follow_up']
export const VALID_ENCODING = ['LINEAR16', 'OPUS'];
export const LINEAR16_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 44100, 48000];
export const OPUS_SAMPLE_RATE_HERTZ = [8000, 16000, 24000, 48000];
export const PASSWORD_REGEX = /^[a-zA-Z0-9-]{6,64}$/;