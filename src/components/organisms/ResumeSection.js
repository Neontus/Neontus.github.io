import React, { useContext } from 'react';
import { Download } from 'lucide-react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { DarkModeContext } from '../../context/DarkModeContext';

const ResumeSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Juno_Kim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h2" dark={darkMode} className="mb-12 text-center">resume</Text>

        <div className="flex flex-col gap-6">
          {/* PDF Viewer Container */}
          <div className={`rounded-lg border-2 overflow-hidden ${
            darkMode
              ? 'border-gray-700 bg-gray-900'
              : 'border-gray-200 bg-gray-50'
          }`}>
            <iframe
              src="/resume.pdf"
              width="100%"
              height="600"
              title="Juno Kim Resume"
              className="w-full"
              style={{ minHeight: '600px' }}
            />
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              variant={darkMode ? 'primary_dark' : 'primary'}
              size="md"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
