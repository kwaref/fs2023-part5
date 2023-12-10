import { useSelector, useDispatch } from 'react-redux'
import { getId } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({ type: 'VOTE_UP', payload: id })
  }

  const add = evt => {
    evt.preventDefault()
    const content = evt.target.anecdote.value
    evt.target.anecdote.value = ''
    dispatch({ 
      type: 'ADD',
      payload: {
        content,
        id: getId(),
        votes: 0
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App