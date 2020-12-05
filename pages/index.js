import { Fragment, useState, useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { colors } from '../styles/theme'
import { loginWithGitHub, onAuthStateChanged } from '../firebase/client'

export default function Home() {

  /**
   * User states
   * Allow no jumps in the UI.  
   * 
   * null --> not authenticated
   * undefined --> not know if is authenticated
   * object --> authenticated
   */
  const [user, setUser] = useState(undefined)

  const handleGitHubClick = () => {
    loginWithGitHub()
      .then(user => {
        setUser(user)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return (
		<Fragment>
      <AppLayout>
        <section>
          <img src='/devter.png' alt='logo' />
          <h1>Devter</h1>
          <h2>Talk about development <br />with developers 👨‍💻👩‍💻</h2>
          <div>
            {user === null && (
              <Button onclick={ handleGitHubClick }>
                <GitHub 
                  width={24}
                  height={24}
                  fill='#fff'/>
                Login with Github
              </Button>
            )}
            {user && Object.keys(user).length > 0 && (
              <div>
                <img src={ user.avatar } alt='logo'/>
                <strong>{ user.username }</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          height: 90%;
          display: grid;
          place-items: center;
          place-content: center;
        }

        h1 {
          color: ${ colors.secondary };
          font-weight: 800;
          margin-bottom: 0;
        }

        h2 {
          color: ${ colors.primary };
          font-size: 18px;
          margin-bottom: 0;
        }

        img {
          width: 120px;
          border-radius: 50%;
        }

        div {
          margin-top: 16px;
        }
      `}</style>
    </Fragment>
  )
}
