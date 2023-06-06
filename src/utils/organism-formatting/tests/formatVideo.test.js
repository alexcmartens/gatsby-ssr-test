import renderer from "react-test-renderer"
import formatVideo, { parseVideoUrl, formatVideoCode } from "../formatVideo"

describe("formatVideo", () => {
  it("should return data null if no data is passed into method", () => {
    const result = formatVideo()
    expect(result).toEqual(null)
  })

  it("should returned formatted data for Vidyard vidoes", () => {
    const data = {
      videoTitle: "hello",
      videoCode: null,
      videoType: null,
      uuid: "oujmBkR77vwzBMV2gFoFtR",
      videoUrl: null,
      videoThumbnail: {
        focalPoint: {
          focalPoint: {
            y: 2086,
            x: 3086,
          },
        },
        title: "New Test dog image",
        altText: "alt text",
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          },
        },
      },
    }
    const formattedData = {
      thumbnail: {
        focalPointImage: {
          height: undefined,
          title: "New Test dog image",
          url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          width: undefined,
          x: 3086,
          y: 2086,
        },
      },
      closeTranscript: null,
      transcript: null,
      transcriptText: null,

      video: {
        videoTitle: "hello",
        allowFullScreen: true,
        url: null,
        uuid: "oujmBkR77vwzBMV2gFoFtR",
        vidyard: true,
      },
    }
    const result = formatVideo(data)
    expect(result).toEqual(formattedData)
  })

  it("should returned formatted data for Vimeo vidoes", () => {
    const data = {
      videoTitle: "hello",
      videoCode: "vimeocode",
      videoType: "Vimeo",
      videoUuid: null,
      videoUrl: null,
      videoThumbnail: {
        focalPoint: {
          focalPoint: {
            y: 2086,
            x: 3086,
          },
        },
        title: "New Test dog image",
        altText: "alt text",
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          },
        },
      },
    }
    const formattedData = {
      thumbnail: {
        focalPointImage: {
          height: undefined,
          title: "New Test dog image",
          url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          width: undefined,
          x: 3086,
          y: 2086,
        },
      },
      closeTranscript: null,
      transcript: null,
      transcriptText: null,
      video: {
        videoTitle: "hello",
        videoTitle: "hello",
        allowFullScreen: true,
        url: "https://vimeo.com/vimeocode",
        uuid: undefined,
        vidyard: false,
      },
    }
    const result = formatVideo(data)
    expect(result).toEqual(formattedData)
  })

  it("should return formatted data for Youtube vidoes", () => {
    const data = {
      videoTitle: "hello",
      videoCode: "youtube-code",
      videoType: "Youtube",
      videoUuid: null,
      videoUrl: null,
      videoThumbnail: {
        focalPoint: {
          focalPoint: {
            y: 2086,
            x: 3086,
          },
        },
        title: "New Test dog image",
        altText: "alt text",
        image: {
          file: {
            url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          },
        },
      },
    }
    const formattedData = {
      closeTranscript: null,
      transcript: null,
      transcriptText: null,
      thumbnail: {
        focalPointImage: {
          height: undefined,
          title: "New Test dog image",
          url: "//images.ctfassets.net/citn2sn5tdjr/7wBhLKP8AN67gmNO0MJzsP/151f11bbe5130466fbe942aa63fd42fa/dog.jpg",
          width: undefined,
          x: 3086,
          y: 2086,
        },
      },
      video: {
        videoTitle: "hello",
        url: "https://www.youtube.com/embed/youtube-code",
        allowFullScreen: true,
        vidyard: false,
      },
    }
    const result = formatVideo(data)
    expect(result).toEqual(formattedData)
  })
})

describe("parseVideoUrl", () => {
  it("should return undefined if nothing is passed into method", () => {
    const result = parseVideoUrl()
    expect(result).toEqual(undefined)
  })

  it("should return video code if url is entered with correct format", () => {
    const result = parseVideoUrl("https://www.youtube.com/watch?v=YOUTUBE")
    expect(result).toEqual("YOUTUBE")

    const result1 = parseVideoUrl("https://vimeo.com/VIMEO")
    expect(result1).toEqual("VIMEO")
  })

  it("should return null if incorrect url is passed into method", () => {
    const result = parseVideoUrl("https://trimble.com/videoToDisplay")
    expect(result).toEqual(null)
  })
})

describe("formatVideoCode", () => {
  it("should return the 1st indice of an array.", () => {
    const result = formatVideoCode([
      "https://www.youtube.com/watch?v=",
      "YOUTUBE",
    ])
    expect(result).toEqual("YOUTUBE")
  })
  it("should return null if nothing is passed into method", () => {
    const result = formatVideoCode()
    expect(result).toEqual(null)
  })
  it("should return undefined if array that is passed into method is ledd than a lenght of 1", () => {
    const result = formatVideoCode(["LAURA"])
    expect(result).toEqual(undefined)
  })
})
