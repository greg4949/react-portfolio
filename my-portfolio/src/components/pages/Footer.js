import React from 'react';

export default function Footer() {
    return (
        <footer  style={{ backgroundColor: '#f8f9fa', padding: '20px', fontSize: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <a href="tel:123-456-7890" style={{ marginRight: '10px' }}>123-456-7890</a>
            <a href="mailto:greg@email.com">greg@email.com</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <a href="https://github.com/greg4949" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/greg-kitchen-25299317/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }