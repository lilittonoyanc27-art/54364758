import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Volume2,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Award,
  Layers,
  GraduationCap,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  RotateCcw,
  VolumeX,
  Play,
  ArrowRight,
  ArrowLeft,
  ListFilter
} from 'lucide-react';
import { LESSONS, LessonSection } from './lessonsData';
import {
  RECOGNITION_CARDS,
  FIGURES_DISTINCTION_TABLE,
  VOCABULARY_LIST,
  GRAMMAR_EXPRESSIONS,
  EXAM_QUESTIONS,
  MINI_QUIZ,
  METRIC_EXERCISES,
  QUICK_REVIEW_TABLE
} from './guideData';

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<string>('lessons');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all');

  // Global toggle: Reveal all translations vs click-to-reveal
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);

  // Set of individually opened item IDs for Armenian translations
  const [openedTranslations, setOpenedTranslations] = useState<Set<string>>(new Set());

  // Search filter
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Audio Speech state
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Recognition Flashcard state
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [cardRevealed, setCardRevealed] = useState<boolean>(false);

  // Mini Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Font size scaling state: 'normal' | 'large' | 'xlarge'
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');

  // Metric custom calculator verse
  const [customVerse, setCustomVerse] = useState<string>('Por la plaza va la niña');
  const [selectedMetricPreset, setSelectedMetricPreset] = useState<number>(1);

  // Function to toggle individual Armenian translation
  const toggleTranslation = (id: string) => {
    setOpenedTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isTranslated = (id: string) => {
    return showAllTranslations || openedTranslations.has(id);
  };

  // Text-to-speech for Spanish pronunciation
  const speakSpanish = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    if (speakingText === text) {
      setSpeakingText(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88; // slightly slower for language learners
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);

    setSpeakingText(text);
    window.speechSynthesis.speak(utterance);
  };

  // Filter lessons based on search query
  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) {
      if (selectedLessonId === 'all') return LESSONS;
      return LESSONS.filter((l) => l.id === selectedLessonId);
    }
    const q = searchQuery.toLowerCase();
    return LESSONS.filter((lesson) => {
      const matchesTitle =
        lesson.titleEs.toLowerCase().includes(q) ||
        lesson.titleHy.toLowerCase().includes(q) ||
        lesson.subtitleHy.toLowerCase().includes(q);

      const matchesBlock = lesson.contentBlocks.some((b) =>
        b.titleEs.toLowerCase().includes(q) ||
        b.titleHy.toLowerCase().includes(q) ||
        b.items.some(
          (item) =>
            item.es.toLowerCase().includes(q) ||
            item.hy.toLowerCase().includes(q) ||
            (item.explanationHy && item.explanationHy.toLowerCase().includes(q))
        )
      );

      return matchesTitle || matchesBlock;
    });
  }, [searchQuery, selectedLessonId]);

  // Filtered Exam Questions
  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return EXAM_QUESTIONS;
    const q = searchQuery.toLowerCase();
    return EXAM_QUESTIONS.filter(
      (item) =>
        item.questionEs.toLowerCase().includes(q) ||
        item.questionHy.toLowerCase().includes(q) ||
        item.answerEs.toLowerCase().includes(q) ||
        item.answerHy.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered Vocabulary
  const filteredVocabulary = useMemo(() => {
    if (!searchQuery.trim()) return VOCABULARY_LIST;
    const q = searchQuery.toLowerCase();
    return VOCABULARY_LIST.filter(
      (v) =>
        v.wordEs.toLowerCase().includes(q) ||
        v.wordHy.toLowerCase().includes(q) ||
        v.explanationEs.toLowerCase().includes(q) ||
        v.explanationHy.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Quiz score calculation
  const quizScore = useMemo(() => {
    let score = 0;
    MINI_QUIZ.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [userAnswers]);

  // Syllable helper logic for custom verse simulator
  const analyzeVerseMetrics = (line: string) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    const words = trimmed.split(/\s+/);
    let rawSyllableEstimate = 0;
    const vowelsRegex = /[aeiouáéíóúü]/gi;

    words.forEach((w) => {
      const matches = w.match(vowelsRegex);
      rawSyllableEstimate += matches ? Math.max(1, matches.length) : 1;
    });

    const lastWord = words[words.length - 1].toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
    let accentType = 'llana';
    let accentAdjust = 0;

    if (/[áéíóú]/.test(lastWord)) {
      const match = lastWord.match(/[áéíóú]/);
      if (match) {
        const idx = lastWord.indexOf(match[0]);
        const fromEnd = lastWord.length - 1 - idx;
        if (fromEnd <= 1) {
          accentType = 'aguda';
          accentAdjust = 1;
        } else if (fromEnd >= 3) {
          accentType = 'esdrújula';
          accentAdjust = -1;
        } else {
          accentType = 'llana';
          accentAdjust = 0;
        }
      }
    } else {
      if (/[ns]$/.test(lastWord) || /[aeiou]$/.test(lastWord)) {
        accentType = 'llana';
        accentAdjust = 0;
      } else {
        accentType = 'aguda';
        accentAdjust = 1;
      }
    }

    return {
      words,
      rawSyllables: rawSyllableEstimate,
      lastWord,
      accentType,
      accentAdjust
    };
  };

  const verseAnalysis = analyzeVerseMetrics(customVerse);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col font-size-${fontSize}`}>
      {/* Top Banner / Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-950 text-white shadow-xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-indigo-950 text-xs font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                  GUÍA DE EXAMEN
                </span>
                <span className="text-blue-200 text-xs font-medium">
                  Español + Հայերեն
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
                GUÍA COMPLETA PARA EL EXAMEN DE LENGUA Y LITERATURA
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5 max-w-3xl font-medium">
                Իսպաներեն + հայերեն | Բոլոր 6 էջերի թեմաները՝ բացատրություններով, օրինակներով և քննական հարցերով
              </p>
            </div>

            {/* Quick action controls */}
            <div className="flex flex-wrap items-center gap-2.5 self-start md:self-center">
              {/* Font Size Selector */}
              <div className="flex items-center bg-indigo-950/70 p-1 rounded-xl border border-indigo-700/60 shadow-xs">
                <span className="text-[11px] text-blue-200 px-2 font-bold hidden sm:inline">
                  Տառաչափ:
                </span>
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSize === 'normal'
                      ? 'bg-amber-400 text-indigo-950 shadow-sm font-black'
                      : 'text-blue-200 hover:text-white hover:bg-indigo-800/60'
                  }`}
                  title="Ստանդարտ տառաչափ"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSize === 'large'
                      ? 'bg-amber-400 text-indigo-950 shadow-sm font-black'
                      : 'text-blue-200 hover:text-white hover:bg-indigo-800/60'
                  }`}
                  title="Մեծ տառաչափ (Խորհուրդ տրվող)"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSize === 'xlarge'
                      ? 'bg-amber-400 text-indigo-950 shadow-sm font-black'
                      : 'text-blue-200 hover:text-white hover:bg-indigo-800/60'
                  }`}
                  title="Շատ մեծ տառաչափ"
                >
                  A++
                </button>
              </div>

              {/* Reveal All Toggle */}
              <button
                onClick={() => setShowAllTranslations(!showAllTranslations)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer ${
                  showAllTranslations
                    ? 'bg-amber-400 text-indigo-950 hover:bg-amber-300 ring-2 ring-amber-300'
                    : 'bg-indigo-800/90 hover:bg-indigo-750 text-white border border-indigo-600/70'
                }`}
                title={showAllTranslations ? 'Անջատել թարգմանությունները' : 'Բացել բոլոր թարգմանությունները'}
              >
                {showAllTranslations ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span>
                  {showAllTranslations ? 'Հայերենը բացված է' : 'Սեղմի՛ր իսպաներենին (Թարգմ.)'}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="mt-3 pt-2 border-t border-indigo-800/60 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none pb-1">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs font-semibold whitespace-nowrap">
              <button
                onClick={() => { setActiveTab('lessons'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'lessons'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>1. Թեմաներ (1–7)</span>
              </button>

              <button
                onClick={() => { setActiveTab('theatre'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'theatre'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2. Թատերական տեքստ</span>
              </button>

              <button
                onClick={() => { setActiveTab('romance'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'romance'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3. Ռոմանս & Տաղաչափություն</span>
              </button>

              <button
                onClick={() => { setActiveTab('figures'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'figures'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>4. Արտահայտչամիջոցներ (12 քարտ)</span>
              </button>

              <button
                onClick={() => { setActiveTab('vocab'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'vocab'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>5. Բառապաշար & Քերականություն</span>
              </button>

              <button
                onClick={() => { setActiveTab('questions'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'questions'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>6. Քննական 30 հարց</span>
              </button>

              <button
                onClick={() => { setActiveTab('quiz'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'bg-amber-400 text-indigo-950 shadow font-bold'
                    : 'text-amber-300 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>7. Թեստ (10 հարց)</span>
              </button>

              <button
                onClick={() => { setActiveTab('review'); }}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'review'
                    ? 'bg-white text-indigo-900 shadow font-bold'
                    : 'text-indigo-200 hover:text-white hover:bg-indigo-800/60'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>8. Վերջնական կրկնություն</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Global Interactive Notification / Guide Banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between text-xs text-amber-900 gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              💡 <strong>Ինտերակտիվ ռեժիմ.</strong> Սեղմի՛ր ցանկացած իսպաներեն նախադասության, բառի կամ սահմանման վրա՝ հայերեն թարգմանությունն ու բացատրությունը բացելու համար։
            </span>
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span className="text-slate-600">
              🔊 Կարող ես նաև սեղմել բարձրախոսին՝ իսպաներեն արտասանությունը լսելու համար։
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
        {/* Search Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Փնտրել իսպաներեն կամ հայերեն բառ, սահմանում, ժանր, հարց (օր.՝ romance, asíndeton, lírica, թատրոն)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                Մաքրել
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: LESSONS (PARTE 1 TO 7) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'lessons' && (
          <div className="space-y-8">
            {/* Topic selector pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedLessonId('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedLessonId === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Բոլոր թեմաները (1–7)
              </button>
              {LESSONS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLessonId(l.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLessonId === l.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {l.badge}: {l.titleEs}
                </button>
              ))}
            </div>

            {/* List of lesson sections */}
            <div className="space-y-10">
              {filteredLessons.map((lesson) => (
                <section
                  key={lesson.id}
                  id={lesson.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
                >
                  {/* Section Header */}
                  <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-5 text-white">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {lesson.badge}
                      </span>
                      <span className="text-indigo-200 text-xs font-medium">
                        {lesson.titleHy}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black mt-1 text-white">
                      {lesson.titleEs}
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">
                      {lesson.subtitleHy}
                    </p>
                  </div>

                  {/* Section Content Blocks */}
                  <div className="p-5 sm:p-6 space-y-8">
                    {lesson.contentBlocks.map((block, bIdx) => (
                      <div key={bIdx} className="space-y-4">
                        <div className="border-b border-slate-200 pb-2 flex items-baseline justify-between flex-wrap gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-600" />
                            {block.titleEs}
                          </h3>
                          <span className="text-xs text-indigo-700 font-medium bg-indigo-50 px-2 py-0.5 rounded">
                            {block.titleHy}
                          </span>
                        </div>

                        {/* Interactive items list */}
                        {block.items && block.items.length > 0 && (
                          <div className="grid grid-cols-1 gap-3">
                            {block.items.map((item) => {
                              const open = isTranslated(item.id);
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => toggleTranslation(item.id)}
                                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                                    open
                                      ? 'bg-indigo-50/70 border-indigo-300 shadow-xs'
                                      : 'bg-white hover:bg-slate-50 border-slate-200'
                                  }`}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                      {item.tag && (
                                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded mb-1.5">
                                          {item.tag}
                                        </span>
                                      )}
                                      <div className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                                        {item.es}
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                      <button
                                        type="button"
                                        onClick={(e) => speakSpanish(item.es, e)}
                                        className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-100/60 transition-colors cursor-pointer"
                                        title="Լսել իսպաներենով"
                                      >
                                        {speakingText === item.es ? (
                                          <VolumeX className="w-5 h-5 text-indigo-600" />
                                        ) : (
                                          <Volume2 className="w-5 h-5" />
                                        )}
                                      </button>
                                      <div className="p-1.5 text-slate-400">
                                        {open ? (
                                          <ChevronUp className="w-5 h-5 text-indigo-600" />
                                        ) : (
                                          <ChevronDown className="w-5 h-5" />
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Revealed Armenian Translation & Explanation */}
                                  {open ? (
                                    <div className="mt-3.5 pt-3.5 border-t border-indigo-200/80 space-y-2.5 animate-in fade-in duration-150">
                                      <div className="text-base sm:text-lg font-bold text-indigo-950 leading-relaxed">
                                        🇦🇲 {item.hy}
                                      </div>
                                      {item.explanationHy && (
                                        <div className="text-sm sm:text-base text-slate-800 bg-white/95 p-3 rounded-xl border border-indigo-100 leading-relaxed">
                                          <strong className="text-indigo-900 font-bold">Բացատրություն.</strong> {item.explanationHy}
                                        </div>
                                      )}
                                      {item.examTipHy && (
                                        <div className="text-sm sm:text-base text-amber-950 bg-amber-50/90 p-3 rounded-xl border border-amber-200 leading-relaxed font-medium">
                                          🎯 <strong className="text-amber-950 font-bold">Քննության հուշում.</strong> {item.examTipHy}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div className="mt-2 text-xs sm:text-sm text-indigo-600 flex items-center gap-1 font-semibold">
                                      <span>Սեղմի՛ր հայերեն թարգմանությունը տեսնելու համար</span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Interactive Table if present */}
                        {block.tableData && (
                          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                            <table className="w-full text-left text-xs sm:text-sm">
                              <thead className="bg-slate-100/90 text-slate-700 border-b border-slate-200 uppercase text-[11px] font-bold">
                                <tr>
                                  {block.tableData.headers.map((h, hIdx) => (
                                    <th key={hIdx} className="p-3 font-bold">
                                      {h.es}
                                      <span className="block font-normal text-slate-500 lowercase">
                                        ({h.hy})
                                      </span>
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 bg-white">
                                {block.tableData.rows.map((row, rIdx) => {
                                  const rowId = `table-${lesson.id}-${bIdx}-${rIdx}`;
                                  const open = isTranslated(rowId);
                                  return (
                                    <tr
                                      key={rIdx}
                                      onClick={() => toggleTranslation(rowId)}
                                      className={`cursor-pointer transition-colors ${
                                        open ? 'bg-indigo-50/60' : 'hover:bg-slate-50'
                                      }`}
                                    >
                                      <td className="p-3 font-semibold text-slate-900">
                                        <div>{row.col1.es}</div>
                                        {open && (
                                          <div className="text-xs text-indigo-800 font-medium mt-1">
                                            🇦🇲 {row.col1.hy}
                                          </div>
                                        )}
                                      </td>
                                      <td className="p-3 text-slate-700">
                                        <div>{row.col2.es}</div>
                                        {open && (
                                          <div className="text-xs text-indigo-900 font-medium mt-1">
                                            🇦🇲 {row.col2.hy}
                                          </div>
                                        )}
                                      </td>
                                      {row.col3 && (
                                        <td className="p-3 text-slate-700">
                                          <div>{row.col3.es}</div>
                                          {open && (
                                            <div className="text-xs text-indigo-900 font-medium mt-1">
                                              🇦🇲 {row.col3.hy}
                                            </div>
                                          )}
                                        </td>
                                      )}
                                      {row.col4 && (
                                        <td className="p-3 text-slate-700">
                                          <div>{row.col4.es}</div>
                                          {open && (
                                            <div className="text-xs text-indigo-900 font-medium mt-1">
                                              🇦🇲 {row.col4.hy}
                                            </div>
                                          )}
                                        </td>
                                      )}
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                            <div className="bg-slate-50 px-3 py-1.5 text-[11px] text-slate-500 text-center font-medium">
                              👆 Սեղմի՛ր ցանկացած տողի վրա՝ հայերեն թարգմանությունը տեսնելու համար
                            </div>
                          </div>
                        )}

                        {/* Story Analysis Grid if present */}
                        {block.storyAnalysis && (
                          <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                              Պատմվածքի տարրերի վերլուծություն (Análisis de la narración)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                              {block.storyAnalysis.map((sa, saIdx) => {
                                const saId = `story-${lesson.id}-${saIdx}`;
                                const open = isTranslated(saId);
                                return (
                                  <div
                                    key={saIdx}
                                    onClick={() => toggleTranslation(saId)}
                                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                                      open
                                        ? 'bg-white border-indigo-300 shadow-xs'
                                        : 'bg-white/70 border-slate-200 hover:bg-white'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between text-indigo-900 font-bold mb-1">
                                      <span>{sa.labelEs}</span>
                                      <span className="text-slate-500 font-normal">({sa.labelHy})</span>
                                    </div>
                                    <div className="text-slate-800 font-medium">{sa.valueEs}</div>
                                    {open ? (
                                      <div className="mt-1.5 pt-1.5 border-t border-slate-100 text-indigo-900 font-medium">
                                        🇦🇲 {sa.valueHy}
                                      </div>
                                    ) : (
                                      <div className="text-[10px] text-slate-400 mt-1">Սեղմի՛ր թարգմանության համար</div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: THEATRE SCENE & ACTS (PARTE 6 / TEMA 7) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'theatre' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-amber-400 text-purple-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                TEMA 7 & PARTE 6
              </span>
              <h2 className="text-2xl font-black mt-2">
                Թատերական տեքստի ամբողջական վերլուծություն
              </h2>
              <p className="text-purple-100 text-sm mt-1 max-w-3xl">
                Պիեսի բնօրինակ հատված՝ ակտեր, տեսարաններ, դերասանների խոսք, բեմական ցուցումներ (acotaciones) և aparte։ Սեղմի՛ր յուրաքանչյուր տողի վրա թարգմանությունը տեսնելու համար։
              </p>
            </div>

            {/* Script Box */}
            <div className="bg-white rounded-2xl border border-purple-200 shadow-sm p-6 space-y-4">
              <div className="text-center pb-4 border-b border-slate-200">
                <span className="text-xs uppercase font-extrabold tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  ACTO PRIMERO — ESCENA PRIMERA
                </span>
                <p className="text-xs text-slate-500 mt-1">Առաջին գործողություն — Առաջին տեսարան</p>
              </div>

              {/* Acotación inicial */}
              <div
                onClick={() => toggleTranslation('script-acot-1')}
                className={`p-4 rounded-xl border italic text-sm cursor-pointer transition-all ${
                  isTranslated('script-acot-1')
                    ? 'bg-purple-50 border-purple-300 text-purple-950'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-purple-600 not-italic uppercase tracking-wide">
                    Acotación de espacio / Decorado
                  </span>
                  <button
                    onClick={(e) => speakSpanish('Un salón pequeño. Hay una mesa junto a la ventana. Laura está leyendo un libro.', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-serif">
                  «(Un salón pequeño. Hay una mesa junto a la ventana. Laura está leyendo un libro.)»
                </div>
                {isTranslated('script-acot-1') && (
                  <div className="mt-2 pt-2 border-t border-purple-200/80 not-italic font-sans text-xs text-purple-900 font-medium">
                    🇦🇲 <strong>Հայերեն.</strong> (Փոքր հյուրասենյակ։ Պատուհանի մոտ սեղան կա։ Լաուրան գիրք է կարդում։)
                    <div className="text-slate-600 mt-1">
                      🔍 <strong>Վերլուծություն.</strong> Սա բեմական ցուցում է (acotación), որը նկարագրում է գործողության վայրը (decorado) և հերոսի նախնական վիճակը։ Դերասանը սա բարձրաձայն չի ասում։
                    </div>
                  </div>
                )}
              </div>

              {/* Dialogue line 1 */}
              <div
                onClick={() => toggleTranslation('script-line-1')}
                className={`p-4 rounded-xl border text-sm cursor-pointer transition-all ${
                  isTranslated('script-line-1')
                    ? 'bg-purple-50 border-purple-300 text-purple-950'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-700 uppercase">PABLO:</span>
                  <button
                    onClick={(e) => speakSpanish('Entrando rápidamente. ¡Laura! ¡Tengo una noticia importante!', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-medium">
                  <span className="italic text-purple-600 font-normal">(Entrando rápidamente.)</span> ¡Laura! ¡Tengo una noticia importante!
                </div>
                {isTranslated('script-line-1') && (
                  <div className="mt-2 pt-2 border-t border-purple-200/80 text-xs text-purple-900">
                    🇦🇲 <strong>Հայերեն.</strong> ՊԱԲԼՈ. (Արագ ներս մտնելով։) Լաուրա՛։ Ես կարևոր նորություն ունեմ։
                    <div className="text-slate-600 mt-1">
                      🔍 «Entrando rápidamente»-ն շարժման բեմական ցուցում է (acotación de movimiento)։
                    </div>
                  </div>
                )}
              </div>

              {/* Dialogue line 2 */}
              <div
                onClick={() => toggleTranslation('script-line-2')}
                className={`p-4 rounded-xl border text-sm cursor-pointer transition-all ${
                  isTranslated('script-line-2')
                    ? 'bg-purple-50 border-purple-300 text-purple-950'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-700 uppercase">LAURA:</span>
                  <button
                    onClick={(e) => speakSpanish('Sorprendida. ¿Qué ha pasado?', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-medium">
                  <span className="italic text-purple-600 font-normal">(Sorprendida.)</span> ¿Qué ha pasado?
                </div>
                {isTranslated('script-line-2') && (
                  <div className="mt-2 pt-2 border-t border-purple-200/80 text-xs text-purple-900">
                    🇦🇲 <strong>Հայերեն.</strong> ԼԱՈՒՐԱ. (Զարմացած։) Ի՞նչ է պատահել։
                    <div className="text-slate-600 mt-1">
                      🔍 «Sorprendida»-ն հույզի բեմական ցուցում է (acotación de emoción/gesto)։
                    </div>
                  </div>
                )}
              </div>

              {/* Dialogue line 3 */}
              <div
                onClick={() => toggleTranslation('script-line-3')}
                className={`p-4 rounded-xl border text-sm cursor-pointer transition-all ${
                  isTranslated('script-line-3')
                    ? 'bg-purple-50 border-purple-300 text-purple-950'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-700 uppercase">PABLO:</span>
                  <button
                    onClick={(e) => speakSpanish('¡He ganado el concurso!', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-medium">¡He ganado el concurso!</div>
                {isTranslated('script-line-3') && (
                  <div className="mt-2 pt-2 border-t border-purple-200/80 text-xs text-purple-900">
                    🇦🇲 <strong>Հայերեն.</strong> ՊԱԲԼՈ. Ես հաղթել եմ մրցույթում։
                  </div>
                )}
              </div>

              {/* Dialogue line 4 */}
              <div
                onClick={() => toggleTranslation('script-line-4')}
                className={`p-4 rounded-xl border text-sm cursor-pointer transition-all ${
                  isTranslated('script-line-4')
                    ? 'bg-purple-50 border-purple-300 text-purple-950'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-700 uppercase">LAURA:</span>
                  <button
                    onClick={(e) => speakSpanish('Sonriendo. ¡Qué alegría! ¡Felicidades!', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-medium">
                  <span className="italic text-purple-600 font-normal">(Sonriendo.)</span> ¡Qué alegría! ¡Felicidades!
                </div>
                {isTranslated('script-line-4') && (
                  <div className="mt-2 pt-2 border-t border-purple-200/80 text-xs text-purple-900">
                    🇦🇲 <strong>Հայերեն.</strong> ԼԱՈՒՐԱ. (Ժպտալով։) Ի՜նչ ուրախություն։ Շնորհավորո՜ւմ եմ։
                  </div>
                )}
              </div>

              {/* Dialogue line 5 with APARTE */}
              <div
                onClick={() => toggleTranslation('script-line-5')}
                className={`p-4 rounded-xl border text-sm cursor-pointer transition-all ${
                  isTranslated('script-line-5')
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : 'bg-amber-50/40 border-amber-200 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-700 uppercase flex items-center gap-2">
                    PABLO:
                    <span className="bg-amber-200 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      EL APARTE
                    </span>
                  </span>
                  <button
                    onClick={(e) => speakSpanish('Aparte. Todavía no sabe que también he ganado un viaje.', e)}
                    className="p-1 text-slate-400 hover:text-purple-700"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-1 font-medium">
                  <span className="italic font-bold text-amber-800">(Aparte.)</span> Todavía no sabe que también he ganado un viaje.
                </div>
                {isTranslated('script-line-5') && (
                  <div className="mt-2 pt-2 border-t border-amber-200 text-xs text-amber-950 font-medium">
                    🇦🇲 <strong>Հայերեն.</strong> ՊԱԲԼՈ (մի կողմ՝ հանդիսատեսին). Նա դեռ չգիտի, որ ես նաև ճանապարհորդություն եմ շահել։
                    <div className="text-slate-700 mt-1">
                      🔍 <strong>Ի՞նչ է aparte-ն.</strong> Թատերական հատուկ հնարք, երբ հերոսը խոսում է հանդիսատեսի հետ, իսկ բեմի մյուս հերոսները (այստեղ՝ Լաուրան) պայմանականորեն դա չեն լսում։
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Crucial Distinctions in Theater (Decorado vs Atrezo vs Vestuario) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  1. Decorado
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">Դեկորացիա</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Բեմի ձևավորումը, որը ներկայացնում է վայրը (օր.՝ պատ, որը ներկայացնում է տուն կամ ամրոց)։
                </p>
                <div className="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 italic">
                  «En el escenario hay una pared que representa una casa.»
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  2. Atrezo
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">Բեմական առարկաներ (ռեկվիզիտ)</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Այն շարժական իրերը, որոնք դերասանն օգտագործում է ձեռքերով (նամակ, բաժակ, հեռախոս, սուր)։
                </p>
                <div className="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 italic">
                  «El actor utiliza una carta, una taza y un teléfono.»
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  3. Vestuario
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2">Բեմական հանդերձանք</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Հերոսների հագուստը և աքսեսուարները, որոնք ցույց են տալիս դարաշրջանը կամ սոցիալական դերը։
                </p>
                <div className="mt-3 text-xs bg-slate-50 p-2 rounded text-slate-700 italic">
                  «La actriz lleva un vestido rojo / armadura.»
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: ROMANCE & METRIC SIMULATOR (PARTE 5 / TEMA 5) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'romance' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-teal-950 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-amber-400 text-teal-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                PARTE 5 & TEMA 5
              </span>
              <h2 className="text-2xl font-black mt-2">
                Ռոմանսի կառուցվածքը և տաղաչափական հաշվարկիչ
              </h2>
              <p className="text-teal-100 text-sm mt-1 max-w-3xl">
                Իմացի՛ր 8− և 8a սխեման, սինալեֆայի կիրառումը, վերջին բառի շեշտադրության կանոնները (+1, 0, −1) և փորձարկի՛ր քննության օրինակները։
              </p>
            </div>

            {/* Step-by-Step Analysis of the 4 Classic Romance Verses */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <h3 className="text-lg font-black text-slate-900">
                  Դասական ռոմանսի քառատողի մանրակրկիտ վերլուծություն
                </h3>
                <span className="text-xs bg-teal-50 text-teal-800 font-bold px-2.5 py-1 rounded-full border border-teal-200">
                  Սխեմա՝ 8− / 8a / 8− / 8a
                </span>
              </div>

              <div className="space-y-3">
                {METRIC_EXERCISES.map((ex) => {
                  const open = isTranslated(`metric-ex-${ex.id}`);
                  return (
                    <div
                      key={ex.id}
                      onClick={() => toggleTranslation(`metric-ex-${ex.id}`)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        open
                          ? 'bg-teal-50/70 border-teal-300'
                          : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-bold">
                            {ex.id}
                          </span>
                          <span className="text-sm font-bold text-slate-900">{ex.verseEs}</span>
                          <span className="bg-slate-200/80 text-slate-700 text-xs px-2 py-0.5 rounded font-mono font-bold">
                            {ex.id % 2 === 1 ? '8−' : '8a'}
                          </span>
                        </div>
                        <button
                          onClick={(e) => speakSpanish(ex.verseEs, e)}
                          className="p-1 text-slate-400 hover:text-teal-700"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Syllables breakdown pill */}
                      <div className="mt-2 text-xs font-mono text-teal-900 bg-white p-2 rounded-lg border border-teal-100 flex items-center gap-1 overflow-x-auto">
                        <span className="font-bold">Վանկատում՝</span> {ex.syllablesText} = <span className="font-bold underline">{ex.totalMétricas} sílabas</span>
                      </div>

                      {open ? (
                        <div className="mt-3 pt-3 border-t border-teal-200 space-y-1 text-xs">
                          <div className="text-slate-900 font-medium">
                            🇦🇲 <strong>Հայերեն թարգմանություն.</strong> {ex.verseHy}
                          </div>
                          <div className="text-teal-900">
                            <strong>Կանոն.</strong> {ex.accentRule} ({ex.accentRuleHy})
                          </div>
                          {ex.sinalefaNote && (
                            <div className="text-amber-900 bg-amber-50 p-2 rounded font-medium">
                              ✨ <strong>Սինալեֆա.</strong> {ex.sinalefaNote}
                            </div>
                          )}
                          <div className="text-slate-600 bg-white p-2 rounded border border-slate-100">
                            💡 {ex.explanationHy}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1.5 text-[11px] text-teal-700">
                          Սեղմի՛ր տողի մանրամասն բացատրությունը տեսնելու համար
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Syllable & Metric Tester */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                Ինտերակտիվ տաղաչափական փորձարար (Simulador de Métrica)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Ընտրի՛ր քննական նմուշներից կամ գրի՛ր քո սեփական իսպաներեն տողը՝ սինալեֆան ու շեշտի կանոնները ստուգելու համար։
              </p>

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { id: 1, text: "Por la plaza va la niña" },
                  { id: 2, text: "Las nubes cubren el sol" },
                  { id: 3, text: "Pasa despacio un caballo" },
                  { id: 4, text: "La gente canta con música" },
                  { id: 5, text: "Mi corazón siente paz" }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setCustomVerse(p.text);
                      setSelectedMetricPreset(p.id);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                      customVerse === p.text
                        ? 'bg-teal-600 text-white border-teal-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p.text}
                  </button>
                ))}
              </div>

              {/* Input field */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={customVerse}
                  onChange={(e) => setCustomVerse(e.target.value)}
                  placeholder="Գրի՛ր իսպաներեն տողը..."
                  className="flex-1 px-4 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  onClick={() => speakSpanish(customVerse)}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 flex items-center gap-1 text-xs font-semibold cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" /> Լսել
                </button>
              </div>

              {/* Live Metric Evaluation Card */}
              {verseAnalysis && (
                <div className="mt-4 bg-teal-50/60 p-4 rounded-xl border border-teal-200 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-950">Տողի վերլուծություն.</span>
                    <span className="bg-teal-700 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                      {verseAnalysis.rawSyllables + verseAnalysis.accentAdjust === 8
                        ? '✅ Verso octosílabo (8 sílabas)'
                        : `Տող՝ ${verseAnalysis.rawSyllables + verseAnalysis.accentAdjust} sílabas`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    <div className="bg-white p-2.5 rounded-lg border border-teal-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        Վերջին բառը
                      </span>
                      <span className="font-bold text-slate-900">{verseAnalysis.lastWord}</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-teal-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        Շեշտադրման տեսակը
                      </span>
                      <span className="font-bold text-indigo-700 uppercase">
                        {verseAnalysis.accentType}
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-teal-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">
                        Շեշտի փոփոխությունը
                      </span>
                      <span className="font-bold text-amber-700">
                        {verseAnalysis.accentAdjust > 0
                          ? `+${verseAnalysis.accentAdjust} (Aguda)`
                          : verseAnalysis.accentAdjust < 0
                          ? `${verseAnalysis.accentAdjust} (Esdrújula)`
                          : '0 (Llana)'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5-Step Checklist for Romance Exam */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-base font-bold text-amber-300">
                Քննության քայլաշար. Ինչպե՞ս ապացուցել, որ բանաստեղծությունը ռոմանս է
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-amber-400 font-bold block">Քայլ 1</span>
                  <strong>Cuenta sílabas</strong>
                  <p className="text-slate-300 mt-1">Հաշվի՛ր վանկերը՝ սինալեֆայով։</p>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-amber-400 font-bold block">Քայլ 2</span>
                  <strong>Comprueba octosílabos</strong>
                  <p className="text-slate-300 mt-1">Տես՝ տողերն ութվանկանի՞ են (8)։</p>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-amber-400 font-bold block">Քայլ 3</span>
                  <strong>Versos pares</strong>
                  <p className="text-slate-300 mt-1">Համեմատի՛ր 2, 4, 6... Զույգ տողերը։</p>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-amber-400 font-bold block">Քայլ 4</span>
                  <strong>Rima asonante</strong>
                  <p className="text-slate-300 mt-1">Նույն ձայնավորնե՞րն են կրկնվում (օր.՝ a-o)։</p>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-amber-400 font-bold block">Քայլ 5</span>
                  <strong>Versos impares sueltos</strong>
                  <p className="text-slate-300 mt-1">Կենտ տողերն անհա՞նգ են (8−)։</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: FIGURES OF SPEECH & FLASHCARDS (PARTE 7 & 8) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'figures' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-amber-400 text-rose-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                PARTE 8 & TEMA 6
              </span>
              <h2 className="text-2xl font-black mt-2">
                12 Գեղարվեստական արտահայտչամիջոցների ճանաչման քարտեր
              </h2>
              <p className="text-rose-100 text-sm mt-1 max-w-3xl">
                Տետրի վերջին էջերի 12 օրինակները. Կարդա՛ իսպաներեն տողը, մտածի՛ր պատասխանը, ապա սեղմի՛ր «Mostrar respuesta»՝ ճիշտ պատասխանն ու բացատրությունը բացելու համար։
              </p>
            </div>

            {/* Flashcard Component (Parte 8 #32) */}
            <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-indigo-100 shadow-lg p-6 sm:p-8 text-center space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Identifica la figura literaria</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                  {currentCardIndex + 1} / {RECOGNITION_CARDS.length}
                </span>
              </div>

              {/* Spanish verse prompt */}
              <div className="py-6 px-4 bg-slate-50/80 rounded-2xl border border-slate-200">
                <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 block mb-2">
                  Օրինակ #{RECOGNITION_CARDS[currentCardIndex].id} ({RECOGNITION_CARDS[currentCardIndex].level})
                </span>
                <p className="text-xl sm:text-3xl font-black text-slate-950 font-serif leading-relaxed">
                  «{RECOGNITION_CARDS[currentCardIndex].textEs}»
                </p>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <button
                    onClick={() => speakSpanish(RECOGNITION_CARDS[currentCardIndex].textEs)}
                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                    title="Լսել իսպաներեն"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Reveal toggle button */}
              <div>
                <button
                  onClick={() => setCardRevealed(!cardRevealed)}
                  className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>
                    {cardRevealed ? 'Թաքցնել պատասխանը (Ocultar)' : 'Ցույց տալ պատասխանը (Mostrar respuesta)'}
                  </span>
                </button>
              </div>

              {/* Revealed Answer */}
              {cardRevealed && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-left space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-900 font-black text-lg sm:text-xl">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>{RECOGNITION_CARDS[currentCardIndex].figureEs}</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                      ({RECOGNITION_CARDS[currentCardIndex].figureHy})
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-slate-900 pt-1 font-medium">
                    🇦🇲 <strong>Հայերեն թարգմանություն.</strong> {RECOGNITION_CARDS[currentCardIndex].textHy}
                  </div>
                  <div className="text-sm sm:text-base text-slate-800 bg-white p-3.5 rounded-xl border border-emerald-100 leading-relaxed">
                    💡 <strong>Բացատրություն.</strong> {RECOGNITION_CARDS[currentCardIndex].explanationHy}
                  </div>
                </div>
              )}

              {/* Navigation buttons: Anterior / Siguiente */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={currentCardIndex === 0}
                  onClick={() => {
                    setCurrentCardIndex((prev) => Math.max(0, prev - 1));
                    setCardRevealed(false);
                  }}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Նախորդը (Anterior)</span>
                </button>

                <button
                  disabled={currentCardIndex === RECOGNITION_CARDS.length - 1}
                  onClick={() => {
                    setCurrentCardIndex((prev) => Math.min(RECOGNITION_CARDS.length - 1, prev + 1));
                    setCardRevealed(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Հաջորդը (Siguiente)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Distinction Table of all 14 figures */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-black text-slate-900 mb-2">
                PARTE 8. Cómo distinguir las figuras literarias
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Հատուկ համեմատական աղյուսակ, որպեսզի քննության ժամանակ արտահայտչամիջոցները երբեք չշփոթես։
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-800 uppercase text-[11px] font-bold">
                    <tr>
                      <th className="p-3">Figura</th>
                      <th className="p-3">Ինչը պետք է նկատել (Clave)</th>
                      <th className="p-3">Օրինակ (Ejemplo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {FIGURES_DISTINCTION_TABLE.map((row, idx) => {
                      const rowId = `fig-dist-${idx}`;
                      const open = isTranslated(rowId);
                      return (
                        <tr
                          key={idx}
                          onClick={() => toggleTranslation(rowId)}
                          className={`cursor-pointer transition-colors ${
                            open ? 'bg-rose-50/60' : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="p-3 font-bold text-slate-900">
                            <div>{row.figure}</div>
                            {open && <div className="text-xs text-rose-700 font-medium">🇦🇲 {row.figureHy}</div>}
                          </td>
                          <td className="p-3 text-slate-700">
                            <div>{row.claveEs}</div>
                            {open && <div className="text-xs text-indigo-900 font-medium mt-1">🇦🇲 {row.claveHy}</div>}
                          </td>
                          <td className="p-3 text-slate-800 font-mono text-xs">
                            <div>{row.ejemploEs}</div>
                            {open && <div className="text-[11px] text-slate-600 mt-1 font-sans">🇦🇲 {row.ejemploHy}</div>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 5: VOCABULARY & GRAMMAR EXPRESSIONS (PARTE 9 & TEMA 8) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'vocab' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-900 to-cyan-950 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-amber-400 text-blue-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                PARTE 9 & TEMA 8
              </span>
              <h2 className="text-2xl font-black mt-2">
                Տետրի բառապաշարը և քերականական արտահայտությունները
              </h2>
              <p className="text-blue-100 text-sm mt-1 max-w-3xl">
                Տետրի 3-րդ էջի 24 բառերն ու կարևոր քերականական կանոնները (Subjuntivo, Condicional, Infinitivo)՝ հայերեն թարգմանություններով և օրինակներով։
              </p>
            </div>

            {/* Grammar Tips Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Երրորդ էջի արտահայտությունները և քերականական կանոնները
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GRAMMAR_EXPRESSIONS.map((g, gIdx) => {
                  const gId = `gramm-${gIdx}`;
                  const open = isTranslated(gId);
                  return (
                    <div
                      key={gIdx}
                      onClick={() => toggleTranslation(gId)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        open ? 'bg-blue-50/70 border-blue-300' : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{g.expressionEs}</span>
                        <button
                          onClick={(e) => speakSpanish(g.expressionEs, e)}
                          className="p-1 text-slate-400 hover:text-blue-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {open ? (
                        <div className="mt-3 pt-3 border-t border-blue-200 space-y-1.5 text-xs">
                          <div className="text-blue-950 font-semibold">
                            🇦🇲 {g.expressionHy}
                          </div>
                          <div className="text-slate-700 bg-white p-2.5 rounded-lg border border-blue-100">
                            <strong>Իսպաներեն կանոն.</strong> {g.ruleEs}
                          </div>
                          <div className="text-indigo-900 bg-indigo-50/60 p-2.5 rounded-lg">
                            <strong>Հայերեն բացատրություն.</strong> {g.ruleHy}
                          </div>
                        </div>
                      ) : (
                        <div className="mt-2 text-[11px] text-blue-700">
                          Սեղմի՛ր քերականական կանոնը տեսնելու համար
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vocabulary Grid */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <h3 className="text-base font-bold text-slate-900">
                  Բառացանկ (24 բառեր՝ իսպաներեն և հայերեն բացատրություններով)
                </h3>
                <span className="text-xs text-slate-500">
                  Գտնված է՝ {filteredVocabulary.length} բառ
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredVocabulary.map((v) => {
                  const open = isTranslated(v.id);
                  return (
                    <div
                      key={v.id}
                      onClick={() => toggleTranslation(v.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        open
                          ? 'bg-blue-50/60 border-blue-300 shadow-xs'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-black text-slate-900">{v.wordEs}</span>
                        <button
                          onClick={(e) => speakSpanish(v.wordEs, e)}
                          className="p-1 text-slate-400 hover:text-blue-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-slate-600 mt-1 italic">
                        {v.explanationEs}
                      </div>

                      {open ? (
                        <div className="mt-2.5 pt-2.5 border-t border-blue-200 text-xs space-y-1">
                          <div className="text-blue-900 font-bold">🇦🇲 {v.wordHy}</div>
                          <div className="text-slate-700">{v.explanationHy}</div>
                          {v.exampleEs && (
                            <div className="bg-white p-2 rounded border border-blue-100 text-[11px] text-slate-800 font-mono mt-1">
                              «{v.exampleEs}»
                              <div className="font-sans text-slate-600 not-italic mt-0.5">
                                🇦🇲 {v.exampleHy}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="mt-2 text-[10px] text-blue-600 font-medium">
                          Սեղմի՛ր հայերեն թարգմանության համար
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 6: 30 COMPREHENSIVE EXAM QUESTIONS (PARTE 10 & TEMA 9) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                PARTE 10 & TEMA 9
              </span>
              <h2 className="text-2xl font-black mt-2">
                Բանավոր և գրավոր քննության 30 հարց ու պատասխան
              </h2>
              <p className="text-slate-300 text-sm mt-1 max-w-3xl">
                Հարցերը ներկայացված են հայերեն և իսպաներեն։ Սկզբում փորձի՛ր ինքնուրույն պատասխանել իսպաներեն, ապա սեղմի՛ր հարցին՝ մոդելային պատասխանն ու բացատրությունը բացելու համար։
              </p>
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((q) => {
                const qId = `exam-q-${q.id}`;
                const open = isTranslated(qId);
                return (
                  <div
                    key={q.id}
                    onClick={() => toggleTranslation(qId)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      open
                        ? 'bg-indigo-50/70 border-indigo-300 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {q.id}
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded">
                            {q.category}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1.5 leading-snug">
                            {q.questionEs}
                          </h4>
                          <p className="text-sm sm:text-base text-indigo-950 font-bold mt-1">
                            🇦🇲 {q.questionHy}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => speakSpanish(q.questionEs + '. ' + q.answerEs, e)}
                          className="p-2 text-slate-400 hover:text-indigo-600 cursor-pointer"
                          title="Լսել հարցն ու պատասխանը"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                        <div className="p-1.5 text-slate-400">
                          {open ? (
                            <ChevronUp className="w-5 h-5 text-indigo-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Revealed Model Answer */}
                    {open ? (
                      <div className="mt-4 pt-4 border-t border-indigo-200/80 space-y-2.5 animate-in fade-in duration-150">
                        <div className="text-xs sm:text-sm uppercase font-black text-emerald-800 tracking-wider">
                          Respuesta para el examen (Քննության պատասխան)
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-950 bg-emerald-50/80 p-4 rounded-xl border border-emerald-300 leading-snug">
                          {q.answerEs}
                        </div>
                        <div className="text-sm sm:text-base text-indigo-950 font-bold pl-1 leading-relaxed">
                          🇦🇲 <strong>Հայերեն թարգմանություն.</strong> {q.answerHy}
                        </div>
                        {q.explanationHy && (
                          <div className="text-sm sm:text-base text-slate-800 bg-white p-3.5 rounded-xl border border-indigo-100 mt-1 leading-relaxed">
                            💡 <strong>Հուշում.</strong> {q.explanationHy}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-3 text-xs sm:text-sm text-indigo-600 font-semibold pl-10">
                        Սեղմի՛ր իսպաներեն պատասխանը և հայերեն բացատրությունը տեսնելու համար →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 7: 10 MINI-EXAMEN MULTIPLE CHOICE (PARTE 11) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900 to-teal-950 rounded-2xl p-6 text-white shadow-md">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="bg-amber-400 text-emerald-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                    PARTE 11: TEST DE LITERATURA
                  </span>
                  <h2 className="text-2xl font-black mt-2">
                    Ստուգի՛ր գիտելիքներդ — 10 Քննական թեստային հարցեր
                  </h2>
                  <p className="text-emerald-100 text-sm mt-1">
                    Ընտրի՛ր յուրաքանչյուր հարցի ճիշտ տարբերակը, ապա սեղմի՛ր «Corregir examen»։
                  </p>
                </div>

                {quizSubmitted && (
                  <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center">
                    <span className="text-xs uppercase text-emerald-200 font-bold block">
                      Արդյունք
                    </span>
                    <span className="text-3xl font-black text-amber-400">
                      {quizScore} / 10
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Questions list */}
            <div className="space-y-5">
              {MINI_QUIZ.map((q) => {
                const selected = userAnswers[q.id];
                const isCorrect = selected === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {q.id}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900">
                            {q.questionEs}
                          </h4>
                          <p className="text-xs text-indigo-950 font-medium">
                            🇦🇲 {q.questionHy}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => speakSpanish(q.questionEs)}
                        className="p-1 text-slate-400 hover:text-emerald-600"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                        if (selected === optIdx) {
                          btnStyle = 'bg-indigo-100 border-indigo-400 text-indigo-950 ring-2 ring-indigo-300';
                        }

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 font-bold';
                          } else if (selected === optIdx && optIdx !== q.correctIndex) {
                            btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                          } else {
                            btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => {
                              setUserAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                            }}
                            className={`p-3 rounded-xl border text-left transition-all text-xs sm:text-sm cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <div>
                              <span className="font-semibold block">{opt.es}</span>
                              <span className="text-[11px] text-slate-500 block font-normal">
                                ({opt.hy})
                              </span>
                            </div>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && selected === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Post-submit explanation */}
                    {quizSubmitted && (
                      <div
                        className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-rose-50 border-rose-200 text-rose-950'
                        }`}
                      >
                        <strong>{isCorrect ? '✅ Ճիշտ է։ ' : '❌ Սխալ է։ '}</strong>
                        {q.explanationEs}
                        <div className="mt-1 pt-1 border-t border-current/20 text-indigo-950 font-medium">
                          🇦🇲 <strong>Հայերեն բացատրություն.</strong> {q.explanationHy}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action Buttons */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                {Object.keys(userAnswers).length} / 10 հարցերի պատասխան ընտրված է
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Սկսել նորից (Reiniciar)</span>
                </button>

                <button
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ստուգել քննությունը (Corregir examen)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 8: FINAL CRAM REVIEW (PARTE 12) */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'review' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-amber-950 rounded-2xl p-6 text-white shadow-md">
              <span className="bg-white text-amber-950 text-xs font-bold px-2 py-0.5 rounded uppercase">
                PARTE 12: REPASO FINAL
              </span>
              <h2 className="text-2xl font-black mt-2">
                Վերջնական կրկնություն քննությունից առաջ
              </h2>
              <p className="text-amber-100 text-sm mt-1 max-w-3xl">
                Աշակերտը քննությունից առաջ պետք է կարողանա անգիր կամ սեփական բառերով ասել այս 27 սահմանումները, 3 կարևորագույն տարբերությունները և 8 քննական կարողությունները։
              </p>
            </div>

            {/* 3 Most Critical Differences to Never Confuse */}
            <div className="bg-white p-6 rounded-2xl border-2 border-amber-300 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  Ամենակարևոր երեք տարբերությունները (Քննությունից առաջ անպայման ճիշտ իմանալ)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase block mb-1">
                    1. Romance (Ռոմանս)
                  </span>
                  <div className="font-mono text-sm font-bold text-slate-900">
                    8−, 8a, 8−, 8a...
                  </div>
                  <p className="text-slate-700 mt-2 leading-relaxed">
                    Նախ հաշվում ենք վանկերը, ապա ստուգում ձայնավորային հանգը։ 8-ը վանկերի թիվն է, իսկ a-ն՝ հանգի նշանը։
                  </p>
                </div>

                <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase block mb-1">
                    2. Teatro (Թատրոն)
                  </span>
                  <div className="font-semibold text-slate-900">
                    Diálogo vs Acotaciones vs Atrezo
                  </div>
                  <p className="text-slate-700 mt-2 leading-relaxed">
                    <strong>Diálogo՝</strong> հերոսների խոսակցությունն է, <strong>Acotaciones՝</strong> հեղինակի բեմական ցուցումները (չեն կարդացվում), <strong>Atrezo՝</strong> բեմական առարկաները։
                  </p>
                </div>

                <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase block mb-1">
                    3. Figuras (Արտահայտչամիջոցներ)
                  </span>
                  <div className="font-semibold text-slate-900">
                    Anáfora vs Epanadiplosis vs Asíndeton
                  </div>
                  <p className="text-slate-700 mt-2 leading-relaxed">
                    <strong>Anáfora՝</strong> կրկնություն տողերի սկզբում, <strong>Epanadiplosis՝</strong> նույն տողի սկզբում և վերջում, <strong>Asíndeton՝</strong> առանց շաղկապների, <strong>Polisíndeton՝</strong> կրկնվող շաղկապներով։
                  </p>
                </div>
              </div>
            </div>

            {/* 8 Skills to Master for the Exam */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-base font-bold text-amber-400">
                Քննության համար 8 պարտադիր հմտություններ (Para el examen)
              </h3>
              <p className="text-xs text-slate-300">
                Աշակերտը պետք է կարողանա ինքնուրույն՝
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {[
                  { n: "1", es: "Definir los tres géneros literarios.", hy: "Սահմանել գրականության երեք ժանրերը։" },
                  { n: "2", es: "Distinguir literatura popular y culta.", hy: "Տարբերել ժողովրդական և հեղինակային գրականությունը։" },
                  { n: "3", es: "Reconocer un cuento, una leyenda y un mito.", hy: "Ճանաչել պատմվածքը, ավանդապատումը և առասպելը։" },
                  { n: "4", es: "Analizar un romance y escribir 8−, 8a, 8−, 8a.", hy: "Վերլուծել ռոմանսը և գրել ճիշտ սխեման։" },
                  { n: "5", es: "Contar las sílabas y aplicar la sinalefa.", hy: "Հաշվել վանկերը և կիրառել սինալեֆան։" },
                  { n: "6", es: "Reconocer las figuras literarias y justificarlas.", hy: "Ճանաչել գեղարվեստական միջոցները և հիմնավորել։" },
                  { n: "7", es: "Analizar un texto teatral (acotaciones, aparte).", hy: "Վերլուծել թատերական տեքստը։" },
                  { n: "8", es: "Explicar las diferencias entre conceptos parecidos.", hy: "Բացատրել նման հասկացությունների տարբերությունները։" }
                ].map((s) => (
                  <div key={s.n} className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-[10px] mb-1.5">
                      {s.n}
                    </span>
                    <div className="font-semibold text-slate-100">{s.es}</div>
                    <div className="text-slate-400 mt-1">🇦🇲 {s.hy}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick 27 Definitions Table */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Արագ կրկնության աղյուսակ (27 հասկացություն)
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Սեղմի՛ր ցանկացած տողի վրա՝ հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-800 uppercase text-[11px] font-bold">
                    <tr>
                      <th className="p-3">Tema</th>
                      <th className="p-3">Lo más importante para el examen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {QUICK_REVIEW_TABLE.map((row, idx) => {
                      const rowId = `quick-${idx}`;
                      const open = isTranslated(rowId);
                      return (
                        <tr
                          key={idx}
                          onClick={() => toggleTranslation(rowId)}
                          className={`cursor-pointer transition-colors ${
                            open ? 'bg-amber-50/70' : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="p-3 font-bold text-slate-900">
                            <div>{row.temaEs}</div>
                            {open && (
                              <div className="text-xs text-amber-800 font-medium">
                                🇦🇲 {row.temaHy}
                              </div>
                            )}
                          </td>
                          <td className="p-3 text-slate-800">
                            <div>{row.importantEs}</div>
                            {open && (
                              <div className="text-xs text-indigo-900 font-medium mt-1">
                                🇦🇲 {row.importantHy}
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-200">
            GUÍA COMPLETA PARA EL EXAMEN DE LENGUA Y LITERATURA
          </p>
          <p className="text-slate-400">
            Իսպաներեն + հայերեն | Բոլոր 6 էջերի թեմաները՝ բացատրություններով, օրինակներով և քննական հարցերով
          </p>
          <p className="text-[11px] text-slate-500 pt-1">
            Նախագծված է արագ և արդյունավետ ուսուցման, ինքնաստուգման և բարձր գնահատական ստանալու համար։
          </p>
        </div>
      </footer>
    </div>
  );
}
