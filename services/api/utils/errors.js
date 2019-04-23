export class ErrorWithStatus extends Error {
  status
  level
  constructor(msg, status, level = 50, innerError) {
    super(msg)
    this.status = status
    this.level = level
    Error.captureStackTrace(this, this.constructor)
    if (innerError && innerError.stack) {
      const splitStack = innerError.stack.split('\n')
      this.stack = this.stack + '\n' + splitStack.slice(1, splitStack.length).join('\n')
    }
  }
}

export class NotFoundError extends ErrorWithStatus {
  constructor(message = 'Not found', level) {
    console.log("Message in construct", message)
    super(message, 404, level)
  }
}
