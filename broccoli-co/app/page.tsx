'use client';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import BodyText from './components/BodyText/BodyText';
import InvitationModal from './components/InvitationModal/InvitationModal';
import InvitationSuccessModal from './components/InvitationSuccessModal/InvitationSuccessModal';

export default function HomePage() {
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccess = () => {
    console.log('success');
    setIsInvitationModalOpen(false);
    setIsSuccessModalOpen(true);
  }

  return (
    <div>
      <Header />
          <Title />
          <BodyText />
          <Button buttonText="Request an invite" onClick={() => setIsInvitationModalOpen(true)}/>
        <Footer />
        <InvitationModal 
          open={isInvitationModalOpen}
          onHide={() => setIsInvitationModalOpen(false)}
          onSuccess={handleSuccess}
        />
        <InvitationSuccessModal open={isSuccessModalOpen} onHide={() => setIsSuccessModalOpen(false)}/>
    </div>
  );
}