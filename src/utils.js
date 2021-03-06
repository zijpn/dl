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

export function totalDuration(data, speed) {
  let seconds = 0
  for (let item of data) {
    seconds += item.duration_in_seconds
  }
  if (speed > 1) {
    seconds /= speed
  }
  return formatDuration(seconds)
}

export function thumbnailLink(id) {
  return `https://i.ytimg.com/vi/${id}/default.jpg`
}

export function videoLink(id) {
  return `https://www.youtube.com/watch?v=${id}`
}

export function generateGraph(div, data, width) {
  c3.generate({
    bindto: div,
    size: {
      height: 240,
      width: width || 50 + data.length * 16
    },
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
      },
      onclick: function(d) {
        // open video in new window
        const url = videoLink(data[d.index].videoId)
        window.open(url,'_blank')
      }
    },
    legend: {
      show: false
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
