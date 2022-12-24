import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`;

export async function getCharatersAtPage(
  page,
  itemsPerPage,
  name,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, name, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage, name) {
  return getCharatersAtPage(page, itemsPerPage, name, {
    mappedBy: mapCharacterToCard
  });
}
