import { useState } from 'react';

export default function Table() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice Johnson', age: 8, grade: 'A', favoriteSubject: 'Math' },
    { id: 2, name: 'Bob Smith', age: 7, grade: 'B', favoriteSubject: 'Science' },
    { id: 3, name: 'Charlie Brown', age: 9, grade: 'A', favoriteSubject: 'Art' },
    { id: 4, name: 'Diana Prince', age: 8, grade: 'B', favoriteSubject: 'History' },
    { id: 5, name: 'Ethan Hunt', age: 7, grade: 'A', favoriteSubject: 'Math' },
  ]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-surface rounded-lg border-2 border-surface-variant">
        <thead>
          <tr className="bg-surface-container-highest text-on-surface-variant">
            <th className="py-3 px-6 text-left font-label-bold text-label-bold">ID</th>
            <th className="py-3 px-6 text-left font-label-bold text-label-bold">Name</th>
            <th className="py-3 px-6 text-left font-label-bold text-label-bold">Age</th>
            <th className="py-3 px-6 text-left font-label-bold text-label-bold">Grade</th>
            <th className="py-3 px-6 text-left font-label-bold text-label-bold">Favorite Subject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`border-b-2 border-surface-variant ${index % 2 === 0 ? 'bg-surface-container' : 'bg-surface'}`}
            >
              <td className="py-4 px-6 font-body-default text-body-default text-on-surface">{row.id}</td>
              <td className="py-4 px-6 font-body-default text-body-default text-on-surface">{row.name}</td>
              <td className="py-4 px-6 font-body-default text-body-default text-on-surface">{row.age}</td>
              <td className="py-4 px-6 font-body-default text-body-default text-on-surface">{row.grade}</td>
              <td className="py-4 px-6 font-body-default text-body-default text-on-surface">{row.favoriteSubject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
