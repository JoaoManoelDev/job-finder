"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/src/components/ui/input"
import { useDebounce } from "@/src/hooks/use-debounce"
 
export const SearchJobInput = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const previousSearchText = searchParams.get('search')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e?.target?.value ?? ''

    const urlSearchParams = new URLSearchParams(searchParams)

    if (text) {
      urlSearchParams.set('search', text.trim())
      urlSearchParams.delete('page')
    }

    if (!text) {
      urlSearchParams.delete('search')
    }
    
    router.replace('?' + urlSearchParams)
  }

  const debounceHandleSearchChange = useDebounce({
    callback: (e) => handleSearchChange(e)
  })

  return (
    <Input
      defaultValue={previousSearchText ?? ''}
      className="w-96 text-4xl h-12"
      placeholder='Pesquisar vaga'
      icon={<Search className="h-5 w-5" />}
      onChange={debounceHandleSearchChange}
    />
  )
}
