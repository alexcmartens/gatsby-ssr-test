const formatLottieAnimation = (src, style, ratio = null) => {
  if (!src) {
    return null
  } else {
    return {
      type: "lottieAnimation",
      src: src,
      style: style,
      ratio: {
        width: ratio?.width,
        height: ratio?.height,
      },
    }
  }
}

export default formatLottieAnimation
