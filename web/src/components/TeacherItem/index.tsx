import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/40503929?s=460&u=553167a0dfd5a5b059ab74321f7ead25dbbff86a&v=4" alt="Ítalo"/>
                <div>
                    <strong>Ítalo Moreira Silva</strong>
                    <span>Entreterimento</span>
                </div>
            </header>

            <p>
                Entusiasta de animes e séries bem feitas.
                <br/>
                Apaixonado por Steins Gate, se você não gosta é porque viu errado!
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 00,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;