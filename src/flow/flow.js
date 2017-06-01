'use strict'

class Flow {

  constructor(logic) {
    this.logic = logic
    this.items = []
    this.state = {}
  }

  run() {
    this.items.length = 0
    return this.logic(this)
  }

  ask(question) {
    return new Promise((resolve, reject) => {
      this.items.push(question)
      console.log('Question ' + question.id + ' has answer ' + this.value(question))
      if (this.hasValue(question)) {
        resolve(this.value(question))
      } else {
        reject()
      }
    })
  }

  value(question, value) {
    if (value === undefined) {
      return this.state[question.id]
    } else {
      this.state[question.id] = value
    }
  }

  hasValue(question) {
    return this.value(question) != null && this.value(question) != undefined
  }

}
