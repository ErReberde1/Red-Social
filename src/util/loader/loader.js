import React from 'react'
import {RotatingLines} from 'react-loader-spinner'
import './style.scss'

export default function Loader() {
  return (
    <div className="loader">
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="10"
            width="50"
            visible={true}
        />
    </div>
  )
}
