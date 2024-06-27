import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const QuizTab = () => {
  return (
    <div>
        <Image width={500} height={400} src={`/images/quiz-picture.webp`} alt='quiz-picture' className='w-full h-auto' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 p-3'>
            <Link href="/" className='glass-button shadow rounded-sm py-1 text-center'>
            Old Testament Bible Trivia
            </Link>
            <Link href="/" className='glass-button shadow rounded-sm py-1 text-center'>
            New Testament Bible Trivia
            </Link>
        </div>

    </div>
  )
}

export default QuizTab