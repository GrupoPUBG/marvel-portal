import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid2 } from '@/modules/marvel-characters/services';
import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import Filter from '@/modules/core/components/molecules/Filter';

CharacterGridPaginated.propTypes = {
  search: PropTypes.string,
  n: PropTypes.number
};

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;




export default function CharacterGridPaginated({ n, search }) {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const nameStarts = {
    nameStartsWith: search
  };

  const orden = {
    orderBy: 'name'
  };

  const orden1 = {
    orderBy: '-name'
  };

  console.log(nameStarts);
  useEffect(() => {
    fetchCharactersAtPage();
  }, []); // para que no se ejecute continuamente,


  async function fetchCharactersAtPage(page = 1) {
    if (n == 0) {
      setLoading(true);
      const data = await getCharactersForGrid2(page, ITEMS_PER_PAGE);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results); //se le agrego esta linea de codigo para sacar los id.
    }



    if (n == 1) {
      setLoading(true);
      const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, nameStarts, orden);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
    }
    if (n == 2) {
      const nameStarts = {
        series: search
      };
      setLoading(true);



      const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, nameStarts, orden);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
    }
    if (n == 3) {
      setLoading(true);
      const data = await getCharactersForGrid2(page, ITEMS_PER_PAGE, orden1);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results); //se le agrego esta linea de codigo para sacar los id.
    }



    if (n == 4) {
      setLoading(true);
      const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, nameStarts, orden1);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
    }
    if (n == 5) {
      const nameStarts = {
        series: search
      };
      setLoading(true);



      const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, nameStarts, orden1);
      setTotalItems(data.total);
      console.log('Personajes', data.total);
      setCharacters(data.results);
      setLoading(false);
    }
  }

  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>
      <Filter query={queryParams} onQueryChange={onQueryChange} totalItems={totalItems} />
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterGrid({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name, image }, index) => (
    <CharacterCard name={name.split(/[(]|[)]/)[0]} alias= {name.split(/[(]|[)]/)[1]} image={image} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} isSkeleton />);
};
