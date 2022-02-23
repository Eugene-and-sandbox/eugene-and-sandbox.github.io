const hobbiesIcons = document.querySelector('#hobbiesIcons'),
      hobbiesInfo = [
        {
          url: 'images/study.png',
          title: 'study'
        },
        {
          url: 'images/telescope.png',
          title: 'scince'
        },
        {
          url: 'images/headphones.png',
          title: 'music'
        },
        {
          url: 'images/camera.png',
          title: 'movies'
        },
        {
          url: 'images/jym.png',
          title: 'jym'
        },
        {
          url: 'images/games.png',
          title: 'games'
        }
      ]

hobbiesIcons.className = 'display-flex flex-wrap'
hobbiesIcons.style.margin = '0 -.5rem'

function hobbiesIconsCreationFunc(info) {
  const iconWraper = document.createElement('div'),
        divIcon = document.createElement('img'),
        titleItem = document.createElement('p')

  divIcon.classList.add('hobbies-icon-styles')
  divIcon.src = info.url

  iconWraper.classList.add('text-center')
  iconWraper.style.margin = '0 .5rem'
  iconWraper.style.border = '.05rem solid #2672AD'
  iconWraper.style.borderRadius = '.5rem'

  titleItem.innerText = info.title

  iconWraper.appendChild(divIcon)
  iconWraper.appendChild(titleItem)

  return iconWraper
}

hobbiesInfo.forEach(info => {
  hobbiesIcons.appendChild(hobbiesIconsCreationFunc(info))
})
