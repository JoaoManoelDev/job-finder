import { Job, JobsLinks, JobsMeta } from "./interfaces"

interface GetJobsRequest {
  search: string
  page: string
}

interface GetJobsResponse {
  jobs: {
    data: Job[],
    meta: JobsMeta,
    links: JobsLinks
  } | null
  error: boolean
  messageError?: string
}

export const getJobs = async ({
  search,
  page
}: GetJobsRequest): Promise<GetJobsResponse> => {
  try {
    const url = new URL(`${process.env.SERVER_API}/job-board/jobs`)

    if (search) {
      url.searchParams.set('search', search)
    }

    if (page) {
      url.searchParams.set('page', page)
    }

    const response = await fetch(url)

    if (response.status === 200) {
      const jobs: { data: Job[], links: JobsLinks, meta: JobsMeta } = await response.json()

      return {
        jobs: jobs ?? null,
        error: false
      }
    }

    if (response.status === 404) {
      return {
        jobs: null,
        error: true,
        messageError: 'Vagas não encontrada.'
      }
    }

    return {
      jobs: null,
      error: true,
      messageError: "Erro ao buscar vagas. Tente novamente mais tarde.",
    };
  } catch {
    return {
      jobs: null,
      error: true,
      messageError: 'Ocorreu um erro inesperado no servidor ao buscar a vagas.'
    }
  }
}
