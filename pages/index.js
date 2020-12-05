import { Fragment } from 'react'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import GitHub from '../components/Icons/GitHub'
import { fonts, colors, breakpoints } from '../styles/theme'


export default function Home() {
  return (
		<Fragment>
      <AppLayout>
        <section>
          <img src='/img-fullstack.jpg' alt='logo' />
          <h1>Devter</h1>
          <h2>Talk about development <br />with developers 👨‍💻👩‍💻</h2>
          <div>
            <Button>
              <GitHub 
                width={24}
                height={24}
                fill='#fff'/>
              Login with Github
            </Button>
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
