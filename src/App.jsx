
import  { useState } from 'react';

// Componente para estadísticas clave (estilo kawaii)
const StatCard = ({ icon, value, label, colorClass, bgIconClass }) => (
  <div className="p-6 rounded-3xl border-2 border-white bg-white/60 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg shadow-pink-100/50">
    <div className={`p-4 rounded-full mb-4 shadow-sm ${bgIconClass} ${colorClass}`}>
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-3xl font-black mb-1 text-pink-900">{value}</h3>
    <p className="text-sm text-pink-500 uppercase tracking-widest font-bold">{label}</p>
  </div>
);

// Componente para la línea de tiempo (estilo kawaii)
const TimelineItem = ({ step, title, description, icon, isLast }) => (
  <div className="relative flex gap-6 pb-12">
    {!isLast && <div className="absolute left-6 top-14 bottom-0 w-1.5 bg-pink-100 rounded-full"></div>}
    
    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 border-pink-300 flex items-center justify-center text-pink-500 shadow-md shadow-pink-200">
      <span className="text-2xl">{icon}</span>
    </div>
    
    <div className="flex-grow pt-2">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-black text-pink-600 bg-pink-100 px-3 py-1.5 rounded-full shadow-sm">
          PASO 0{step} 🌸
        </span>
        <h4 className="text-xl font-black text-pink-800">{title}</h4>
      </div>
      <p className="text-pink-700 font-medium leading-relaxed bg-white/80 p-5 rounded-3xl border-2 border-white shadow-sm">
        {description}
      </p>
    </div>
  </div>
);

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-pink-900 font-sans selection:bg-pink-300 selection:text-white pb-20">
      {/* Fondo decorativo kawaii */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-200 via-rose-50 to-pink-50 -z-10"></div>
      
      <main className={`max-w-5xl mx-auto px-6 py-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* ENCABEZADO */}
        <header className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-pink-500 border-2 border-pink-200 text-sm font-bold mb-8 shadow-sm">
            <span className="animate-bounce text-2xl">⚡</span>
            <span>INCIDENTE SÚPER CRÍTICO ✨</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-pink-900 mb-6 tracking-tight">
            EL GRAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-sm">HACKEO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-600 max-w-3xl mx-auto font-medium">
            Anatomía del ciberataque de 2018 al sistema financiero en Chile. Un atraco digital con tácticas de distracción (¡pero en versión adorable!). 🎀
          </p>
        </header>

        {/* ESTADÍSTICAS GLOBALES */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <StatCard 
            icon="💸" 
            value="$10M" 
            label="USD Sustraídos" 
            colorClass="text-emerald-500"
            bgIconClass="bg-emerald-100"
          />
          <StatCard 
            icon="🖥️" 
            value="9.000+" 
            label="PCs Dormidos" 
            colorClass="text-rose-500"
            bgIconClass="bg-rose-100"
          />
          <StatCard 
            icon="🌎" 
            value="Hong Kong" 
            label="Destino" 
            colorClass="text-blue-500"
            bgIconClass="bg-blue-100"
          />
          <StatCard 
            icon="⚡" 
            value="SWIFT" 
            label="Red Vulnerada" 
            colorClass="text-purple-500"
            bgIconClass="bg-purple-100"
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LÍNEA DE TIEMPO (Izquierda) */}
          <section className="lg:col-span-7">
            <div className="mb-10 flex items-center gap-3 bg-white/50 inline-flex p-3 rounded-2xl border border-pink-100">
              <span className="text-yellow-400 text-2xl">✨</span>
              <h2 className="text-3xl font-black text-pink-800">Cronología del Ataque</h2>
            </div>
            
            <div className="bg-white/40 p-8 rounded-[2.5rem] border-4 border-white shadow-xl shadow-pink-100/50 backdrop-blur-sm">
              <TimelineItem 
                step={1}
                title="Infiltración Silenciosa"
                description="Los atacantes (como pequeños fantasmitas invisibles) lograron penetrar la red del banco semanas antes, mapeando todo sin hacer ruido."
                icon="👻"
              />
              <TimelineItem 
                step={2}
                title="El Señuelo Brillante"
                description="Se despliega un malware que borra datos y apaga miles de computadoras de sucursales. El caos inunda las oficinas de soporte."
                icon="✨"
              />
              <TimelineItem 
                step={3}
                title="El Robo Real"
                description="Mientras todos intentaban despertar a los computadores dormidos, los hackers aprovecharon para enviar transferencias por la red SWIFT."
                icon="💖"
              />
              <TimelineItem 
                step={4}
                title="Contención y Desconexión"
                description="El banco nota las travesuras financieras y apaga las redes internacionales para frenar la salida de fondos, salvando parte del dinero."
                icon="🛡️"
                isLast={true}
              />
            </div>
          </section>

          {/* PANEL LATERAL INFORMATIVO (Derecha) */}
          <section className="lg:col-span-5 space-y-8">
            {/* Tarjeta de Modus Operandi */}
            <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-8 rounded-[2.5rem] shadow-xl shadow-pink-300/40 relative overflow-hidden text-white transform transition hover:scale-[1.02]">
              <div className="absolute -top-6 -right-6 p-4 opacity-20 text-[7rem]">
                👻
              </div>
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2 relative z-10">
                <span className="text-yellow-300 text-2xl">✨</span>
                La Cortina de Humo
              </h3>
              <p className="text-pink-100 mb-6 relative z-10 text-sm leading-relaxed font-medium">
                Lo más sorprendente de este hackeo fue usar un <strong>Wiper</strong> (malware destructor) no como arma principal, sino como distracción total.
              </p>
              <ul className="space-y-4 relative z-10">
                {[
                  'Colapso intencional de la atención de TI.',
                  'Inhabilitación de sistemas de monitoreo.',
                  'Uso de credenciales legítimas.',
                  'Transacciones pequeñitas para evitar alarmas.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium bg-white/10 p-3 rounded-2xl">
                    <span className="text-yellow-300">✨</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta de Lecciones */}
            <div className="bg-white/80 p-8 rounded-[2.5rem] border-4 border-white shadow-xl shadow-pink-100/50 backdrop-blur-sm">
              <h3 className="text-2xl font-black text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-pink-500 text-2xl">🛡️</span>
                Impacto y Lecciones
              </h3>
              <div className="space-y-4 text-sm text-pink-700 font-medium">
                <p>
                  Este incidente marcó un antes y un después en la ciberseguridad corporativa en Chile, haciendo las reglas mucho más estrictas.
                </p>
                <div className="p-5 bg-pink-100 border-2 border-pink-200 rounded-3xl text-pink-800 shadow-inner">
                  <strong>Lección kawaii:</strong> Si hay un caos gigante repentino, siempre revisa qué están haciendo los fantasmitas en las sombras. 👻
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t-2 border-pink-200/50 text-center text-pink-500 font-bold text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>🌸 {new Date().getFullYear()} Reporte de Ciberseguridad Adorable.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-pink-700 transition-colors cursor-pointer bg-white px-3 py-1 rounded-full shadow-sm">
              🌐 Fuentes Públicas
            </span>
            <span className="flex items-center gap-1 hover:text-pink-700 transition-colors cursor-pointer bg-white px-3 py-1 rounded-full shadow-sm">
              🛡️ CSIRT Chile
            </span>
          </div>
        </footer>
        
      </main>
    </div>
  );
}