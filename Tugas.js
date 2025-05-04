function showCard(index) {
    cardItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        item.style.opacity = i === index ? '1' : '0'; // Menambahkan efek transisi
    });
}
