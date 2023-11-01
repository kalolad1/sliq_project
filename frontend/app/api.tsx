import * as constants from './constants'

export async function fetchImage (prompt: string, height: number, width: number): Promise<any> {
  const data = {
    prompt: prompt,
    height: height,
    width: width
  }

  const fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json; charset=UTF-8',
    }
  }
  const response = await fetch(constants.IMAGE_GENERATION_ENDPOINT, fetchData)

  return await response.blob()
}
