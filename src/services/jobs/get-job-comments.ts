import { Comment } from "./interfaces"

interface GetJobCommentRequest {
  jobId: string
}

interface GetJobCommentResponse {
  data: Comment[] | null
  error: boolean
  messageError?: string
}

export const getJobComments = async ({
  jobId
}: GetJobCommentRequest): Promise<GetJobCommentResponse> => {
  try {
    const response = await fetch(`${process.env.SERVER_API}/job-board/jobs/${jobId}/comments?slow=true`)

    if (response.status === 200) {
      const comments: { data: Comment[] } = await response.json()

      return {
        data: comments.data,
        error: false
      }
    }

    if (response.status === 404) {
      return {
        data: null,
        error: true,
        messageError: 'Nenhum comentário encontrado.'
      }
    }

    return {
      data: null,
      error: true,
      messageError: 'Erro ao buscar comentários. Tente novamente mais tarde.'
    }

  } catch {
    return {
      data: null,
      error: true,
      messageError: 'Ocorreu um erro inesperado no servidor ao buscar os comentários.'
    }
  }
}