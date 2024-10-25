import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22396 20.7662C-0.415453 19.1136 -0.406853 16.4316 1.24313 14.7897L10.57 5.50874L9.62535 4.55653C9.08135 4.00817 9.08135 3.11909 9.62535 2.57074C10.1694 2.02238 11.0514 2.02238 11.5954 2.57074L12.5526 3.53579L14.8854 1.21459C16.5204 -0.412333 19.1516 -0.403739 20.776 1.2338C22.4154 2.88639 22.4069 5.56845 20.7569 7.21035L18.4626 9.49315L19.4751 10.5139C20.0192 11.0623 20.0192 11.9514 19.4751 12.4998C18.9311 13.0481 18.0491 13.0481 17.5053 12.4998L16.4799 11.4661L7.11458 20.7855C5.47962 22.4122 2.84845 22.4038 1.22396 20.7662ZM12.54 7.49455L14.5099 9.48042L5.1574 18.7869C4.61243 19.3291 3.7354 19.3263 3.19392 18.7805C2.64747 18.2295 2.65033 17.3355 3.20031 16.7883L12.54 7.49455Z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'eyedropper');
export default IconComponent;
