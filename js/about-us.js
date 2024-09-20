const storySectionSeparator = document.querySelector('.underline');

const makeSeparatorVisible = () => {
    storySectionSeparator.style.width = '50%';
}

document.addEventListener('DOMContentLoaded', function(){
    makeSeparatorVisible();
})
