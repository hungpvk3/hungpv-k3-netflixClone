import { createContext, useReducer } from 'react'
import { InfoReducer } from '../reducers/InfoReducer'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


export const InfoContext = createContext()

const InfoContextPovider = ({ children }) => {

    const [infoState, dispatch] = useReducer(InfoReducer, {
        data: [
            {
                id: "1",
                name: 'Facebook',
                image: <FacebookIcon/>,
                url: 'https://www.facebook.com/profile.php?id=100012857265984'
            },
            {
                id: "2",
                name: 'Youtube',
                image: <SubscriptionsIcon/>,
                url: 'https://www.youtube.com/channel/UCe41QIG9DYb0Em4xu3B1MgQ'
            },
            {
                id: "3",
                name: 'Gmail',
                image: <MailOutlineIcon/>,
                url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=phamhungvan11@gmail.com'
            },
            {
                id: "4",
                name: 'Phone',
                image: <PhoneInTalkIcon/>,
                url: 'tel:0396328175'
            },
        ]
    })

    const infoDataDefault = {
        infoState
    }

    return (
        <InfoContext.Provider value={infoDataDefault}>
            { children }
        </InfoContext.Provider>
    )
}

export default InfoContextPovider
