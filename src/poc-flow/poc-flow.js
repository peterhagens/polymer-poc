'use strict'

const likesPokemonQuestion = new Question('likesPokemon', 'Do you like Pokemon?', [])

function pocFlow(flow) {
  return flow.ask(nameQuestion)
}
