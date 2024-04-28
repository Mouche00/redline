/* eslint-disable no-unused-vars */
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const Test = () => {
    const options = {
      authEndpoint : 'http://localhost/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTcxMzUzNDEzMiwiZXhwIjoxNzEzNTM3NzMyLCJuYmYiOjE3MTM1MzQxMzIsImp0aSI6IlpCZElCRjdEdDB6WW9YQ04iLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.an2ffKWRc4yyjUTWqLfbgNgIogXItSAu-NBnYTeXHEY`,
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
        console.table(user)
    })
    .listen('.new-message', (data) => {
        console.log(data)
    })
  } catch(error) {
    console.log('Error', error)
  }
}

export default Test
