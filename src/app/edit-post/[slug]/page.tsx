import React from 'react'
import { useState } from 'react'
import appwriteService from "@/appwrite/config"
import { useEffect } from 'react'
import Container from "@/components/Container"
import PostForm from "@/components/post-form/PostForm"
import { useRouter } from 'next/navigation'
import ProtectedLayout from '@/components/ProtectedLayout'

function EditPost({params}:any) {
  const [post, setPost] = useState(null)
  const {slug} = params
  const router = useRouter()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post:any) => {
        if (post) {
          setPost(post)
        }else {
            router.push("/")
        }
      })
    }
  }, [slug, router])

  return (
    <ProtectedLayout authentication>
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
    </ProtectedLayout>
  )
}

export default EditPost