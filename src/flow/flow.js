'use strict'

class Flow {

  constructor(logic) {
    this.logic = logic
    this.items = []
    this.state = {}
  }

  run() {
    this.items = []
    return this.logic(this)
  }

  ask(question) {
    return new Promise((resolve, reject) => {
      this.items.push(question)
      if (this.hasValue(question)) {
        resolve(this.value(question))
      }
    })
  }

  value(question, value) {
    if (value === undefined) {
      return this.state[question.id]
    } else {
      this.state[question.getId()] = value
    }
  }

  hasValue(question) {
    return this.value(question) != null && this.value(question) != undefined
  }

}
