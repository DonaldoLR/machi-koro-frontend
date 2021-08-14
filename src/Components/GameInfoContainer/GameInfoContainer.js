import React from 'react';
import MachiBox from '../../Assets/Machi-Koro.jpeg';
const GameInfoContainer = () => {
  return (
    <section className='p-5 text-center'>
      <div className='container'>
        <div class='d-sm-flex'>
          <img
            src={MachiBox}
            alt='Machi Koro: 5th Anniversary Edition Box'
            className='col-sm-6 img-fluid'
          />
          <div class='text'>
            <p>
              Welcome to the city of Machi Koro. You've just been elected Mayor.
              Congrats! Unfortunately the citizens have some pretty big demands:
              jobs, a theme park, a couple of cheese factories and maybe even a
              radio tower. A tough proposition since the city currently consists
              of a wheat field, a bakery and a single die.
            </p>
            <p>
              Armed only with your trusty die and a dream, you must grow Machi
              Koro into the largest city in the region. You will need to collect
              income from developments, build public works, and steal from your
              neighbors' coffers. Just make sure they aren't doing the same to
              you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfoContainer;
