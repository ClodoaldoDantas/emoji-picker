export interface Emoji {
  slug: string
  unicodeName: string
  character: string
}

const BASE_URL = 'https://emoji-api.com/emojis'

export async function getEmojiList(): Promise<Emoji[]> {
  const res = await fetch(`${BASE_URL}?access_key=${process.env.EMOJI_API_KEY}`)
  const emojiList: Emoji[] = await res.json()

  return emojiList
}
