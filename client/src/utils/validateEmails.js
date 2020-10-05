// eslint-disable-next-line
const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validateEmails = emails => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => expression.test(email) === false)

  if (invalidEmails.length) {
    return `Ces emails sont invalides: ${invalidEmails}`
  }

  return
}

export default validateEmails
