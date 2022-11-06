import '../styles/global.css'
import '../styles/reset.css'

import { GameOne } from '../components/GameOne'

export function Games() {
  return (
    <>
      <div className="flex gap-20 w-screen h-screen justify-center bg-gray-50">
          <div className="overflow-y-auto no-scrollbar flex flex-col gap-10 py-10 px-4 items-center absolute w-7/12 h-full">
            <GameOne></GameOne>
            <GameOne></GameOne>
            <GameOne></GameOne>
            <GameOne></GameOne>
            <GameOne></GameOne>
          </div>
      </div>
    </> 
  )
}