'use strict'

class Flow {

  constructor(logic) {
    this.logic = logic
    this.items = []
    this.state = {}
    this.isDirty = false
  }

  run() {
    this.items = []
    this.isDirty = false
    console.log('Running flow. State:', this.state)
    return this.logic(this)
  }

  ask(question) {
    return new Promise((resolve, reject) => {
      this.items.push(question)
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
      this.isDirty = true
    }
  }

  hasValue(question) {
    return this.value(question) != null && this.value(question) != undefined && this.value(question) != ""
  }

}
