"use client"
import React from 'react'
import appwriteService from "@/appwrite/config"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '@/components/Container'
import PostCard from "@/components/PostCard"
import ProtectedLayout from '@/components/ProtectedLayout'


function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts:any) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  //TODO: add case for array length 0
  return (
    <ProtectedLayout authentication>
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post:any) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
    </ProtectedLayout>
  )
}

export default AllPosts