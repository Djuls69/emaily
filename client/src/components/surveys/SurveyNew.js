import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyReview'

const SurveyNew = () => {
  const [showReview, setShowReview] = useState(false)

  return (
    <div>
      {!showReview ? <SurveyForm setShowReview={setShowReview} /> : <SurveyReview setShowReview={setShowReview} />}
    </div>
  )
}

export default reduxForm({ form: 'survey' })(SurveyNew)
