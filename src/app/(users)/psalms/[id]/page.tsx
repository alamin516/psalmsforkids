'use client'
import SimpleLayout from '@/components/layouts/Simple'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const id = useSearchParams()

  return (
    <SimpleLayout>
      <div>
        {id}
      </div>
    </SimpleLayout>
  )
}

export default page