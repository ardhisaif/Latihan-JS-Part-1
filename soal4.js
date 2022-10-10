var menit = 60
    kaliMenyala = 48
    MenyalaTiap = 5

//untuk menyala sebanyak 48 kali berapa detik yang dibutuhkan?

var detikYangDibutuhkan = kaliMenyala * MenyalaTiap

//karena yang ditanyakan menit maka detik tersebut diubah ke menit

var waktu = detikYangDibutuhkan / menit

console.log(`Dibuthkan waktu ${waktu} menit untuk menyala sebanyak ${kaliMenyala} kali`);