import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const AppFooter = () => {

    return <div className='footer'>
       <FontAwesomeIcon icon={faCopyright} /> 2025 Verdera. All rights reserved.
    </div>
}

export default AppFooter
