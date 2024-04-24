import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from './dummy.pdf';

const Time = () => {
 const [numPages, setNumPages] = useState<number>();
 const [pageNumber, setPageNumber] = useState<number>(1);

 function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
 }

 function goToPreviousPage() {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
 }

 function goToNextPage() {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
 }

 // Define inline styles with explicit types
 const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // This line is now correctly typed
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
 };

 const buttonStyle: React.CSSProperties = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
 };

 const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
 };

 return (
    <div style={containerStyle}>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button
        onClick={goToPreviousPage}
        disabled={pageNumber <= 1}
        style={pageNumber <= 1 ? disabledButtonStyle : buttonStyle}
      >
        Previous
      </button>
      <button
        onClick={goToNextPage}
        disabled={pageNumber >= numPages}
        style={pageNumber >= numPages ? disabledButtonStyle : buttonStyle}
      >
        Next
      </button>
    </div>
 );
};

export default Time;
