import React from "react";

function GitGithub() {
  return (
    <>
      {/* Oque e Git e GitHub  */}
      <div className="container my-5 text-center text-white">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">GIT</h3>
            <p>
              Este sistema de controle possue a função de registrar quaisquer
              alterações feitas em cima de um código, armazenando essas
              informações e permitindo que, caso seja necessário, um(a)
              programador(a) possa regredir a versões anteriores de uma
              aplicação de modo simples e rápido.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">GITHUB</h3>
            <p>
              É uma plataforma totalmente online onde você pode criar
              repositórios e hospedar neles seus projetos, colaborar com
              softwares open source, seguir outros(as) programadores(as) e
              interagir com códigos de terceiros.
            </p>
          </div>
        </div>
      </div>
      {/* Curso */}
      <div className="container my-5 text-center text-white">
        <div className="container container-text">
          <div className="d-flex row row-cols-sm-1 row-cols-md-2 ">
            <iframe
              className="my-auto col-lg-8 col-md-8 col-sm-12"
              height={400}
              src="https://www.youtube.com/embed/videoseries?list=PLhkO7OMKgT_rqwGYldqcFxyN4yjFgmDh8"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="my-3 col-lg-4 col-md-4 col-sm-12">
              <h3>
                <a
                  href="https://www.youtube.com/c/rafaellaballerini"
                  target="_blank"
                  className="links"
                >
                  Rafaella Ballerini
                </a>
              </h3>
              <p>
                Curso explicando a definição de Git e Github e os principais
                conceitos utilizados na ferramenta! É algo muito necessário na
                vida de um desenvolvedor ou desenvolvedora.
              </p>
              <ul>
                <li>
                  <a className="links" href="#git">
                    GIT
                  </a>
                </li>
                <li>
                  <a className="links" href="#github">
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* git */}
      <div className="container my-5 text-center text-white" id="git">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">GIT</h3>
            <p>
              De longe, o sistema de controle de versão moderno mais usado no
              mundo hoje é o Git. O Git é um projeto de código aberto maduro e
              com manutenção ativa desenvolvido em 2005 por Linus Torvalds, o
              famoso criador do kernel do sistema operacional Linux.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              className="img-fluid logo-curso my-3"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* GITHUB */}
      <div className="container my-5 text-center text-white" id="github">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <h3 className="secondary-color h1 mb-3">GITHUB</h3>
            <p>
              GitHub é amplamente utilizado por programadores para divulgação de
              seus trabalhos ou para que outros programadores contribuam com o
              projeto, além de promover fácil comunicação através de recursos
              que relatam problemas ou mesclam repositórios remotos.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="img-fluid logo-curso my-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GitGithub;
