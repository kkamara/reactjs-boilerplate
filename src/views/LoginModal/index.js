import React from 'react';
import Modal from 'react-modal';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import jwt_decode from "jwt-decode";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function LoginModal() {
  const [modalIsOpen] = React.useState(true);

  function afterOpenModal() {
  }

  function closeModal() {
  }

  function submitForm(e) {
    e.preventDefault()
  }

  const responseMessage = async (response) => {
    console.log(response);
    /* decode token */
    // https://medium.com/@OloriAsabi/google-oauth2-using-the-new-google-identity-services-sdk-for-react-using-jwt-decode-d687d2e05aa2
    const userObject = jwt_decode(response.credential);
    //console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    const { name, sub, picture } = userObject;
    console.log(name, sub, picture)
  };
  
  const errorMessage = (error) => {
      console.log(error);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
      >
        <form onSubmit={submitForm}>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <div className="form-group">
            <label htmlFor="test">Test</label>
            <input 
              name='test'
              type="text" 
              placeholder='Test' 
              className="form-control" 
            />
          </div>
          <br />
          <button 
            className='btn btn-danger' 
            onClick={closeModal}
          >
            Close
          </button>
          <input 
            type='submit' 
            className='btn btn-success' 
            onClick={submitForm}
            value='Submit'
          />
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal