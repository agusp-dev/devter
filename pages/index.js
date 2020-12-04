import { Fragment } from 'react'
import styles, { globalStyles } from './styles'
import { fonts, colors, breakpoints } from '../styles/theme'


export default function Home() {
  return (
		<Fragment>

			<section>
				<img src='/img-fullstack.jpg' alt='logo' />
				<h1>Devter</h1>
				<h2>Talk about development <br />with developers 👨‍💻👩‍💻</h2>
			</section>

			<style jsx>{`
				img {
					width: 120px;
					border-radius: 50%;
				}	
				section {
					display: grid;
					height: 100vh;
					place-content: center;
					place-items: center;
				}
				h1 {
					color: ${ colors.primary };
					font-weight: 800;
					margin-bottom: 0;
				}

				h2 {
					color: ${ colors.secondary };
					font-size: 18px;
					margin-bottom: 0;
				}

			`}</style>

		</Fragment>
  )
}
