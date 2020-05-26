console.info('Made by SeanMcP – https://seanmcp.com')

// Title

document.title = document.title + ' – SeanMcP'

// Styles
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://raw.githubusercontent.com/SeanMcP/demo-shared/master/styles.css'
document.head.appendChild(link)

// Footer
const footer = document.createElement('footer')
footer.id = '__demo-shared__footer'
footer.innerHTML = 'Made by <a href="https://seanmcp.com">SeanMcP</a>'
document.body.appendChild(footer)
