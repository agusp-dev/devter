import { Fragment } from 'react'
import Link from 'next/link'

const Timeline = () => {
	return (
		<Fragment>
			<h2>This is a Timeline view</h2>
			<h4>Holis</h4>
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

export default Timeline