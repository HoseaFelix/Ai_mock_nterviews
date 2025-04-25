import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser,} from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getInterviewByUserId, getLatestInterviews } from '@/lib/actions/general.action'
const page = async () => {
  const user = await getCurrentUser()


  //fetching two stuffs at once without having to wait for one to finish

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!})
  ])


  const hasPastInterviews = userInterviews!?.length > 0;
  const hasUpcomingInterviews = latestInterviews!?.length > 0
  
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>

          <h2>Get intereview ready with AI-powered practice and Feeedback </h2>

          <p className='text-lg  '>
            practice on real interview questions and get instant feedback 
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='robot-dude' width={400} height={400} className='max-sm:hidden' />

      </section>

      <section className='flex flex-col gap-6 mt-8 '>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {
            hasPastInterviews ? (
              userInterviews?.map((interview)=>(
                <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />

              ))
            ) : (
              <p>You haven&apos;t taken any interviews yet</p>
            ) 
         }

        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>

        <div className='interviews-section'>
        {
            hasUpcomingInterviews ? (
              latestInterviews?.map((interview)=>(
                <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />

              ))
            ) : (
              <p>there are no new interviews available</p>
            ) 
         }
          {/* <p>There are no interviews available</p> */}
        </div>

      </section>
    </>
  )
}

export default page
