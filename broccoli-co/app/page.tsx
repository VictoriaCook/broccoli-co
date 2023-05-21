'use client';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import BodyText from './components/BodyText/BodyText';
import InvitationModal from './components/InvitationModal/InvitationModal';
import InvitationSuccessModal from './components/InvitationSuccessModal/InvitationSuccessModal';
import HighlightText from './components/HighlightText/HighlightText';
import styles from './page.module.css';

export default function HomePage() {
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsInvitationModalOpen(false);
    setIsSuccessModalOpen(true);
  }

  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
        <Title>A <HighlightText text="better"/> way to enjoy every day</Title>
        <BodyText>Be the <HighlightText text="first"/> to know when we launch.</BodyText>
        <Button buttonText="Request an invite" onClick={() => setIsInvitationModalOpen(true)}/>
      </main>
      <Footer />
      <InvitationModal 
          open={isInvitationModalOpen}
          onHide={() => setIsInvitationModalOpen(false)}
          onSuccess={handleSuccess}
        />
        <InvitationSuccessModal open={isSuccessModalOpen} onHide={() => setIsSuccessModalOpen(false)}/>
    </>
  );
}