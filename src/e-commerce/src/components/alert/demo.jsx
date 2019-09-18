import React from 'react'
import Alert from '../alert/alert'

const testButton = (props) => {
<Button variant="primary" onClick={<Alert mainButtonTitle="Log out" no="Cancel" yes="Yes" children="Are you sure you want to log out?" url="/app"/>}>
                {props.mainButtonTitle}
            </Button>
}

export default testButton