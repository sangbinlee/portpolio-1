'use client'

import { Children } from "react"


interface Props{
  children: React.ReactNode
}


export default function GlobalStyleProvider({Children}: Props){
  return(
    <>
    {Children}
    </>
  )

}
