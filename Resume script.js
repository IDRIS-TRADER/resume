// Загрузка фото

const input = document.querySelector('.content-first--image--input')
const photo = document.querySelector('.content-first--image--foto')

input.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            photo.src = e.target.result;
            photo.style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    } else {
        alert('Пожалуйста, выберите файл изображения');
    }
});


// Скачивание

const button = document.querySelector('.pdf')

function printToPDF() {
    window.print();
}

button.addEventListener('click', printToPDF)


