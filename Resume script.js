// Загрузка фото

const input = document.querySelector('.content-first--image--input')
const label = document.querySelector('.content-first--image--label')
const photo = document.querySelector('.content-first--image--foto')

input.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            photo.src = e.target.result;
            photo.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Пожалуйста, выберите файл изображения');
    }
});

document.addEventListener('mousemove', (event) => {
    if (event.target.closest('.content-first--image')) {
        photo.style = `filter: blur(0.7px);`
        label.style = `opacity: 100;`
    }
})

document.addEventListener('mouseout', (event) => {
    if (event.target.closest('.content-first--image')) {
        photo.style = `filter: blur(0);`
        label.style = `opacity: 0;`
    }
})


// Скачивание PDF

const button = document.querySelector('.pdf')

function printToPDF() {
    window.print();
}

button.addEventListener('click', printToPDF)


// Текст

const inputName1 = document.querySelector('.content-first__box-first--text-second')
const inputName2 = document.querySelector('.content-first__box-first--text-third')
inputName1.value = 'Karthik SR'
inputName2.value = 'UX/UI Designer'

const inputLanguages1 = document.querySelector(".content-first__box-second__Languages__first--name")
const inputLanguages2 = document.querySelector(".content-first__box-second__Languages__second--name")
const inputLanguages3 = document.querySelector(".content-first__box-second__Languages__third--name")
inputLanguages1.value = 'English'
inputLanguages2.value = 'Malayalam'
inputLanguages3.value = 'Hindi'
const line1 = document.querySelector('.content-first__box-second__Languages__first--line')

const inputExperience1 = document.querySelector(".content-second__column-first__floor-first__ciel--text-first")
const inputExperience2 = document.querySelector(".content-second__column-first__floor-first__floor--text-first--element-first")
const inputExperience3 = document.querySelector(".content-second__column-first__floor-first__floor--text-first--element-second")
const inputExperience4 = document.querySelector(".content-second__column-first__floor-first__floor--text-second")
inputExperience1.value = 'Jun. 2023 - Present'
inputExperience2.value = 'Marketing Manager'
inputExperience3.value = 'Pankayam | Full-time'
inputExperience4.value = 'Strategy development and planning of campaigns that promote the business and generate genuine traffic SEO Content Creation for Blogs, Website, Social media'

const inputExperience5 = document.querySelector(".content-second__column-first__floor-second--zogolovok")
const inputExperience6 = document.querySelector(".content-second__column-first__floor-second__column__left--text--first")
const inputExperience7 = document.querySelector(".content-second__column-first__floor-second__column__left--text--second")
const inputExperience8 = document.querySelector(".content-second__column-first__floor-second__column--right")
inputExperience5.value = '2017 - Present'
inputExperience6.value = 'Graphic / Web designer'
inputExperience7.value = 'Freelance'
inputExperience8.value = 'Development of internal projects from scratch, product design of brands Landing page, webapps and hybrid apps Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.'

const inputExperience9 = document.querySelector(".content-second__column-first__floor-third--zogolovok")
const inputExperience10 = document.querySelector(".content-second__column-first__floor-third__column__left--text--first")
const inputExperience11 = document.querySelector(".content-second__column-first__floor-third__column__left--text--second")
const inputExperience12 = document.querySelector(".content-second__column-first__floor-third__column--right")
inputExperience9.value = 'Sep. 2021 - Jun. 2023'
inputExperience10.value = 'Legal Assistant'
inputExperience11.value = 'Law Firm | Intern'
inputExperience12.value = 'Provide administrative support to lawyer and enhance office effectiveness Handle communication with clients, witnesses etc. repare case briefs and summarize depositions, interrogatories and testimony'

const inputEducation1 = document.querySelector(".content-third__column-first__ciel__box-first--years")
const inputEducation2 = document.querySelector(".content-third__column-first__ciel__box-first--text-first")
const inputEducation3 = document.querySelector(".content-third__column-first__ciel__box-first--text-second")
const inputEducation4 = document.querySelector(".content-third__column-first__ciel__box-first--text-third")
inputEducation1.value = '2023'
inputEducation2.value = 'UI/UX'
inputEducation3.value = '#UX #UI #research #DesignSystem #Ui #wireframing #figma #Ux'
inputEducation4.value = 'Coursera'

