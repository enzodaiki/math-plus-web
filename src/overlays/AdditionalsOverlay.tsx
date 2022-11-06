import '../styles/global.css'
import '../styles/reset.css'

import { Icon } from '../components/Icon' 

export function AdditionalsOverlay() {
  return (
    <>
      <div className="overflow-hidden absolute flex gap-12 w-64 h-full bg-white border-l-2">
        <div className="flex flex-col gap-11 px-5 py-5 w-full h-min">
          <div className="flex justify-end w-full">
            <div className="w-11 h-11">
              <Icon icon="https://itch.io/embed/1753816"></Icon>
            </div>
          </div>

          <div className="w-full h-52 rounded bg-gray-100">

          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 py-2 justify-center rounded-t-xl rounded-b bg-gray-100">
              <h2 className="text-3xl">Anotações</h2>
            </div>

            <div className="h-64 px-2 py-3 gap-2 rounded-t rounded-b-xl bg-gray-100">
              <div className="h-full overflow-y-auto no-scrollbar " contentEditable>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}