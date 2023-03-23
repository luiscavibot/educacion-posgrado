import React from 'react';

import { Pagination } from 'semantic-ui-react';
import FlechaIzquierdaIcon from '../../components/icons/FlechaIzquierdaIcon';
import FlechaDerechaIcon from '../../components/icons/FlechaDerechaIcon';

const INITIAL_PAGE = 1;
const PAGE_SIZE = 3;

export default function PaginadorNoticias({ controles }) {
	const [page, setPage, totalPaginas] = controles;

	if (totalPaginas !== 0) {
		return (
			<Pagination
				prevItem={{
					content: <FlechaIzquierdaIcon page={page} />,
					icon: true,
				}}
				nextItem={{
					content: (
						<FlechaDerechaIcon
							page={page}
							totalPaginas={totalPaginas}
						/>
					),
					icon: true,
				}}
				activePage={page + 1}
				boundaryRange={0}
				// defaultActivePage={1}
				ellipsisItem={null}
				firstItem={null}
				lastItem={null}
				siblingRange={1}
				totalPages={totalPaginas || 0}
				onPageChange={(e, { activePage }) => {
					setPage(activePage - 1);
				}}
			/>
		);
	} else {
		return <div></div>;
	}
}
