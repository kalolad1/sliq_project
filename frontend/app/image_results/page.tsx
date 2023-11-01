'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { saveAs } from 'file-saver'
import { Puff } from  'react-loader-spinner'


import { fetchImage } from '../api'

function ImageResultsPage (): any {
  const [loading, setLoading] = useState(true)
  const [img, setImg] = useState('');

  const searchParams = useSearchParams()
  const prompt = searchParams.get("prompt")!
  const height = Number(searchParams.get("height")!)
  const width = Number(searchParams.get("width")!)

  useEffect(() => {
    fetchImage(prompt, height, width)
      .then((imageBlob: any) => {
        console.log(imageBlob)
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function downloadImage() {
    saveAs(img, `${prompt}.png`)
  }

  if (loading) {
    return (
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    )
  }
  return (
    <div className='flex flex-col justify-center items-center space-y-10'>
      <img src={img} width="400" height="400" />
      <DownloadButton onClick={downloadImage}/>
    </div>
  )
}

function DownloadButton (props: any): any {
  
  return (
    <div className=''>
      <button
        type="submit"
        className="button-17 font-karla"
        onClick={props.onClick}
      >
        Download image
      </button>
    </div>
  )
}

export default ImageResultsPage
