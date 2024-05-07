import './Home.css';

function Home() {
    return (
        <div className="divona">
            <header className="logo">
                <img src={"./logo.png"} alt="Logo"/>
            </header>

            <div className="banner">
                <img src={"./banner.png"} alt="Banner"/>
            </div>

            <div className="grid">
                <div style={{backgroundColor: "#6495ED"}} className="azul">
                    <img src={"./conhecer.png"} style={{width: "70px"}}/>
                    <p style={{color: "white"}}>Conhecer</p>
                </div>
                <div style={{backgroundColor: "#FFD700"}} className="amarelo">
                    <img src={"./conviver.png"} style={{width: "80px"}}/>
                    <p style={{color: "white"}}>Conviver</p>
                </div>
                <div style={{backgroundColor: "#FF8C00"}} className="laranja">
                    <img src={"./fazer.png"} style={{width: "55px"}}/>
                    <p style={{color: "white"}}>Fazer</p>
                </div>
            </div>

            <div className="metodo">
                <h2>Metodologia</h2>
                <img src={"./linha.png"} style={{width: "25%"}}/>
                <p>Nossa metodologia de gestão educacional visa promover o sucesso
                    acadêmico dos alunos e o crescimento das instituições de ensino.
                    Baseada em princípios de qualidade, inovação e colaboração,
                    desenvolvemos estratégias personalizadas para atender às
                    necessidades específicas de cada instituição. Nosso foco está no
                    desenvolvimento integral dos alunos e na excelência educacional,
                    garantindo que todas as iniciativas sejam adaptadas ao contexto
                    local e aos objetivos institucionais.</p>
            </div>

            <div style={{backgroundColor: "white"}} className="cursos">
                <p className="oferecep">Cursos que oferecemos</p>

                <div className="oficinas">
                    <div className="aulas">
                        <img src={"./coisinhalinda.png"}/>
                        <p>Oficina de bolos</p>
                        <div className="coisas" >

                            <div className="presencial">
                                <p>Presencial</p>
                            </div>

                            <div className="presencial">
                                <p>Cursos livres</p>
                            </div>

                            <div className="presencial">
                                <p>Culinária</p>
                            </div>

                        </div>
                        <p><img src={"./relogio.png"}/> Carga Horária: 10 horas</p>
                        <button>Mostrar mais</button>
                        <button>Gerenciar</button>
                    </div>
                    <div className="auladois">

                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;
