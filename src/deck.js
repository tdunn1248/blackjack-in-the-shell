const Card = require('./card')
const _ = require('lodash')
// const col = require('colors')

class Deck {
  constructor() {
    this.deckStack = []
  }

  createDeck() {
    const heart = '❤️'
    const spade = ' ♠️ '
    const diamond = '♦️ '
    const club = '♣️ '

    const suits = [heart,spade,diamond,club]
    const ranks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king']

    suits.forEach( (suit) => {
      ranks.forEach( (rank) => {
        this.deckStack.push(new Card(rank, suit)) // .assignPoint()
      })
    })
    for (let card in this.deckStack) {
      this.deckStack[card].assignPoint()
    }
    this.deckStack = _.shuffle(this.deckStack)
  }
}

module.exports = Deck
