// use rfce for quick render
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>
        <img 
        className='header__logo'
        // this links to a website, which is not ideal for real life
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">
        </img>

        <div className="header__search">
            <input className="header__searchInput" type="text">
            </input>
            <SearchIcon className="header__searchIcon">
            </SearchIcon>
        </div>

        <div className='header__nav'>
            <div className="header__option">
                 <span className='header__optionLineOne'>
                    Hello Guest
                 </span>
                 <span className='header__optionLineTwo'>
                    Returns
                </span>
            </div>
            <div className="header__option">
                <span className='header__optionLineOne'>
                    Hello Guest
                 </span>
                 <span className='header__optionLineTwo'>
                    & Orders
                </span>
            </div>

            <div className="header__option">
            <span className='header__optionLineOne'>
                    Your
                 </span>
                 <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>     
        </div>
    </div>
  )
}

export default Header