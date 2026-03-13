const galleryItems = [
  { title: 'Dashboard financiero', src: '/gallery/dashboard.jpg' },
  { title: 'Modelo de flujo de caja', src: '/gallery/flow.jpg' },
  { title: 'Automatización de procesos', src: '/gallery/automation.jpg' },
  { title: 'Análisis tributario', src: '/gallery/tax.jpg' },
];

export default function GalleryStrip() {
  const duplicated = [...galleryItems, ...galleryItems];

  return (
    <div className="gallery-strip" role="region" aria-label="Galería de ejemplos visuales">
      <div className="gallery-strip__track" aria-hidden="true">
        {duplicated.map((item, index) => (
          <div className="gallery-card" key={`${item.title}-${index}`}>
            <img src={item.src} alt={item.title} loading="lazy" />
            <span className="gallery-card__label">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
