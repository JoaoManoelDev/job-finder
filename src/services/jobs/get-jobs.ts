import { Job } from "./interfaces"

interface GetJobsRequest {
  search: string
}

interface GetJobsResponse {
  data: Job[] | null
  error: boolean
  messageError?: string
}

export const getJobs = async ({
  search
}: GetJobsRequest): Promise<GetJobsResponse> => {
  try {
    const url = new URL(`${process.env.SERVER_API}/job-board/jobs`)

    if (search) {
      url.searchParams.set('search', search)
    }

    const response = await fetch(url)

    console.log("RESPONSE JOBS", response)

    if (response.status === 200) {
      const job: { data: Job[] } = await response.json()

      return {
        data: job.data ?? null,
        error: false
      }
    }

    if (response.status === 404) {
      return {
        data: null,
        error: true,
        messageError: 'Vagas não encontrada.'
      }
    }

    return {
      data: null,
      error: true,
      messageError: "Erro ao buscar vagas. Tente novamente mais tarde.",
    };
  } catch {
    return {
      data: null,
      error: true,
      messageError: 'Ocorreu um erro inesperado no servidor ao buscar a vagas.'
    }
  }
}
