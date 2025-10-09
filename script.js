const experienceBlocks = document.querySelectorAll('.experience-link-block');

experienceBlocks.forEach(block => {
    const experienceImage = block.querySelector('.experience-image');
    
    block.addEventListener('mouseenter', () => {
        experienceImage.classList.remove('hidden');
    });
    
    block.addEventListener('mouseleave', () => {
        experienceImage.classList.add('hidden');
    });
});