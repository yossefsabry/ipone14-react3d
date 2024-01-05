import React from 'react';

const SoundSection = () => {
  return (
    <div className='sound-section wrapper'>
      <div className='body'>
        <div className='sound-section-content content'>
          <h2 className='title'>New Sound System</h2>
          <p className='text'>Fell The Space ..</p>
          <span className='description'>
            {' '}
            from $41.62 or 24 mo. or $999 before trade in ..
          </span>
          <ul className='links'>
            <li>
              <button className='button'> Buy </button>
            </li>
            <li>
              {' '}
              <a className='link'>Learn More </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
