import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';

import logo from '../../assets/logo.png';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      {/* main nav */}
      <AppBar position='fixed' style={{ backgroundColor: '#27ae60' }}>
        <div className='container p-2 mobile'>
          <Toolbar className='d-flex justify-content-between nav'>
            <Link to='/' className='links'>
              <div className='navbar-brand brandSection'>
                <img
                  src={logo}
                  height='40px'
                  width='40px'
                  className='me-2'
                  alt='logo'
                />
                <span className='brand'>Grocery Store</span>
              </div>
            </Link>

            <div className=' d-flex flex-grow-1'></div>

            <div className='cart d-flex'>
              <div className='btns me-2 align-self-center'>
                <button className='btn btn-outline text-white me-2'>
                  Login
                </button>
                <button className='btn btn-primary shadow me-4'>SignUp</button>
              </div>

              {location.pathname === '/' && (
                <IconButton>
                  <Link to='/cart'>
                    <Badge badgeContent={totalItems} color='secondary'>
                      <FaShoppingCart
                        size='25px'
                        style={{ color: 'fff', cursor: 'pointer' }}
                      />
                    </Badge>
                  </Link>
                </IconButton>
              )}
            </div>
          </Toolbar>
        </div>

        {/* subnav */}
        <div className='bg-light'>
          <div className='container d-flex'>
            <div className='dropdown'>
              <span
                className='p-2 text-dark dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Shop by Categories
              </span>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='/'>
                    Fruits and Vegetables
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Foodgrains, Oil and Masala
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Bakery, Cakes and Dairy
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Bavarages
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Snacks and Food
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Eggs meat and Fish
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    View all
                  </a>
                </li>
              </ul>
            </div>

            <div className='dropdown'>
              <span
                className='p-2 text-dark bg-light dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <MdLocalOffer style={{ marginRight: '10px' }} />
                Offers
              </span>
              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='/'>
                    Festival Offers
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Combo Offers
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Buy two get one
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AppBar>
      <div style={{ padding: '45px' }}></div>
    </>
  );
};

export default Navbar;
