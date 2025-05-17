function Profile (props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.introduction}</p>
        <dl>
          <dt>住所</dt>
          <dd>{props.address}</dd>
          <dt>年齢</dt>
          <dd>{props.age}歳</dd>
        </dl>
      </div>
    )
  }
  
  export default Profile