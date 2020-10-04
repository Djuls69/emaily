const redirect =
  process.env.NODE_ENV === 'production' ? 'https://agile-garden-39174.herokuapp.com' : 'http://localhost:3000'

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>Votre avis est précieux!</h3>
          <p>Merci de bien vouloir répondre à ce questionnaire</p>
          <p>${survey.body}</p>
          <div>
            <a href="${redirect}/api/surveys/feedback">Oui</a>
          </div>
          <div>
            <a href="${redirect}/api/surveys/feedback">Non</a>
          </div>
        </div>
      </body>
    </html>
  `
}
