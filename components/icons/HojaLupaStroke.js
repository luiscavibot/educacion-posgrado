import React from 'react';

export default function HojaLupaStroke({ className }) {
	return (
		<>
			<svg
				className={`${className}`}
				width="61"
				height="61"
				viewBox="0 0 61 61"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.8327 7.74205C13.7 8.08992 12.217 9.06994 11.6012 9.87799C11.3394 10.2215 10.9077 10.9665 10.6423 11.5334L10.1597 12.5639V30.4428V48.3216L10.6423 49.3521C11.3108 50.7798 11.9222 51.5294 13.0039 52.2478C14.8625 53.4822 14.2891 53.4427 30.3599 53.4427C46.4307 53.4427 45.8574 53.4822 47.716 52.2478C48.7977 51.5294 49.409 50.7798 50.0775 49.3521L50.5602 48.3216L50.6099 32.697L50.6597 17.0721L48.7246 15.1735C47.6603 14.1292 45.4008 11.9627 43.7036 10.3588L40.6175 7.44287L28.1718 7.45545C17.5488 7.46605 15.5951 7.5081 14.8327 7.74205ZM38.9787 13.0132C39.0789 16.5216 39.1786 16.8719 40.3525 17.8403C41.2474 18.5784 42.2679 18.7631 45.4516 18.7631H48.1362L48.1322 33.2729C48.1284 46.9618 48.1096 47.8232 47.7988 48.5013C47.3973 49.3773 46.6737 50.1165 45.7145 50.6308C44.9941 51.0168 44.99 51.0169 30.3599 51.0169C15.7299 51.0169 15.7258 51.0168 15.0054 50.6308C14.0462 50.1165 13.3226 49.3773 12.9211 48.5013C12.6087 47.82 12.5916 46.8816 12.5916 30.4428C12.5916 14.004 12.6087 13.0656 12.9211 12.3843C13.5118 11.0955 14.691 10.1869 16.0851 9.94645C16.4801 9.87817 21.7726 9.83289 27.8461 9.84546L38.8889 9.86864L38.9787 13.0132ZM45.3462 15.3345L46.2373 16.2475H44.2159C42.309 16.2475 42.1695 16.2226 41.7538 15.8064C41.341 15.3935 41.313 15.244 41.313 13.4511V11.5369L42.8841 12.9792C43.7483 13.7723 44.8562 14.8323 45.3462 15.3345ZM18.6267 21.0683C18.2322 21.5044 18.2488 22.4077 18.658 22.7782C18.9562 23.0483 20.0309 23.0756 30.3912 23.0756C41.2119 23.0756 41.8112 23.0587 42.0931 22.747C42.4876 22.3109 42.4711 21.4076 42.0619 21.0371C41.7637 20.767 40.689 20.7397 30.3287 20.7397C19.508 20.7397 18.9086 20.7566 18.6267 21.0683ZM18.9092 26.3513C18.1202 26.7319 18.1645 28.1644 18.9747 28.4725C19.2492 28.5771 23.7752 28.6459 30.3599 28.6459C36.9447 28.6459 41.4706 28.5771 41.7452 28.4725C42.586 28.1527 42.5945 26.7224 41.7577 26.3407C41.1266 26.053 19.5071 26.0631 18.9092 26.3513ZM32.8457 31.0424C30.9796 31.7385 29.5763 33.0091 28.7682 34.7337C28.3611 35.6027 28.295 35.9816 28.295 37.4506C28.295 38.9265 28.3602 39.2967 28.7762 40.1851C29.4119 41.5422 30.6463 42.8349 31.926 43.4834C32.877 43.9653 33.1206 44.0092 34.8492 44.0092C36.5416 44.0092 36.8364 43.9588 37.7222 43.5191L38.7094 43.0291L41.0759 45.3909C43.1319 47.4424 43.5187 47.7526 44.0218 47.7526C44.6678 47.7526 45.2632 47.1828 45.2632 46.5641C45.2632 46.3298 44.3766 45.2988 42.8453 43.7522L40.4274 41.3103L40.9151 40.3252C41.3133 39.5206 41.4137 39.0433 41.4627 37.7215C41.5417 35.5888 41.132 34.4435 39.7585 32.9591C38.3517 31.4384 37.2147 30.9209 35.1283 30.8516C34.0709 30.8164 33.2725 30.883 32.8457 31.0424ZM18.6267 32.0292C18.2297 32.468 18.2491 33.369 18.6635 33.7442C18.9497 34.0035 19.3642 34.0396 21.5623 33.9966C24.0973 33.9472 24.1312 33.9411 24.4792 33.4741C24.8563 32.9685 24.8017 32.4531 24.3201 31.9712C24.1047 31.7554 23.5301 31.7006 21.4869 31.7006C19.232 31.7006 18.8882 31.7401 18.6267 32.0292ZM36.7818 33.6556C38.1621 34.3603 39.1583 35.9511 39.1583 37.4506C39.1583 39.2582 37.6787 41.1627 35.9526 41.5771C33.1406 42.2522 30.6531 40.3153 30.6531 37.4506C30.6531 35.4273 31.7578 33.955 33.7705 33.2955C34.4679 33.0669 35.9839 33.2482 36.7818 33.6556Z"
					// fill="white"
				/>
			</svg>
		</>
	);
}