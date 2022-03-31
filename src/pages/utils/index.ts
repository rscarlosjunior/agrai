export const Contents = {
  about: {
    slogan: {
      title_mobile: 'Existimos para aproximar o campo da cidade',
      title_desk: 'Existimos para aproximar o campo da cidade',
      description:
        'Ad aliquip sint ut qui ad esse aliqua ipsum sunt. Sint excepteur laboris qui eiusmod anim magna deserunt eiusmod nostrud.',
      buttons: false,
      img: 'https://i.imgur.com/pY3zjq3.png'
    }
  },
  home: {
    slogan: {
      title_mobile: 'A um clique do campo',
      title_desk: 'Qui consectetur ea in duis.',
      description:
        'Ad aliquip sint ut qui ad esse aliqua ipsum sunt. Sint excepteur laboris qui eiusmod anim magna deserunt eiusmod nostrud.',
      buttons: true,
      img: 'https://i.imgur.com/yRkUnLG.png'
    }
  },
  registerClient: {},
  registerProductor: {}
}

export function whatsapp() {
  window.location.href =
    'https://api.whatsapp.com/send?phone=5527999096496&text=Bom dia'
}
export function linkedin() {
  window.location.href =
  'https://www.linkedin.com/company/agraibrasil/'
}
export function instagram() {
  window.location.href =
  'https://www.instagram.com/agraibrasil/'
}

export function filterDatas(type, content) {
  const filter = content.filter((item) => item.type === type)

  let array = []

  if (type !== 'slogan') {
    array = filter[0].data.content
      ? filter[0].data.content
      : filter[0].data.items
  } else {
    return filter[0].data
  }

  let items = []

  switch (type) {
    case 'testimonials':
      array.forEach((element) => {
        const item = {
          rate: element.rate,
          comment: element.testimonial[0].text,
          name: element.enterprise[0].text,
          slogan: element.companydescription[0].text,
          photo: element.photo[0].text
        }
        items.push(item)
      })
      break
    case 'differentials':
      array.forEach((element) => {
        const item = {
          title: element.title[0].text,
          icon: element.img[0].text,
          isSecondLine: element.secondline
        }
        items.push(item)
      })
      break
    case 'agrainum':
      array.forEach((element) => {
        const item = {
          title: element.title[0].text,
          description: element.description[0].text,
          value: element.value
        }
        items.push(item)
      })
      break
    case 'carousel':
      array.forEach((element) => {
        const item = {
          title: element.title[0].text,
          description: element.description[0].text,
          icon: element.img[0].text,
          last: element.last
        }
        items.push(item)
      })
      break
  }
  return items
}

export const variables = {
  PAGES: {
    HOME: 'home',
    ABOUT: 'about'
  },
  TYPES: {
    SLOGAN: 'slogan',
    CAROUSEL: 'carousel',
    NUMBER: 'agrainum',
    DIFF: 'differentials',
    TESTIMONIALS: 'testimonials'
  }
}
