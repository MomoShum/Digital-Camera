let key_img = document.querySelectorAll('.key_img')
let key_text = document.querySelectorAll('.key_text')
let sort = document.querySelector('.sort')
let nav_bar = document.querySelector('.nav_bar')
let arr = [true, true, true]
for (let i = 0; i < key_img.length; i++) {
    key_img[i].addEventListener('click', (e) => {
        arr[i] = !arr[i]
        if (arr[i]) {
            key_img[i].src = 'images/down_key.svg'
            key_text[i].style.display = 'block'
        } else {
            key_img[i].src = 'images/right_key.svg'
            key_text[i].style.display = 'none'
        }
    })

}
let time_out

sort.addEventListener('mouseover', () => {
    nav_bar.style.display = 'block'
})
sort.addEventListener('mouseout', () => {
    clearTimeout(time_out)
    time_out = setTimeout(() => {
        nav_bar.style.display = 'none'
    }, 1500);
})
nav_bar.addEventListener('mouseover', () => {
    nav_bar.style.display = 'block'
})
nav_bar.addEventListener('mouseout', () => {
    clearTimeout(time_out)
    time_out = setTimeout(() => {
        nav_bar.style.display = 'none'
    }, 1500);
})