import './Header.less';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
// Tạo easing function tùy chỉnh
CustomEase.create('easeOutFast', 'M0,0 C0.25,0.1 0.25,1 1,1'); // Opening ease
CustomEase.create('easeInFast', 'M0,0 C0.5,0 0.75,0.2 1,1'); // Closing ease
export default function Header({ shortName }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);
  const navigationRef = useRef(null);

  const toggleMenu = () => {
    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    const navigation = navigationRef.current;

    if (!isOpen) {
      // Mở menu
      const openTimeline = gsap.timeline();

      // Đặt vị trí và hiển thị cho các phần tử trước khi bắt đầu animation
      gsap.set('.dropdown__section--one h1, .dropdown__section--one p, .dropdown__button', {
        opacity: 1,
        y: 0,
      });

      openTimeline
        .to([dropdown, navigation, content], {
          y: '20vh',
          duration: 0.4,
          ease: 'easeOutFast',
        })
        .from(
          '.dropdown__section--one h1',
          {
            opacity: 0,
            y: 30,
            duration: 0.4,
            ease: 'easeOutFast',
            delay: 0.2,
          },
          '-=0.3'
        )
        .from(
          '.dropdown__section--one p',
          {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: 0.1,
            ease: 'easeOutFast',
          },
          '-=0.2'
        )
        .from(
          '.dropdown__button',
          {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
            ease: 'easeOutFast',
          },
          '-=0.2'
        )
        .to('.divider', { width: '100%', duration: 0.2, ease: 'easeOutFast' }, '-=0.4');

      setIsOpen(true);
    } else {
      // Đóng menu
      const closeTimeline = gsap.timeline();

      closeTimeline
        .to('.dropdown__button', {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.05,
          ease: 'easeInFast',
        })
        .to(
          '.dropdown__section--one p',
          { opacity: 0, y: 20, duration: 0.3, ease: 'easeInFast' },
          '-=0.1'
        )
        .to(
          '.dropdown__section--one h1',
          { opacity: 0, y: 20, duration: 0.3, ease: 'easeInFast' },
          '-=0.1'
        )
        .to('.divider', { width: '0%', duration: 0.4, ease: 'easeInFast' })
        .add(() => {
          gsap.to([dropdown, navigation, content], {
            y: '0',
            duration: 0.4,
            ease: 'easeInFast',
          });
        })
        .add(() => {
          setIsOpen(false);
        });
    }
  };

  const handleButtonClick = () => {
    toggleMenu();
  };

  return (
    <nav className="navigation hidden md:block font-Ramaraja" id="navigation" ref={navigationRef}>
      <div className="navigation__container">
        <div className="navigation__logo">{shortName ? shortName : 'Hà anh'}</div>
        <div className="navigation__menu-btn" id="menu-btn" onClick={toggleMenu}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </div>
      </div>

      <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
        <div className="dropdown__section dropdown__section--one">
          <h1 className="dropdown__word">{shortName ? shortName : 'Hà anh'}</h1>
          <p className="dropdown__quote hidden min-[1100px]:block">
            “Learning to code is useful no matter what your career ambitions are.”
          </p>
        </div>
        <div className="dropdown__section dropdown__section--three">
          <div className="divider"></div>
          <div className="dropdown__nav">
            <a className="dropdown__button" href="#about" onClick={handleButtonClick}>
              About
            </a>
            <a className="dropdown__button" href="#portfolio" onClick={handleButtonClick}>
              Projects
            </a>
            <a className="dropdown__button" href="#skills" onClick={handleButtonClick}>
              Experience
            </a>
            <a className="dropdown__button" href="#contact" onClick={handleButtonClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
