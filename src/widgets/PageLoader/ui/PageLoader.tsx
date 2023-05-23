import React from 'react'
import cls from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.page, {}, [className])}>
      <Loader />
    </div>
  )
}
