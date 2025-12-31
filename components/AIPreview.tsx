
import React, { useState } from 'react';
import { generateSEOSuggestions } from '../services/geminiService';

const AIPreview: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{titleTag: string, metaDescription: string, contentIdeas: string[]} | null>(null);

  const handleTest = async () => {
    if (!keyword) return;
    setLoading(true);
    try {
      const data = await generateSEOSuggestions(keyword);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Prøv vår AI-generator</h2>
          <p className="text-slate-600">Skriv inn et søkeord og se hvordan vår AI automatisk optimaliserer innholdet ditt.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex gap-2 mb-8">
            <input 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="F.eks. 'miljøvennlige kaffebønner'"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 transition-all"
            />
            <button 
              onClick={handleTest}
              disabled={loading || !keyword}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:translate-y-0 transition-all flex items-center gap-2 transform"
            >
              {loading ? (
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </span>
              ) : 'Generer SEO-forslag'}
            </button>
          </div>

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">Title Tag</span>
                <p className="text-slate-900 font-semibold">{result.titleTag}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Meta Description</span>
                <p className="text-slate-700 text-sm leading-relaxed">{result.metaDescription}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-3">Innholdsideer</span>
                <div className="grid md:grid-cols-2 gap-3">
                  {result.contentIdeas.map((idea, i) => (
                    <div key={i} className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-sm text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      {idea}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPreview;
