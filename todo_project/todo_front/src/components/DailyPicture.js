const DailyPicture = () => {
    const picURL = 'http://localhost:8081/kuva'
    return (
      <img src={picURL} alt='picture of the day' />
    )
  }

export default DailyPicture