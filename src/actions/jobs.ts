"use server"

import { redirect } from "next/navigation"

export const deleteJob = async (_: unknown, formData: FormData) => {
  const jobId = formData.get('id')

  const response = await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`, {
    method: 'DELETE',
  })

  if (response.ok) {
    redirect('/jobs')
  }
}

export const createJob = async (
  _: unknown,
  formData: FormData
) => {
  const response = await fetch(`https://apis.codante.io/api/job-board/jobs`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    return {
      error: true,
      message: (await response.json()).message
    }
  }
  
  redirect('/jobs')
}
