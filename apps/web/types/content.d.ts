declare global {
  // Character
  interface Character {
    character?: CharacterCharacter
    size?: CharacterSize
  }

  type CharacterCharacter = 'anthony' | 'julien' | 'mathieu' | 'nada' | 'power' | 'yael' | 'yoda'

  type CharacterSize = 'base' | 'lg' | 'sm' | 'xs'

  // Panel
  interface Panel {
    character?: PanelCharacter
    landscape?: boolean
    reverse?: boolean
  }

  type PanelCharacter = CharacterCharacter

  // Quote
  interface Quote {
    character?: QuoteCharacter
    clickable?: boolean
    reverse?: boolean
    size?: QuoteSize
  }

  type QuoteCharacter = CharacterCharacter

  type QuoteSize = 'base' | 'sm' | 'xs'
}

export { }
