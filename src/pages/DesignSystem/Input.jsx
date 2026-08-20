import { useState } from 'react';

export default function Input() {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-label-bold text-on-surface">Text Input</label>
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="bg-surface-container rounded-lg px-4 py-2 border-2 border-outline focus:border-primary focus:outline-none"
          placeholder="Enter text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-label-bold text-on-surface">Password Input</label>
        <input
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          className="bg-surface-container rounded-lg px-4 py-2 border-2 border-outline focus:border-primary focus:outline-none"
          placeholder="Enter password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-label-bold text-on-surface">Email Input</label>
        <input
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="bg-surface-container rounded-lg px-4 py-2 border-2 border-outline focus:border-primary focus:outline-none"
          placeholder="Enter email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-label-bold text-on-surface">Search Input</label>
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-surface-container rounded-lg pl-10 pr-4 py-2 border-2 border-outline focus:border-primary focus:outline-none w-full"
            placeholder="Search..."
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-bold text-label-bold text-on-surface">Textarea</label>
        <textarea
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          className="bg-surface-container rounded-lg px-4 py-2 border-2 border-outline focus:border-primary focus:outline-none"
          placeholder="Enter multi-line text"
          rows={4}
        />
      </div>
    </div>
  );
}
