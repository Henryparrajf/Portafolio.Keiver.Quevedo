const companies = [
  { name: 'Nubox', logo: '/companies/nubox.svg' },
  { name: 'GuruSoft', logo: '/companies/gurusoft.svg' },
  { name: 'Power BI', logo: '/companies/powerbi.svg' },
  { name: 'Supabase', logo: '/companies/supabase.svg' },
  { name: 'SIIGO', logo: '/companies/siigo.svg' },
];

export default function CompanyStrip() {
  const trackItems = [...companies, ...companies];

  return (
    <div className="company-strip" role="list" aria-label="Empresas con las que he trabajado">
      <div className="company-strip__track" aria-hidden="true">
        {trackItems.map((company, idx) => (
          <div className="company-card" key={`${company.name}-${idx}`} role="listitem">
            <img
              className="company-card__logo"
              src={company.logo}
              alt={company.name}
              loading="lazy"
              width="84"
              height="84"
            />
            <span className="company-card__name">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
