'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function HomePage (): any {
  return (
    <div>
      <ImageGeneratorForm />
    </div>
  )
}

function ImageGeneratorForm (): any {
  const router = useRouter()

  function handleSubmit (event: any): any {
    event.preventDefault()
    const formData = new FormData(event.target)
    const prompt = formData.get('inputText') as string
    const height = formData.get('height') as string
    const width = formData.get('width') as string

    const params = {
      prompt,
      height,
      width
    }
    const urlParams = new URLSearchParams(params).toString()
    router.push('image_results?' + urlParams)
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center space-y-10 text-xl font-merriweather"
    >
      <PromptTextArea />
      <DimensionInput />
      <GoButton />
    </form>
  )
}

function DimensionInput (): any {
  return (
    <div className="flex space-x-3">
      <DimensionTextArea name={'height'}/>
      <div className="flex flex-col justify-center">
        X
      </div>
      <DimensionTextArea name={'width'}/>
    </div>
  )
}

function DimensionTextArea (props: any): any {
  const [inputTextValue, setInputTextValue] = useState('1024')

  function handleInputChange (Event: any): any {
    setInputTextValue(Event.target.value)
  }

  return (
    <textarea
      name={props.name}
      value={inputTextValue}
      onChange={handleInputChange}
      rows={1}
      cols={4}
      className="border border-2 border-black rounded-lg text-gray-900 p-2.5"
    />
  )
}

function PromptTextArea (): any {
  const [inputTextValue, setInputTextValue] = useState('')

  function handleInputChange (Event: any): any {
    setInputTextValue(Event.target.value)
  }

  return (
    <textarea
      name="inputText"
      value={inputTextValue}
      onChange={handleInputChange}
      rows={5}
      cols={60}
      placeholder="espresso machine and barista"
      className="border border-2 border-black rounded-lg text-gray-900 p-2.5 font-merriweather"
    />
  )
}

function GoButton (): any {
  return (
    <button
      type="submit"
      className="button-17 font-karla"
    >
      Generate image
    </button>
  )
}

export default HomePage
