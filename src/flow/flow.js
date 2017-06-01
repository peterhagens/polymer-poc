'use strict'



class Flow {
  constructor() {
    this.items = []
    this.state = {}
  }

  ask(question) {
    this.items.push(question)
    window.dispatchEvent(new CustomEvent('ask', { detail: { items: this.items } }));

    return new Promise((resolve, reject) => {
      if (this.hasValue(question)) {
        resolve(this.value(question))
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


