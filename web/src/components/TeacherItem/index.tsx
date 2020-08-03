import React from 'react'

import './styles.css';

//icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/50277844?s=460&u=94263ecfbf190baa3af68db2b6bdfd8f13229364&v=4" alt="Gabriel Leite" />
                <div>
                    <strong>Gabriel Leite</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                apaixonado por matematica
                <br />
                <br />
                Professor de matematica</p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;