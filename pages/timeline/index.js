import { Fragment } from 'react'
import Link from 'next/link'

const Timeline = ({ name }) => {

	return (
		<Fragment>
      {console.log('timeline render', name)}
			<h2>This is a Timeline view</h2>
      <p>{`Hiii, ${ name }`}</p>
			<Link href="/">
				<a>Go Home</a>
			</Link>
			<style jsx>{`
				h2 {
					font-size: 36px;
					color: red;
				}
			`}</style>
		</Fragment>
	)
}

Timeline.getInitialProps = () => {
  // return { name: 'Agustin' }
  return fetch('http://localhost:3000/api/countries')
    .then(res => res.json())
    .then(response => response)
}

export default Timeline