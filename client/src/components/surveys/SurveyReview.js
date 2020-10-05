import React from 'react'
import { submitSurvey } from '../../redux/actions/surveyActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const SurveyReview = ({ setShowReview, form: { survey }, submitSurvey, history }) => {
  const { title, subject, body, recipients } = survey.values

  return (
    <div style={{ marginTop: 50 }}>
      <h5>Merci de confirmer votre contenu</h5>
      <div>
        <div>
          <label>Titre de l'enquête:</label>
          <div>{title}</div>
        </div>
        <div>
          <label>Sujet:</label>
          <div>{subject}</div>
        </div>
        <div>
          <label>Contenu:</label>
          <div>{body}</div>
        </div>
        <div>
          <label>Destinataires:</label>
          <div>{recipients}</div>
        </div>
      </div>
      <button onClick={() => setShowReview(false)} className='btn-flat yellow darken-3 white-text'>
        Retour
      </button>
      <button onClick={() => submitSurvey(survey.values, history)} className='btn-flat teal white-text right'>
        Envoyer
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

const mapState = ({ form }) => ({ form })

export default connect(mapState, { submitSurvey })(withRouter(SurveyReview))
