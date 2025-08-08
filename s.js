function switchLanguage(lang) {
    document.querySelectorAll('.dog-speak, .cat-speak, .bird-speak, .small-pet-speak').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.dog-translation, .cat-translation, .bird-translation').forEach(el => el.style.display = 'none');
    document.querySelectorAll(`.${lang}-speak, .${lang}-translation`).forEach(el => el.style.display = 'block');
}

languageButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.id.split('-')[0]; // "dog", "cat", etc.
        switchLanguage(lang);
    });
});
