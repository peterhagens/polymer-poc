const questions = {
  likePokemon: new Question('likePokemon', 'Do you like Pokémon?', Answer.yesOrNo()),
  isPikachuFavorite: new Question('isPikachuFavorite', 'Is Pikachu your favorite Pokémon?', Answer.yesOrNo()),
  likeSquirtle: new Question('likeSquirtle', 'Doe you like Squirtle', Answer.yesOrNo())
}

class PokemonFlow extends Flow {
  constructor() {
    super();
  }

  run() {
    this.items = [];
    return this.ask(questions.likePokemon).then(likePokemon => {
      if (likePokemon === 'YES') {
        return this.ask(questions.isPikachuFavorite).then(isPikachuFavorite => {
          return this.ask(questions.likeSquirtle);
        })
      }
    });
  }
}