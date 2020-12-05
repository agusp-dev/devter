import { Fragment } from 'react'
import { fonts, colors, breakpoints } from '../../styles/theme'

export default function Button ({ children, onclick }) {
  console.log(children)
  return (
    <Fragment>
      <button onclick={ onclick }>
        { children }
      </button>
      
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background-color: ${ colors.black };
          border: 0;
          color: ${ colors.white };
          cursor: pointer;
          border-radius: 100px;
          font-size: 16px;
          padding: 8px 24px;
          transition: opacity .3s ease;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:over {
          opacity: .7
        }
      `}</style>
    </Fragment>
  )
}