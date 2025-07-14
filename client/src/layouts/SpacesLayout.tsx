/**
 * @file SpacesLayout.tsx
 * @description Layout component for the Spaces section of the application.
 * 
 * @layout SpacesLayout
 * @returns {JSX.Element} A layout component that can be used to wrap Spaces-related
 */

// Import Packages
import React from 'react'

// Import Styles
import '../styles/SpacesLayout.css'

const SpacesLayout = () => {
  return (
    <div className="SpacesLayout">
      <h1>Espaços</h1>
      <h2 className="SpacesSubtitle">Aqui estão alguns detalhes dos nossos campus!</h2>
      <p className="SpacesDescription">
        Os nossos campus são espaços vibrantes e dinâmicos, projetados para promover a aprendizagem, a colaboração e a inovação. 
        Cada campus oferece uma variedade de instalações, incluindo salas de aula modernas, laboratórios equipados, áreas de estudo e espaços sociais.
        Os campus são o coração da nossa comunidade académica, onde os alunos podem interagir, aprender e crescer juntos.
      </p>
      <div className="SpacesContentContainer">
        <div className="SpacesContent" id="campus-campo-grande">
          <h3>Campus Campo Grande</h3>
          <p>O Campus Campo Grande está localizado no coração de Lisboa, o Campus Campo Grande do Instituto Politécnico da Lusofonia está instalado num edifício emblemático, integrado no histórico Palácio do Conde do Vimioso, numa zona central com excelente ligação a transportes públicos, como o metro do Campo Grande e várias linhas de autocarro.</p>
          <p>Este espaço funcional foi adaptado para acolher múltiplas áreas académicas e pedagógicas, oferecendo:</p>
          <ul>
            <li>Salas de aula.</li>
            <li>Laboratórios de informática equipados.</li>
            <li>Estúdios de arte e hotelaria e turismo</li>
            <li>Áreas de estudo tranquilas</li>
            <li>Espaços sociais para interação entre alunos</li>
          </ul>
          <p>O Campus combina uma estrutura histórica com infraestruturas contemporâneas, criando um ambiente académico acolhedor, acessível e pensado para potenciar o bem‑estar e a aprendizagem dos seus alunos.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.0182159700726!2d-9.15500310252046!3d38.75943240790881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933843c8532a3%3A0xd93296749817b174!2sIPLUSO%20-%20Instituto%20Polit%C3%A9cnico%20da%20Lusofonia!5e0!3m2!1sen!2spt!4v1752476739711!5m2!1sen!2spt&zoom=16&disableDefaultUI=true&scrollwheel=false&draggable=false"
            width="100%"
            height="300"
            style={{ border: "0", pointerEvents: "none", borderRadius: "1rem" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="true"
            tabIndex={-1}
            title="Mapa do Campus Campo Grande"
          ></iframe>
        </div>
        <div className="SpacesContent" id="campus-braco-de-prata">
          <h3>Campus Braço de Prata</h3>
          <p>O Campus Braço de Prata está localizado numa zona urbana e bem servida de transportes públicos. O edifício, adaptado às exigências de ensino politécnico, alberga as unidades orgânicas da Escola Superior de Saúde Ribeiro Sanches(ERISA) e Escola Superior de Ciências da Administração(ESCAD).</p>
          <p>O polo beneficia da proximidade com zonas exteriores recreativas e culturais e a estrutura interna inclui ambientes modernos adaptados á prática pedagógica e científica, como por exemplo:</p>
          <ul>
            <li>Salas de aula equipadas com tecnologia moderna.</li>
            <li>Laboratórios práticos e devidamente equipados.</li>
            <li>Espaços de estudo e áreas comuns para interação social.</li>
            <li>Biblioteca com recursos académicos.</li>
            <li>Sala de Tuna Académica e gabinete da Associação de Estudantes</li>
          </ul>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.1633778416785!2d-9.102064864878722!3d38.74833372153064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193162b91cc96b%3A0x3fce19d14fae5132!2sIPLUSO%20-%20Instituto%20Polit%C3%A9cnico%20da%20Lusofonia!5e0!3m2!1sen!2spt!4v1752478574275!5m2!1sen!2spt" 
            width="100%"
            height="300"
            style={{ border: "0", pointerEvents: "none", borderRadius: "1rem" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="true"
            tabIndex={-1}
            title="Mapa do Campus Braço de Prata"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default SpacesLayout