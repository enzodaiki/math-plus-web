import '../styles/global.css'

import { Icon, IconProps } from '../components/Icon'
import { ReactPropTypes } from 'react'

export interface PageButtonProps {
  content: string,
  icon: string,
};

export function PageButton({ content, icon }: PageButtonProps) {
  return (
    <>
      <div className="flex gap-2 px-1 py-3 items-center w-52 h-14 hover:bg-gray-200 rounded-xl">
        <div className="w-8 h-8">
          <Icon icon={icon}></Icon>
        </div>
        <p className="text-2xl">{content}</p>
      </div>
    </>
  )
};