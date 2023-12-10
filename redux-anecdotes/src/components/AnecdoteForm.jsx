import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

export const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const add = async evt => {
        evt.preventDefault()
        const content = evt.target.anecdote.value
        evt.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`you created ${content}`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </>
    )
}
