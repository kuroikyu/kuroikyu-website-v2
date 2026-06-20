import Container from '@/app/_components/container'
import { HeroPost } from '@/app/_components/hero-post'
import { MorePosts } from '@/app/_components/more-posts'
import { getAllPosts } from '@/lib/api'
import BlogHeader from './_components/BlogHeader'
import AboutMe from './_components/AboutMe'

export default function Index() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <main>
      <Container>
        <BlogHeader
          level={1}
          description='Embark on a nerdy adventure with me as we explore the tech, games, and all things geeky.'
        />
        <AboutMe />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </Container>
    </main>
  )
}
