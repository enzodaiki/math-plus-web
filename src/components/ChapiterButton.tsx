import '../styles/reset.css'

export interface ChapiterButtonProps {
  title: string,
  description: string,
  color?: string,
}

export function ChapiterButton({ title, description, color }: ChapiterButtonProps) {
  return (
    <>
      <div className="flex justify-between w-full h-36 rounded-3xl my-shadow">
        <div className="flex flex-col h-32 gap-2 px-7 py-5">
          <h2 className="text-4xl text-white">{title}</h2>
          <p className="text2xl text-gray-500">{description}</p>
        </div>

        <div className="flex items-center justify-center rounded-r-3xl w-48 bg-white">
          <h3 className="text-4xl">Ler</h3>
        </div>
      </div>
    </>
  )
}