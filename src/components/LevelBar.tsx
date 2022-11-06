import '../styles/global.css'

export function LevelBar() {
  return (
    <>
      <div className="flex flex-col w-72 h-16 gap-2 justify-center">
        <div className="flex justify-between text-xl">
          <p>Level 10</p>
          <p>xp 423/1000</p>
        </div>

        <div className=" w-full h-8 rounded-2xl bg-gray-300">
          <div className="w-32 h-8 rounded-2xl bg-sky-300">


          </div>
        </div>
      </div>
    </>
  )
}