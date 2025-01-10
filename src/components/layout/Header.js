// import React, { useEffect } from 'react';
// import { useTheme } from '../ThemeContext';
// import './header.css';

// function Header({ isPhysician }) {
//   return (
//     <div className={`header ${isPhysician ? 'physician-theme' : 'resident-theme'}`}>
//       <div className="header-logo">
//         <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Logo" />
//       </div>
//       <div className="header-title">
//         PhysiLink
//         <div className="header-slogan">
//           Connecting Future Physicians with Mentors
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import { useTheme } from '../../ThemeContext'; // Import the custom hook
import './header.css';

function Header() {
    const { isPhysician } = useTheme(); // Access `isPhysician` from the context

    return (
        <div className={`header ${isPhysician ? 'physician-theme' : 'resident-theme'}`}>
            <div className="header-logo">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Logo" />
            </div>
            <div className="header-title">
                PhysiLink
                <div className="header-slogan">
                    Connecting Future Physicians with Mentors
                </div>
            </div>
        </div>
    );
}

export default Header;
