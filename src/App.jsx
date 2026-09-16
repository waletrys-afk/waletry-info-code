import React, { useState } from 'react';
import "./App.css";
import Mainhead from "./header.jsx";
import MainName from "./name.jsx";
import Maininfo from "./maininfo.jsx";
import Onsite from "./onsite.jsx";
import Card from "./maincards.jsx";
import About from "./aboutinfo.jsx";
import Process from "./process.jsx";

function App() {
  return (
    <>
      <Mainhead />
      <main>
        <span className="first-name-span">Web Design & Development - 01</span>
        <MainName />
        <p className="first-p">
          Делаю качественные сайты для ваших бизнесов за 2–3 дня
        </p>
        <Maininfo />
        <hr></hr>
        <div className="open-2026">
          <span>ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ — 2026</span>
          <span>Landing · Websites · Digital</span>
        </div>
        <span>02 - On your website</span>
        <Onsite
          zagl={"НА ВАШЕМ САЙТЕ"}
          text={
            "Портфолио, которое показывает ваш уровень и приносит клиентов."
          }
        />
        <section className="main-cards-sec">
          <Card
            img={"bx bx-dollar"}
            title={"Доверие"}
            text={
              "Сайт закрывает вопросы клиента заранее — вы не разбираете одно и то же в переписке."
            }
          />
          <Card
            img={"bx bx-book-open"}
            title={"Портфолио"}
            text={"Превью бизнеса, кейсы и услуги — всё собрано в одном месте."}
          />
          <Card
            img={"bx bx-diamond"}
            title={"Выделение"}
            text={
              "Живой сайт выделяет вас среди конкурентов — вместо разбросанных ссылок в Telegram-чате."
            }
          />
        </section>
        <section className="about">
          <span>03 - ABOUT</span>
          <h1 className="about-h1">ОБО МНЕ</h1>
          <a href="https://t.me/waletry">НАПИСАТЬ В TELEGRAM</a>
          <About />
        </section>

        <section className="process">
          <span>04 - PROCESS</span>
          <h1>КАК ПРОХОДИТ РАБОТА</h1>
          <div className="process-blocks">
            <Process
              title={"1"}
              name={"Бриф"}
              text={"Обсуждаем задачу, референсы и структуру."}
            />
            <Process
              title={"2"}
              name={"Прототип"}
              text={"Показываю прототип сайта."}
            />
            <Process
              title={"3"}
              name={"Сборка"}
              text={"Верстаю, добавляю анимации и наполняю контентом."}
            />
            <Process
              title={"4"}
              name={"Сдача"}
              text={"Публикую сайт, передаю доступы и вношу правки."}
            />
          </div>
        </section>
        <section className="problem-sec-list">
          <span>05 - THE PROBLEM</span>
          <h1>ЗНАКОМО?</h1>
          <span>
            Если хотя бы один пункт про вас — это решается. Ниже видно, как.
          </span>
          <div className="problems-list">
            <Prlist
              num={"01"}
              text={"Клиенту нужен сайт, а своих разработчиков нет."}
            />
            <Prlist
              num={"02"}
              text={"Подрядчик пропал на неделю и не выходит на связь."}
            />
            <Prlist num={"03"} text={"Сроки горят, а сайт всё ещё не готов."} />
            <Prlist
              num={"04"}
              text={"Вместо дизайна прислали шаблон, как у всех."}
            />
            <hr></hr>
          </div>
        </section>
      </main>
      <section className="contats">
        <div className="menu-main">
          <h1>
            ДЕЛАЮ <br></br> САЙТЫ ДЛЯ <br></br> БИЗНЕСОВ
          </h1>
          <br></br>
          <br></br>
          <p>
            Вы можеет написать сообщение прямо на сайте и отправить его мне в
            telegram!
          </p>
        </div>
        <div className="send-menu-main" id='send-sms'>
          <SendComponent />
        </div>
      </section>
    </>
  );
}

function SendComponent() {
  const [text, setText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    
    const resultText = text.replace(/ /g, '%20');
    const sendlink = `https://t.me/waletry?text=${resultText}`;
    
    window.location.href = sendlink;
  };

  return (
    <div className="send-menu">
      <p>
        Сообщение будет отправлено в telegram @waletry от вашего лица!
      </p>
      <textarea 
        id="send-text" 
        placeholder="Введите сообщение"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <a 
        id="send-btn" 
        onClick={handleSend}
        href="#"
      >
        ОТПРАВИТЬ
      </a>
    </div>
  );
}


function Prlist({ num, text }) {
  return (
    <>
      <hr></hr>
      <div>
        <span>{num}</span>
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
