import React from 'react'

const GAIssue = () => {
    return (
        <div><h2>Google Authenticator Issue</h2>
            <h4>Problem:</h4>
            1. Unable to login to cms
            <br></br>
            <br></br>
            <h4>Solutions:</h4>
            1. Download Google authenticator App <br></br>
            2. First Time login Cms with login id & password <br></br>
            3. Click on the profile name of user and then click on Google Authentication Settings <br></br>
            4. checked the boxes of active and relaxed mode <br></br>
            5. click on show hide qr code <br></br>
            6. scan that qr code from you google authenticator app
            then logout the cms<br></br>
            7. now login with id, password and otp which shown on google authenticator app <br></br>

        </div>
    )
}

export default GAIssue;