import React from "react";
import "./about.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function About() {
  return (
    <div>
      <Header />
      <section className="acerca-de">
        <h2 className="acerca-de-titulo">
          Bienvenidos a [E-commerce Celulares]
        </h2>
        <p className="acerca-de-parrafo">
          En [E-commerce Celulares], estamos comprometidos en brindarte una
          experiencia de compra excepcional en el emocionante mundo de la
          tecnología móvil. Somos un equipo de apasionados por la innovación y
          la calidad, y hemos unido fuerzas para crear un destino en línea donde
          los amantes de la tecnología pueden encontrar los últimos y mejores
          dispositivos móviles al alcance de un clic.
        </p>
        <h3 className="acerca-de-titulo">Nuestra Misión</h3>
        <p className="acerca-de-parrafo">
          Nuestra misión es simple pero poderosa: Facilitar el acceso a
          dispositivos móviles de alta calidad y tecnología de vanguardia para
          todos. Creemos que la tecnología móvil no solo es una herramienta,
          sino una puerta de entrada a un mundo de posibilidades. Queremos que
          cada cliente que visite nuestro sitio web experimente el poder de la
          elección, la calidad y la satisfacción.
        </p>
        <h3 className="acerca-de-titulo">Lo Que Ofrecemos</h3>
        <p className="acerca-de-parrafo">
          En [E-commerce Celulares], te ofrecemos una amplia selección de
          teléfonos móviles, tabletas y accesorios cuidadosamente seleccionados
          de las mejores marcas del mercado. Ya sea que busques el último
          smartphone con todas las campanas y silbatos o un dispositivo
          confiable y asequible, tenemos algo para todos los gustos y
          presupuestos.
        </p>
        <h3 className="acerca-de-titulo">Nuestra Experiencia en Tecnología</h3>
        <p className="acerca-de-parrafo">
          Detrás de [E-commerce Celulares] hay un equipo de expertos en
          tecnología con años de experiencia en la industria. Hemos invertido
          tiempo y esfuerzo en evaluar y seleccionar los productos que ofrecemos
          en nuestro sitio. Nuestros especialistas conocen los detalles
          técnicos, las tendencias del mercado y las características que
          realmente importan. Puedes confiar en nosotros para proporcionarte
          información precisa y útil sobre cada producto en nuestra plataforma.
        </p>
        <h3 className="acerca-de-titulo">Fácil Navegación y Compra Segura</h3>
        <p className="acerca-de-parrafo">
          Entendemos que la comodidad y la seguridad son esenciales al comprar
          en línea. Por eso, hemos diseñado nuestro sitio web para que sea fácil
          de navegar y encontrar lo que buscas. Además, ofrecemos múltiples
          opciones de pago seguras para que puedas comprar con total
          tranquilidad.
        </p>
        <h3 className="acerca-de-titulo">
          Servicio al Cliente de Primera Clase
        </h3>
        <p className="acerca-de-parrafo">
          En [E-commerce Celulares], la satisfacción del cliente es nuestra
          prioridad. Nuestro equipo de servicio al cliente está listo para
          ayudarte en cada paso del proceso de compra. Ya sea que tengas
          preguntas sobre un producto, necesites asistencia con un pedido o
          quieras obtener más información, estamos aquí para ti.
        </p>
        <h3 className="acerca-de-titulo">
          Únete a la Comunidad [E-commerce Celulares]
        </h3>
        <p className="acerca-de-parrafo">
          Estamos emocionados de tenerte como parte de nuestra comunidad de
          entusiastas de la tecnología. Mantente al tanto de las últimas
          novedades, ofertas especiales y consejos sobre tecnología siguiéndonos
          en nuestras redes sociales y suscribiéndote a nuestro boletín. En
          [E-commerce Celulares], creemos que la tecnología móvil puede mejorar
          vidas y abrir nuevas posibilidades. Estamos aquí para hacerte parte de
          esa experiencia. Gracias por elegir [E-commerce Celulares]. ¡Esperamos
          que disfrutes de tu visita y de tus compras con nosotros!
        </p>
      </section>
      <section>
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px", // Tamaño de fuente
            color: "#ca6060", // Color del texto
            textTransform: "uppercase", // Transformación de texto a mayúsculas
            background: "#f2f2f2"
          }}
        >
          Desarrollado por:
        </h2>
        <div className="body1">
          <div className="person">
            <div className="container1">
              <div className="container1-inner">
                <img className="circle"></img>
                <img img img1></img>
              </div>
            </div>
            <div className="divider"></div>
            <div className="name">Ivan</div>
            <div className="title">Web developer</div>
          </div>
          <div className="person">
            <div className="container1">
              <div className="container1-inner">
                <img className="circle"></img>
                <img img img1></img>
              </div>
            </div>
            <div className="divider"></div>
            <div className="name">Steven</div>
            <div className="title">Web developer</div>
          </div>
          <div className="person">
            <div className="container1">
              <div className="container1-inner">
                <img className="circle"></img>
                <img img img2></img>
              </div>
            </div>
            <div className="divider"></div>
            <div className="name">Alexis</div>
            <div className="title">Web developer</div>
          </div>
          <div className="person">
            <div className="container1">
              <div className="container1-inner">
                <img
                  className="circle"
                  src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/378117968_1077982256902639_5529240718357099229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjuNUlRQ-JNrAdXFWJHXL7G0h2e_KzZvYbSHZ78rNm9iiKSOr0q6X9g_wUO9_Q1MQv2keSzl_SnCnwVNftAi_c&_nc_ohc=GCN2lUHHdQMAX8LuVFP&_nc_ht=scontent.fbog2-4.fna&oh=00_AfBDWyKL8elK9a-cOyIXOrttmHiHF3-B821SFawsz8qJbg&oe=6530898E"
                ></img>
                <img img img3></img>
              </div>
            </div>
            <div className="divider"></div>
            <div className="name">Cristian</div>
            <div className="title">Web developer</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
