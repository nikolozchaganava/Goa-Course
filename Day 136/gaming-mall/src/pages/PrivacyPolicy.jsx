import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function PrivacyPolicy() {
  useEffect(() => {
    const privacyPolicy = document.querySelector('.privacy-policy');
    gsap.fromTo(
      privacyPolicy,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="privacy-policy text-3xl">Privacy Policy</div>
    </div>
  );
};
