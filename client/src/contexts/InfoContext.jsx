import { createContext, useReducer } from 'react'
import { InfoReducer } from '../reducers/InfoReducer'


export const InfoContext = createContext()

const InfoContextPovider = ({ children }) => {

    const [infoState, dispatch] = useReducer(InfoReducer, {
        data: [
            {
                id: "1",
                name: 'One'
            },
            {
                id: "2",
                name: 'Two'
            },
            {
                id: "3",
                name: 'Three'
            },
            {
                id: "4",
                name: 'Four'
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
