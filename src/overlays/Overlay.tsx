import '../styles/global.css'

import { PagesOverlay } from './PagesOverlay'
import { AdditionalsOverlay } from './AdditionalsOverlay'

export function Overlay() {
  return (
    <>
      <div className="absolute flex w-screen h-screen">
        <div className="flex justify-start w-1/2">
          <PagesOverlay></PagesOverlay>
        </div>

        <div className="flex justify-end w-1/2">
          <AdditionalsOverlay></AdditionalsOverlay>
        </div>
      </div>
    </>
  )
}