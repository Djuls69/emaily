import React from 'react'

const Footer = () => {
  return (
    <footer style={{ position: 'absolute', bottom: 0, width: '100%' }} className='page-footer'>
      <div className='container center-align'>
        <h5 className='white-text'>Carte bancaire Virtuelle</h5>
        <p className='white-text'>4242 4242 4242 4242 - Expiration: 12/22 - Crypto: 123</p>
      </div>
      <div className='footer-copyright center-align'>
        <div className='container'>
          © 2020 Copyright{' '}
          <a className='white-text' href='https://www.juliendelusseau.fr/' target='_blank' rel='noopener noreferrer'>
            Julien Delusseau
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
