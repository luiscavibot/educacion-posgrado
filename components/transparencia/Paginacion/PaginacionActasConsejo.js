import React from 'react';
import { Pagination } from 'semantic-ui-react';
import FlechaIzquierdaIcon from '../../icons/FlechaIzquierdaIcon';
import FlechaDerechaIcon from '../../icons/FlechaDerechaIcon';

const PaginacionActasConsejo = ({ controles, className }) => {
	const [page, setPage, totalPaginas] = controles;

	if (totalPaginas !== 0) {
		return (
			<Pagination
				className={`${className}`}
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
};

export default PaginacionActasConsejo;
