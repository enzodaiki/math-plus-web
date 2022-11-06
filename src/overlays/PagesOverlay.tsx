import '../styles/global.css'

import { Icon } from '../components/Icon'
import { PageButton, PageButtonProps } from '../components/PageButton'

export function PagesOverlay() {
  return (
    <>
      <div className="absolute flex gap-12 px-5 py-7 w-64 h-full bg-white border-r-2">
        <div className="flex flex-col gap-12 w-full h-min">

          <div className="flex gap-2 items-center">
            <div className="w-11 h-11">
              <Icon icon="https://lh3.google.com/u/0/d/1l6V_eP-NZnlFSXGU1frPvbo56WkFt_vM=w200-h190-p-k-nu-iv1"></Icon>
            </div>

            <div className="flex gap-1 items-center">
              <p className="text-3xl">Math</p>
              <div className="w-8 h-8">
                <Icon icon="https://lh3.google.com/u/0/d/1b-hoKaQxSZKWTuAWD6psRTL1DRas5eW7=w200-h190-p-k-nu-iv1"></Icon>
              </div>
            </div>
          </div>

          <PageButton icon="https://lh3.google.com/u/0/d/1YmmGe3fgr06ahOCmH4S52g1WTT2pZ59g=w200-h190-p-k-nu-iv1" content="Home"></PageButton>
          <PageButton icon="https://lh3.google.com/u/0/d/1O_InpLl0rw-73UdGnk4UzmvAK4hm9Yqz=w200-h190-p-k-nu-iv1" content="Capitulos"></PageButton>
          <PageButton icon="https://lh3.google.com/u/0/d/1oU8IL9upk9ErHHEgULZ4HdjI7Yt14OIl=w200-h190-p-k-nu-iv1" content="Questões"></PageButton>
          <PageButton icon="https://lh3.google.com/u/0/d/1EqQd0gWHRBgqrW3dknchEI7ubj31kO6Z=w200-h190-p-k-nu-iv1" content="Jogos"></PageButton>
        </div>
      </div>
    </>
  )
}