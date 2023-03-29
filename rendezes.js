export function rendezes(lista, kulcs) {
  if (typeof lista[0][kulcs] === "number") {
    rendezesKorSzerint(lista, kulcs);
  } else {
    rendezesNevSzerint(lista, kulcs);
  }
}

export function rendezes2(lista, kulcs) {
  lista.sort((a, b) => {
    console.log(a[kulcs].localeCompare(b[kulcs]));
    return a[kulcs].localeCompare(b[kulcs]);
  });
}

export function rendezesKorSzerint(lista, kulcs) {
  lista.sort((a, b) => {
    return a.kor - b.kor;
  });
}

export function rendezesNevSzerint(lista, kulcs) {
  lista.sort((a, b) => {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return ertek; // vagy + vagy - érték kell ide!
  });
}
