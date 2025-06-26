/*function PageNotFound() {
    return(
        <div style={{textAlign:"center", marginTop:"30px"}}>
            <img src="https://png.pngtree.com/png-vector/20210702/ourmid/pngtree-error-404-page-not-found-website-png-image_3545448.jpg" alt="" width={800} height={400}/>
        </div>
    );
}
export default PageNotFound;*/

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const PageNotFound = () => {
    useEffect(() => {
        // Create stars
        const starsContainer = document.getElementById('stars');
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random animation duration between 2s and 5s
            const duration = `${Math.random() * 3 + 2}s`;
            star.style.setProperty('--duration', duration);

            // Random delay
            star.style.animationDelay = `${Math.random() * 5}s`;

            starsContainer.appendChild(star);
        }

        // Make astronaut follow mouse slightly
        const astronaut = document.querySelector('.astronaut');
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            astronaut.style.transform = `translate(calc(${x * 20 - 10}px), calc(${y * 20 - 10}px))`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleButtonClick = (e) => {
        // Button ripple effect
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        e.target.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    };

    return (
        <PageContainer>
            <StarsContainer id="stars" />
            <Planet />
            <Astronaut
                src="https://cdn-icons-png.flaticon.com/512/5659/5659518.png"
                alt="Astronaut"
                className="astronaut"
            />

            <ContentContainer>
                <Title>404</Title>
                <Subtitle>Oops! Page Lost in Space</Subtitle>
                <Description>
                    The page you're looking for doesn't exist or has been moved to another galaxy.
                    Don't worry, our astronaut team is searching for it!
                </Description>
                <HomeButton onClick={handleButtonClick}>Return to Earth</HomeButton>
            </ContentContainer>
        </PageContainer>
    );
};

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0% { 
    transform: scale(1);
    box-shadow: 0 0 50px rgba(74, 85, 200, 0.6);
  }
  100% { 
    transform: scale(1.05);
    box-shadow: 0 0 80px rgba(74, 85, 200, 0.8);
  }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
`;

// Styled components
const PageContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #fff;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  
  .star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    animation: ${twinkle} var(--duration) infinite ease-in-out;
  }
`;

const Planet = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 10%;
  bottom: 10%;
  background: radial-gradient(circle at 30% 30%, #4e54c8, #2a3bd1);
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(74, 85, 200, 0.6);
  z-index: -1;
  animation: ${pulse} 8s infinite alternate;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    left: 5%;
    bottom: 5%;
  }
`;

const Astronaut = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  right: 10%;
  top: 20%;
  animation: ${float} 6s ease-in-out infinite;
  z-index: -1;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    right: 5%;
    top: 15%;
  }
`;

const ContentContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #ffa3a3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #e6e6e6;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #b8b8b8;
  line-height: 1.6;
`;

const HomeButton = styled.button`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export default PageNotFound;