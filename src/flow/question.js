'use strict'

class Question {

  constructor (id, title, answers) {
    this.id = id
    this.title = title
    this.answers = answers
  }

}

class Answer {

  constructor (value, title) {
    this.value = value
    this.title = title
  }

  static yesOrNo () {
    return [
      new Answer('YES', 'Ja'),
      new Answer('NO', 'Nee')
    ]
  }
}
