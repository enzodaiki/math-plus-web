import '../styles/global.css'
import '../styles/reset.css'

import { Icon } from '../components/Icon'
import { LevelBar } from '../components/LevelBar'
import { TableInfo } from '../components/TableInfo'

export function Home() {
  return (
    <>
      <div className="flex gap-20 w-screen h-screen justify-center bg-gray-50">
        <div className="overflow-y-auto no-scrollbar flex flex-col gap-10 py-10 px-4 items-center absolute w-7/12 h-full" >
          <header className="flex justify-between items-center w-full h-32">
            <div className="flex gap-10 items-center">
              <div className="w-32 h-32">
                <Icon></Icon>
              </div>

              <h1 className="text-4xl">User name</h1>
            </div>

            <LevelBar></LevelBar>
          </header>

          <main className="flex flex-col gap-6 w-full h-auto">
            <h2 className="text-3xl">Ranks global</h2>
            <table className="flex flex-col gap-1 w-4/6">
              <TableInfo color="#fcd34d"></TableInfo>
              <TableInfo color="#d1d5db"></TableInfo>
              <TableInfo color="#b45309"></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
              <TableInfo></TableInfo>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}