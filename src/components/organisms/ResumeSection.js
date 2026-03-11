import React, { useContext } from 'react';
import { Download } from 'lucide-react';
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
    <section id="resume" className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-14">
          <p className={`font-mono text-xs tracking-[0.22em] uppercase mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            ✦ experience & education
          </p>
          <h2 className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            resume
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* PDF viewer */}
          <div
            className={`rounded-xl overflow-hidden border ${
              darkMode ? 'border-white/[0.07]' : 'border-zinc-200'
            }`}
          >
            <iframe
              src="/resume.pdf"
              width="100%"
              height="700"
              title="Juno Kim Resume"
              className="w-full block"
              style={{ minHeight: '700px' }}
            />
          </div>

          {/* Download button */}
          <div className="flex">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                boxShadow: '0 0 20px rgba(168,85,247,0.28)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 36px rgba(168,85,247,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.28)'; }}
            >
              <Download size={15} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
