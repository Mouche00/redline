import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const Test = () => {
    const options = {
      authEndpoint : 'http://localhost/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcxMzQ3MDE1MCwiZXhwIjoxNzEzNDczNzUwLCJuYmYiOjE3MTM0NzAxNTAsImp0aSI6Ilh0cFFuQ2JjNmJERlM0N2EiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.N-7S3Nzi4Xb8C1hv303SEADmZdG49hkhJtI1T1neaW8`,
          Accept: 'application/json',
        },
      },
      broadcaster: 'pusher',
      key: 'app-key',
      wsHost: 'localhost',
      wsPort: '6001',
      wssPort: '6001',
      forceTLS: false,
      encrypted: true,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      cluster: 'mt1'
  }

  
  try{
    const echo = new Echo(options)

    echo.join('chat.dm.1')
    .here(function (user) {
        // runs when you join
        console.table(user)
    })
    .listen('TestSend', (data) => {
        // runs when another member joins
        console.log(data)
    })
  } catch(error) {
    console.log('Error', error)
  }
}

export default Test
