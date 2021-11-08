const Array = [
    { id: 1, name: 'Jonas,', isMale: true },
    { id: 2, name: 'Petras,', isMale: true },
    { id: 3, name: 'Paulius,', isMale: true },
    { id: 4, name: 'Ona', isMale: false }
]

const Masyvas = [ 1, -2, 3, -4, 5]


const filtruotasIsMale = Array.filter(array => array.isMale === false);

const mappedArray = Array.map(array => ({ id: array.id, name: array.name, isFemele: !array.isMale }));

const filtroutasMasyvas = Masyvas.filter(masyvas => masyvas > 0);

const mappedMasyvas = Masyvas.map(masyvas => ([ masyvas ]));

console.log('-- Sukurti masyvą (Array) --');
console.log(Array);
console.log('-- Išfiltruoti masyvą pagal parametrą isMale --');
console.log(filtruotasIsMale);
console.log('-- Panaudoti map ir sukurti naują masyvą --');
console.log(mappedArray);

console.log('-- Sukurti masyvą --');
console.log(Masyvas);
console.log('-- Išfiltruoti neigiamus skaičius --');
console.log(filtroutasMasyvas);
console.log('-- Panaudoti map ir sukurti naują masyvą --')
console.log(mappedMasyvas);