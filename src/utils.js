import c3 from 'c3'

export function formatDuration(seconds) {
  let date = new Date(null)
  date.setSeconds(seconds)
  const days = date.getDate()
  const hours = (days - 1) * 24 + date.getUTCHours()
  const minutes = date.getMinutes()
  const secs = date.getSeconds()
  return `${hours}:${minutes}:${secs}`
}

export function totalDuration(data) {
  let seconds = 0
  for (let item of data) {
    seconds += item.duration_in_seconds
  }
  return formatDuration(seconds)
}

export function generateGraph(div, data) {
  c3.generate({
    bindto: div,
    data: {
      json: data,
      keys: {
        value: ['duration_in_seconds']
      },
      types:{
        duration_in_seconds: 'bar'
      },
      colors: {
        duration_in_seconds: '#dedede'
      },
      names: {
        duration_in_seconds: 'Duration'
      }
    },
    axis: {
      x: {
        tick: {
          format: i => i+1
        }
      },
      y: {
        tick: {
          format: seconds => formatDuration(seconds)
        }
      }
    },
    tooltip: {
      format: {
        title: i => data[i].title
      }
    },
    bar:{
      width: {
        ratio: 0.7
      }
    }
  })
}
