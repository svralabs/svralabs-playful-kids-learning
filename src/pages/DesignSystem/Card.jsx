export default function Card() {
  const cards = [
    {
      id: 1,
      title: 'Math Adventure',
      description: 'Explore the world of numbers with fun challenges and puzzles.',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'New',
    },
    {
      id: 2,
      title: 'Science Lab',
      description: 'Discover the wonders of science through interactive experiments.',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Popular',
    },
    {
      id: 3,
      title: 'Art Studio',
      description: 'Unleash your creativity with colorful paints and fun projects.',
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      badge: 'Featured',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {cards.map((card) => (
        <div key={card.id} className="bg-surface-container rounded-xl p-cell-padding border-2 border-surface-variant flex flex-col gap-4 relative overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {card.badge && (
              <span className="absolute top-2 right-2 bg-primary-container text-on-primary-container font-label-bold text-label-bold px-3 py-1 rounded-full text-xs">
                {card.badge}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-sm text-headline-sm text-on-background">{card.title}</h3>
            <p className="font-body-default text-body-default text-on-surface-variant">{card.description}</p>
          </div>
          <button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors duration-200 w-fit">
            Explore
          </button>
        </div>
      ))}
    </div>
  );
}
