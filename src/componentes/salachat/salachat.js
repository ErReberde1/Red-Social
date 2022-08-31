import React from 'react'
import TagMainGrid from '../../util/cajas/tagmaingrid'
import {useSelector} from 'react-redux'
import Main from '../../util/cajas/tagmain'
import Chat from '../../util/chat/chat.js'


export default function Salachat() {
  
  return (
    <div>
        <TagMainGrid>
            <Main className="tagMainGri-grid-70"><Chat/></Main>
            <Main className="tagMainGri-grid-30"></Main>
        </TagMainGrid>
  </div>
  )
}
