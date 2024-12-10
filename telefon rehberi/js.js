let rehber = [
    { isim: "Ahmet", numara: "12345" },
    { isim: "Mehmet", numara: "67890" },
    { isim: "Ayşe", numara: "54321" },
    { isim: "Fatma", numara: "98765" },
    { isim: "Ali", numara: "11223" }
];

console.log("Güncel Rehber:");
for (let kisi of rehber) {
    console.log(`${kisi.isim}: ${kisi.numara}`);
}

let secim = prompt(
    "Yapmak istediğiniz işlemi seçin:\n1. Kişi Ekle\n2. Kişi Sil\n3. Kişi Bul\n4. Çıkış"
);

if (secim === "1") {
    let isim = prompt("Eklemek istediğiniz kişinin ismini girin:");
    let numara = prompt("Eklemek istediğiniz kişinin telefon numarasını girin:");

    rehber.push({ isim: isim, numara: numara });
    alert(`${isim} rehberinize eklendi.`);

    console.log("Güncel Rehber:");
    for (let kisi of rehber) {
        console.log(`${kisi.isim}: ${kisi.numara}`);
    }
}

else if (secim === "2") {
    // Kişi Silme
    let isim = prompt("Silmek istediğiniz kişinin ismini girin:");
    let bulundu = false;

    for (let i = 0; i < rehber.length; i++) {
        if (rehber[i].isim.toLowerCase() === isim.toLowerCase()) {
            rehber.splice(i, 1);
            alert(`${isim} rehberden silindi.`);
            bulundu = true;
            break;
        }
    }

    if (!bulundu) {
        alert("Kişi bulunamadı.");
    } else {
        console.log("Güncel Rehber:");
        for (let kisi of rehber) {
            console.log(`${kisi.isim}: ${kisi.numara}`);
        }
    }
}

else if (secim === "3") {
    let isim = prompt("Aramak istediğiniz kişinin ismini girin:");
    let bulunma = false;

    for (let kisi of rehber) {
        if (kisi.isim.toLowerCase() === isim.toLowerCase()) {
            alert(`${kisi.isim}: ${kisi.numara}`);
            bulunma = true;
            break;
        }
    }

    if (!bulunma) {
        alert("Kişi bulunamadı.");
    }
}

else if (secim === "4") {
    alert("Çıkılıyor...");
}

else {
    alert("Geçersiz seçenek, lütfen tekrar deneyin.");
}
