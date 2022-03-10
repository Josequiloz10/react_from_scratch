import heroes, {owners} from './../data/heroes';

// console.log(owners, 'owners')

const getHeroeById = (id: number) => heroes.find((hero) => hero.id ===id);
// console.log(getHeroeById(2));

const getHeroesByOwner = (owner: string) => heroes.filter((hero) => hero.owner == owner);
// console.log(getHeroesByOwner('Marvel'));

export {
    getHeroeById,
    getHeroesByOwner
}