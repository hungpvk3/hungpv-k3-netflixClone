import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useContext, useState } from 'react'
import { InfoContext } from '../contexts/InfoContext'
import user from '../asset/img/user.png'
import { Button, Link } from '@material-ui/core'
import './style.css'
 
const App = () => {

    // Context
    const { infoState: { data } } = useContext(InfoContext)


    // State
    const [list, setList] = useState(data)
    console.log(list)

    // handle
    const reorder = (list, start, end) => {
        const result = Array.from(list)
        const [remove] = result.splice(start, 1)
        result.splice(end, 0, remove)

        return result
    }

    const onEnd = (result) => {
        setList(reorder(list, result.source.index, result.destination.index))
    }

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="media heart_card mt-3">
                <img className="align-self-start m-3 heart_card-user" src={user} alt="Generic " />
                <div className="media-body mt-3">
                    <h5 className="mt-0">Kevin Pham</h5>
                    <p>Hi, mình là kevin pham rất hân hạnh được hợp tác dfdcdcdcdcdc</p>
                    <Button variant="outlined" color="primary" className="btn mb-3">
                        Edit Info
                    </Button>
                </div>
            </div>
        </div>
        
        <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId="123456">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                    >
                        {list.map((item, index) => (
                            <Draggable
                                draggableId={item.id}
                                key={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Link href={item.url}>
                                            <div className="card_content-item mt-3">
                                                <div className="card_content-item-icon">
                                                    <div className="card_content-item-img ml-3 mr-3">{item.image}</div>
                                                    {item.name}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        </div>
        </>
    )
}

export default App