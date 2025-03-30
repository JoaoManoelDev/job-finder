"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/src/components/ui/input"

export const SearchJobInput = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const previousSearchText = searchParams.get('search')

  const handleSearchChange = ({ value }: { value: string }) => {
    const urlSearchParams = new URLSearchParams(searchParams)

    urlSearchParams.set('search', value.trim())

    if (!value) {
      urlSearchParams.delete('search')
    }
    
    router.replace('?' + urlSearchParams)
  } 

  return (
    <Input
      defaultValue={previousSearchText ?? ''}
      className="w-96 text-4xl h-12"
      placeholder='Pesquisar vaga'
      icon={<Search className="h-5 w-5" />}
      onChange={(e) => handleSearchChange({ value: e.target.value })}
    />
  )
}
