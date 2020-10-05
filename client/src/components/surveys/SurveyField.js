import React from 'react'

const SurveyField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className='red-text' style={{ marginBottom: 20 }}>
        {meta.touched && meta.error}
      </div>
    </div>
  )
}

export default SurveyField
