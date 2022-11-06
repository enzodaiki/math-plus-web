import '../styles/global.css'

export function TableInfo(props: any) {
  return (
    <>
      <tr className="colors flex gap-1">
        <th className="flex w-16 h-16 rounded-md items-center justify-center bg-gray-200"style={{backgroundColor: props.color}}>{props.children}1</th>
        <th className="flex w-80 h-16 rounded-md items-center justify-center bg-gray-200">User name</th>
        <th className="flex w-48 h-16 rounded-md items-center justify-center bg-sky-300">xp 000000</th>
      </tr>
    </>
  )
}