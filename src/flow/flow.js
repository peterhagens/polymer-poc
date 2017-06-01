'use strict'

class Flow {

  constructor (logic) {
    this.logic = logic
    this.items = []
    this.state = {}
  }

  run () {
    return logic(this)
  }

  ask (question) {
    return new Promise((resolve, reject) => {
      this.items.push(question)
      if (flow.hasValue(question)) {
        resolve(flow.value(question))
      }
    })
  }

  value (question) {
    return this.state[question.getId()]
  }

  hasValue (question) {
    return value(question) != null && value(question) != undefined
  }

}
