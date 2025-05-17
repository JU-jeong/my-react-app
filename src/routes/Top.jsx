import { Link } from 'react-router-dom'

function Top () {
  return (
    <div>
      <h1>トップページ</h1>
      <hr />
      <Link to="/events/monthlydealevent">セールページ</Link>
    </div>
  )
}

export default Top