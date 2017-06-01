'use strict'

const questions = {
  likePokemon: new Question('likePokemon', 'Do you like Pokémon?', Answer.yesOrNo()),
  isPikachuFavorite: new Question('isPikachuFavorite', 'Is Pikachu your favorite Pokémon?', Answer.yesOrNo())
}

function pokemonFlowLogic(flow) {
  return flow.ask(questions.likePokemon).then(likePokemon => {
    if (likePokemon === 'YES') {
      return flow.ask(questions.isPikachuFavorite)
    }
  })
}
