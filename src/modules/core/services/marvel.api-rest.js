import { getAndMap } from '@/modules/core/services';
import { defaultMapper } from '@/modules/core/services';
const BASE_URL = `https://gateway.marvel.com/v1/public/`;
const PAGENATE_BY = 20;

const credentials = {
  apikey: '96f27c2367a6c82e9704f4522ff243f7'
};

// const orden = {
//   orderBy: '-name'
// };

export async function getAllPaginated(
  domain,
  page,
  nameStarts,
  orden,
  { mappedBy = defaultMapper, queryParams = {}, itemsPerPage = PAGENATE_BY }
) {
  return getAll(domain, nameStarts, orden, {
    mappedBy,
    queryParams: {
      ...queryParams,
      limit: itemsPerPage,
      offset: getOffset(page, itemsPerPage)
    }
  });
}

export async function getAll(domain, nameStarts, orden, { mappedBy = defaultMapper, queryParams = {} }) {
  return getAndMap(`${BASE_URL}${domain}`, {
    mappedBy,
    queryParams: {
      ...nameStarts,
      ...orden,
      ...queryParams,
      ...credentials
    }
  });
}

function getOffset(page, itemsPerPage) {
  const currentOffset = page - 1;
  return currentOffset * itemsPerPage;
}
