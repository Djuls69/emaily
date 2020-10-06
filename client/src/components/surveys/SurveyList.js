import React, { useEffect } from 'react'
import { fetchSurveys } from '../../redux/actions/surveyActions'
import { connect } from 'react-redux'

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys()
  }, [fetchSurveys])

  return (
    <div>
      <h2>Liste de vos enquêtes</h2>
      {surveys.reverse().map(({ _id, title, body, createdAt, yes, no }) => (
        <div key={_id} className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>{title}</span>
            <p>{body}</p>
            <p className='right'>Créée le: {new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <div className='card-action'>
            <a href='#!' onClick={e => e.preventDefault()}>
              Oui: {yes}
            </a>
            <a href='#!' onClick={e => e.preventDefault()}>
              Non: {no}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapState = ({ surveys }) => ({ surveys })

export default connect(mapState, { fetchSurveys })(SurveyList)
