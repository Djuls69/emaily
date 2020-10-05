import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = "Merci d'indiquer le titre"
  }
  if (!values.subject) {
    errors.subject = "Merci d'indiquer le sujet"
  }
  if (!values.body) {
    errors.body = "Merci d'indiquer le contenu"
  }
  if (!values.recipients) {
    errors.recipients = "Merci d'indiquer les destinataires"
  } else {
    errors.recipients = validateEmails(values.recipients || '')
  }

  return errors
}

const SurveyForm = ({ handleSubmit, setShowReview }) => {
  return (
    <form style={{ marginTop: 50 }} onSubmit={handleSubmit(() => setShowReview(true))}>
      <div>
        <Field type='text' label='Titre' name='title' component={SurveyField} />
        <Field type='text' label='Sujet' name='subject' component={SurveyField} />
        <Field type='text' label='Contenu' name='body' component={SurveyField} />
        <Field type='text' label='Destinataires' name='recipients' component={SurveyField} />
      </div>
      <Link to='/surveys' className='red btn-flat white-text'>
        Annuler
      </Link>
      <button type='submit' className='teal btn-flat right white-text'>
        Valider
        <i className='material-icons right'>done</i>
      </button>
    </form>
  )
}

export default reduxForm({ form: 'survey', validate, destroyOnUnmount: false })(SurveyForm)
