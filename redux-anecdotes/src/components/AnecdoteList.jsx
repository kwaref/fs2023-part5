import { useSelector, useDispatch } from 'react-redux'
import { voteUp } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
      if (filter === '') {
          return anecdotes
      }
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  })

  const dispatch = useDispatch()

  const vote = (id) => {
      console.log('vote', id)
      dispatch(voteUp(id))
      const anecdote = anecdotes.find(a => a.id === id)
      dispatch(setNotification(`you voted ${anecdote.content}`))
      setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
  <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
  </>
  )
}
