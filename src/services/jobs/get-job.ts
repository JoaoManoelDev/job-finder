import { Job } from "./interfaces"

interface GetJobRequest {
  jobId: string
}

interface GetJobResponse {
  data: Job | null
  error: boolean
  messageError?: string
}

export const getJob = async ({ jobId }: GetJobRequest): Promise<GetJobResponse> => {
  try {
    const response = await fetch(`${process.env.SERVER_API}/job-board/jobs/${jobId}?slow=true`)

    if (response.status === 200) {
      const job: { data: Job } = await response.json()

      return {
        data: job.data ?? null,
        error: false
      }
    }

    if (response.status === 404) {
      return {
        data: null,
        error: true,
        messageError: 'Vaga não encontrada.'
      }
    }

    return {
      data: null,
      error: true,
      messageError: "Erro ao buscar vaga. Tente novamente mais tarde.",
    };
  } catch {
    return {
      data: null,
      error: true,
      messageError: 'Ocorreu um erro inesperado no servidor ao buscar a vaga.'
    }
  }
}
