const portfolioItems = document.querySelectorAll('.item')

    portfolioItems.forEach((portfolio ) => {

    portfolio.addEventListener('mouseover', () => {
        portfolio.querySelector('.background').classList.add('img-darken')
    })
    portfolio.addEventListener('mouseout', () => {
        portfolio.querySelector('.background').classList.remove('img-darken')
    })
  })

