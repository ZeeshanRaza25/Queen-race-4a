import React, { useEffect, useRef } from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

const App = () => {
  const refBackground1 = useRef(null);
  const refBackground2 = useRef(null);

  const ref1 = useWebAnimations({
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ],
    timing: {
      duration: 600,
      iterations: Infinity,
      easing: 'steps(7, end)',
    },
    playbackRate: 1,
  });

  const ref2 = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });

  const ref3 = useWebAnimations({
    keyframes: [
      { transform: 'translate(100%)' },
      { transform: 'translateX(-100%)' },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });

  useEffect(() => {
    function goFaster() {
      ref3.playbackRate *= 1.1;
      setInterval(() => {
        if (ref3.playbackRate > 1) {
          ref3.playbackRate *= 0.9;
        }
      }, 6000);
    }
    window.addEventListener('click', goFaster);
  });

  useEffect(() => {
    const animateBackground1 = refBackground1.current && refBackground1.current.animate(
      [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
      {
        duration: 36000,
        iterations: Infinity
      }
    )

    function goFaster() {
      animateBackground1.playbackRate *= 1.1;
      setInterval(
        () => {
          if (animateBackground1.playbackRate > 1) {
            animateBackground1.playbackRate *= .9;
          }
        }, 6000)
    }
    window.addEventListener('click', goFaster)
  })

  useEffect(() => {
    const animateBackground2 = refBackground2.current && refBackground2.current.animate(
      [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
      {
        duration: 36000,
        iterations: Infinity
      }
    )
    function goFaster() {
      animateBackground2.playbackRate *= 1.1;
      setInterval(
        () => {
          if (animateBackground2.playbackRate > 1) {
            animateBackground2.playbackRate *= .9;
          }
        }, 6000)
    }
    window.addEventListener('click', goFaster)
  })

  return (
    <>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              ref={ref1.ref}
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
            />
          </div>
        </div>
        <div className="scenery" id="foreground1" ref={ref2.ref}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="foreground2" ref={ref3.ref}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>
        <div ref={refBackground1} className="scenery" id="background2">
          <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
          <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
          <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
        </div>
        <div ref={refBackground2} className="scenery" id="Background2">
          <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
          <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
          <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
        </div>
      </div>
    </>
  );
}

export default App;
