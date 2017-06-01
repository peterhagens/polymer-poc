'use strict'

class Flow {

  constructor (logic) {
    this.logic = logic
    this.items = []
    this.state = {}
  }

  run () {
	this.items = []
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
  
  value (question, value) {
	  if (value === undefined) {
		    return this.state[question.getId()]
	  } else {
		  this.state[question.getId()] = value
	  }
  }

  hasValue (question) {
    return value(question) != null && value(question) != undefined
  }

}
