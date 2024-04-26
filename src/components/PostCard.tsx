import Link from 'next/link'
import React from 'react'
import service from '@/appwrite/config'
const PostCard = ({
    $id, title, image
}:any) => {
  return (
    <div>
      <Link href={`/post/${$id}`}>
      <div
        className='w-full bg-gray-100 rounded-xl p-4'
        >
            <div
            className='w-full justify-center mb-4'
            >
                <img src={service.getFilePreview(image)} alt={title}
                className='rounded-xl'
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>

      </Link>
    </div>
  )
}

export default PostCard
