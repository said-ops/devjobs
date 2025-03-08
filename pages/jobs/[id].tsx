import React from 'react'
import { useRouter } from 'next/router'

function Details() {
    const router = useRouter()
    const {id}=router.query
  return (
    <div>[this is the job id {id}</div>
  )
}

export default Details