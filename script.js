// Mobil menü açma/kapama
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Dil seçici
document.getElementById('language-select').addEventListener('change', function() {
    // Dil değiştirme işlevselliği buraya eklenebilir
    alert('Dil değiştirildi: ' + this.value);
});

// Arama fonksiyonu
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value;
    if (searchTerm.trim() !== '') {
        alert('Aranan: ' + searchTerm);
        // Gerçek arama işlevselliği buraya eklenebilir
    }
});

// Dropdown menüler için mobil uyumluluk
document.querySelectorAll('.dropdown > a').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});