declare global {
  // BaseCharacter
  interface BaseCharacter {
    character?: BaseCharacterCharacter
    size?: BaseCharacterSize
  }

  type BaseCharacterCharacter = 'anthony' | 'julien' | 'mathieu' | 'nada' | 'power' | 'yael' | 'yoda'

  type BaseCharacterSize = 'base' | 'lg' | 'sm' | 'xs'

  // BaseQuote
  interface BaseQuote {
    character?: BaseQuoteCharacter
    clickable?: boolean
    reverse?: boolean
    size?: BaseQuoteSize
  }

  type BaseQuoteCharacter = BaseCharacterCharacter

  type BaseQuoteSize = 'base' | 'sm' | 'xs'
}

export { }
