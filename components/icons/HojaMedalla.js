import React from 'react';

export default function HojaMedalla({ className }) {
	return (
		<svg
			className={`${className}`}
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_773_35297)">
				<path
					d="M4.76803 0.519531C3.76003 0.519531 2.92188 1.35769 2.92188 2.36569V19.9041C2.92188 20.9121 3.76003 21.7503 4.76803 21.7503H6.61418V24.5195L9.38341 22.6734L12.1526 24.5195V17.914C12.0252 17.9875 11.8895 18.0454 11.7483 18.0866C11.6496 18.2995 11.5095 18.4908 11.3363 18.6492C11.1632 18.8076 10.9603 18.9302 10.7394 19.0097C10.5441 19.0735 10.3392 19.1028 10.1339 19.0965C9.87541 19.0965 9.61695 19.0632 9.38341 18.9525C9.14707 19.0556 8.8907 19.1048 8.63295 19.0965C8.42618 19.0965 8.22403 19.0808 8.02741 19.0097C7.58195 18.8477 7.21883 18.5158 7.01757 18.0866C6.87678 18.0452 6.74137 17.9872 6.61418 17.914V19.9041H4.76803V2.36569H19.5373V19.9041H14.9219C14.6771 19.9041 14.4423 20.0014 14.2692 20.1745C14.0961 20.3476 13.9988 20.5824 13.9988 20.8272C13.9988 21.072 14.0961 21.3068 14.2692 21.4799C14.4423 21.653 14.6771 21.7503 14.9219 21.7503H19.5373C20.5453 21.7503 21.3834 20.9121 21.3834 19.9041V2.36569C21.3834 1.35769 20.5453 0.519531 19.5373 0.519531H4.76803ZM7.36464 5.13492C7.11983 5.15781 6.89413 5.27701 6.73721 5.46631C6.58028 5.6556 6.50498 5.89949 6.52787 6.1443C6.55077 6.38912 6.66997 6.61481 6.85927 6.77174C7.04856 6.92866 7.29244 7.00396 7.53726 6.98107H16.768C17.0128 6.98107 17.2476 6.88382 17.4207 6.71071C17.5939 6.5376 17.6911 6.30281 17.6911 6.05799C17.6911 5.81318 17.5939 5.57839 17.4207 5.40528C17.2476 5.23217 17.0128 5.13492 16.768 5.13492H7.53726C7.50835 5.13356 7.4794 5.13356 7.45049 5.13492C7.42189 5.13359 7.39324 5.13359 7.36464 5.13492ZM7.36464 8.82722C7.11983 8.85011 6.89413 8.96932 6.73721 9.15862C6.58028 9.34791 6.50498 9.59179 6.52787 9.83661C6.55077 10.0814 6.66997 10.3071 6.85927 10.464C7.04856 10.621 7.29244 10.6963 7.53726 10.6734H13.9988C14.2436 10.6734 14.4784 10.5761 14.6515 10.403C14.8246 10.2299 14.9219 9.99512 14.9219 9.7503C14.9219 9.50549 14.8246 9.2707 14.6515 9.09759C14.4784 8.92448 14.2436 8.82722 13.9988 8.82722H7.53726C7.50835 8.82586 7.4794 8.82586 7.45049 8.82722C7.42189 8.82589 7.39324 8.82589 7.36464 8.82722ZM9.38341 12.202C9.19805 12.2022 9.01747 12.2608 8.86733 12.3695C8.71719 12.4782 8.60514 12.6315 8.54711 12.8075C8.50926 12.8205 8.46772 12.8223 8.43172 12.8371C8.27571 12.7433 8.09408 12.7012 7.91274 12.7168C7.7314 12.7324 7.55961 12.8049 7.42188 12.9238C7.28243 13.0403 7.18258 13.1971 7.13612 13.3727C7.08965 13.5483 7.09887 13.734 7.16249 13.9041C7.13757 13.942 7.12741 13.9798 7.10434 14.0195C6.92402 14.0496 6.7576 14.1352 6.62834 14.2645C6.49908 14.3937 6.41345 14.5601 6.38341 14.7405C6.35377 14.916 6.37953 15.0965 6.45711 15.2568C6.53469 15.4171 6.66024 15.5492 6.81634 15.6349C6.8228 15.6931 6.80434 15.7521 6.81634 15.8085C6.70489 15.9441 6.63699 16.1103 6.62151 16.2852C6.60602 16.4601 6.64369 16.6356 6.72957 16.7888C6.90864 17.0998 7.26495 17.2734 7.62403 17.2217C7.67018 17.2651 7.71726 17.2974 7.76803 17.3371C7.77726 17.6943 8.00526 18.0201 8.34495 18.1448C8.68095 18.2675 9.06126 18.1494 9.29664 17.8845C9.3308 17.8863 9.34834 17.914 9.38341 17.914C9.42126 17.914 9.46095 17.8863 9.4988 17.8845C9.57849 17.9744 9.67622 18.0466 9.78562 18.0964C9.89503 18.1462 10.0137 18.1724 10.1339 18.1734C10.2336 18.1734 10.324 18.1798 10.4219 18.1448C10.5879 18.0834 10.7316 17.9736 10.8345 17.8296C10.9374 17.6856 10.9946 17.514 10.9988 17.3371C11.0477 17.2983 11.0957 17.2651 11.1428 17.2217C11.318 17.2465 11.4967 17.2186 11.656 17.1415C11.8153 17.0644 11.948 16.9416 12.0373 16.7888C12.1233 16.6355 12.1611 16.4598 12.1456 16.2847C12.1302 16.1096 12.0621 15.9433 11.9505 15.8075C11.9634 15.7521 11.9422 15.6912 11.9505 15.6349C12.1072 15.5499 12.2332 15.4178 12.3109 15.2573C12.3885 15.0969 12.4139 14.9161 12.3834 14.7405C12.3535 14.5601 12.2679 14.3936 12.1386 14.2643C12.0094 14.135 11.8429 14.0494 11.6625 14.0195C11.6403 13.9789 11.6293 13.9429 11.6043 13.9041C11.6684 13.7339 11.6779 13.5479 11.6314 13.3721C11.5849 13.1962 11.4848 13.0392 11.345 12.9229C11.2072 12.8039 11.0353 12.7316 10.854 12.7162C10.6726 12.7007 10.491 12.7431 10.3351 12.8371C10.2982 12.8223 10.2576 12.8205 10.2197 12.8085C10.1618 12.6322 10.0499 12.4788 9.89971 12.3699C9.74956 12.261 9.56889 12.2022 9.38341 12.202ZM9.38341 13.8174C10.2013 13.8174 10.8548 14.4709 10.8548 15.2888C10.8548 16.1085 10.2022 16.7601 9.38341 16.7601C9.18988 16.7612 8.99805 16.7239 8.81904 16.6504C8.64002 16.5768 8.47738 16.4685 8.34053 16.3316C8.20368 16.1948 8.09534 16.0322 8.02179 15.8531C7.94823 15.6741 7.91093 15.4823 7.91203 15.2888C7.91203 14.47 8.56557 13.8174 9.38341 13.8174Z"
					// fill="#3A464F"
				/>
			</g>
			<defs>
				<clipPath id="clip0_773_35297">
					<rect
						width="24"
						height="24"
						// fill="white"
						transform="translate(0.152344 0.519531)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