const inputEducation5 = document.querySelector(".content-third__column-first__ciel__box-second--years")
const inputEducation6 = document.querySelector(".content-third__column-first__ciel__box-second--text-first")
const inputEducation7 = document.querySelector(".content-third__column-first__ciel__box-second--text-second")
const inputEducation8 = document.querySelector(".content-third__column-first__ciel__box-second--text-third")
inputEducation5.value = '2017 - 2022'
inputEducation6.value = 'Law'
inputEducation7.value = '#law #legalStudies #contracts #internationalLaws'
inputEducation8.value = 'University of Kerala'

const inputEducation9 = document.querySelector(".content-third__column-first__floor__box--years")
const inputEducation10 = document.querySelector(".content-third__column-first__floor__box--text-first")
const inputEducation11 = document.querySelector(".content-third__column-first__floor__box--text-second")
const inputEducation12 = document.querySelector(".content-third__column-first__floor__box--text-third")
inputEducation9.value = '2017'
inputEducation10.value = 'Graphic design'
inputEducation11.value = '#branding #web #illustration #adobe'
inputEducation12.value = 'Coursrea'

const inputInterests1 = document.querySelector(".content-third__column-second__ciel--word1")
const inputInterests2 = document.querySelector(".content-third__column-second__ciel--word2")
const inputInterests3 = document.querySelector(".content-third__column-second__ciel--word3")
const inputInterests4 = document.querySelector(".content-third__column-second__ciel--word4")
const inputInterests5 = document.querySelector(".content-third__column-second__ciel--word5")
const inputInterests6 = document.querySelector(".content-third__column-second__ciel--word6")
const inputInterests7 = document.querySelector(".content-third__column-second__ciel--word7")
const inputInterests8 = document.querySelector(".content-third__column-second__ciel--word8")
const inputInterests9 = document.querySelector(".content-third__column-second__ciel--word9")
const inputInterests10 = document.querySelector(".content-third__column-second__ciel--word10")

inputInterests1.value = 'branding'
inputInterests2.value = 'design'
inputInterests3.value = 'photography'
inputInterests4.value = 'artificial intelligence'
inputInterests5.value = 'illustration'
inputInterests6.value = 'typography'
inputInterests7.value = 'social networks'
inputInterests8.value = 'research'
inputInterests9.value = 'dron pilot'
inputInterests10.value = 'games'

const inputEmail = document.querySelector(".content-third__column-second__floor--email")

inputEmail.value = 'srkarthik.designscape@gmail.com'



// Шкала

function scale(clas, text) {
    const line = document.querySelector(clas)
    let isResizing = false
    let startX
    const maxWidth = 168
    let procent = document.querySelector(text)

    line.addEventListener('mousedown', (event) => {
        isResizing = true
        startX = event.clientX
        event.preventDefault()
    })

    document.addEventListener('mousemove', (event) => {
        if (!isResizing) return
        if (isResizing) {
            event.preventDefault()
        }

        const lineStyle = window.getComputedStyle(line)
        const lineWidth = parseFloat(lineStyle.width)
        let newWidth = lineWidth + (event.clientX - startX)
        if (newWidth > maxWidth) {
            newWidth = maxWidth
        }
        line.style.width = `${newWidth}px`
        startX = event.clientX
        procent.textContent = `${(newWidth / 168 * 100).toFixed(0)}`
    })

    document.addEventListener('mouseup', () => {
        isResizing = false
    })

    line.addEventListener('mouseover', () => {
        procent.style.opacity = '100'
    })

    line.addEventListener('mouseout', () => {
        procent.style.opacity = '0'
    })
}

scale('.content-first__box-second__Languages__first--line', '.content-first__box-second__Languages__first--line--procent')
scale('.content-first__box-second__Languages__second--line', '.content-first__box-second__Languages__second--line--procent')
scale('.content-first__box-second__Languages__third--line', '.content-first__box-second__Languages__third--line--procent')



