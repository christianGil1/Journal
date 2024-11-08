import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const ResumeModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-3xl p-4 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 font-bold text-lg">
                    ×
                </button>
                <h2 className="text-xl font-semibold mb-4">Resume</h2>
                <div style={{ height: '500px' }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer
                            fileUrl="/Journal/ChristianGil_Alaan_Resume.pdf"
                            plugins={[]}
                        />
                    </Worker>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
