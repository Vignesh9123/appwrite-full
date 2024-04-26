import ProtectedLayout from '@/components/ProtectedLayout'
import React from 'react'
import Container from "@/components/Container"
import PostForm from '@/components/post-form/PostForm'
function page() {
  return (
    <ProtectedLayout authentication>
    <div>
    <Container>
        <PostForm />
      </Container>
    </div>
    </ProtectedLayout>
  )
}

export default page
