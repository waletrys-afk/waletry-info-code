export default function About() {
  return (
    <>
      <div className="about-info">
        <div>
          <Abouttext
            text={
              "Привет, я Waletry! Я веб-разработчик со стажем работы в этой сфере более 5 лет. Собираю сайты для бизнесов за несколько дней: беру структуру, дизайн и анимации на себя, а вы получаете готовый сайт под ключ."
            }
          />
          <br></br>
          <br></br>
          <Abouttext
            text={
              "Стараюсь не тянуть со сроками: работаю быстро и общаюсь напрямую в Telegram — без менеджеров и долгих согласований. По факту вы получаете адаптивный сайт, который понятно рассказывает о вас и помогает получать заявки."
            }
          />
          <p>Разрабатываю на React, PHP, Node.js, Python(flask), TS и др. <span className="first-name-span">Работаю без использования нейросетей.</span></p>
        </div>
        <div className="about-el">
          <div className="about-el-s1 el-s">
            <Aboutelm title={'2-5 Дней'} text={'Срок запуска'}/>
            <Aboutelm title={'5+ Лет'} text={'Опыт работы'}/>
          </div>
          <div className="about-el-s2 el-s">
            <Aboutelm title={'Лично'} text={'Веду проект'}/>
            <Aboutelm title={'Включены'} text={'Правки в работе'}/>
          </div>
        </div>
      </div>
    </>
  );
}

function Abouttext({ text }) {
  return (
    <>
      <span className="about-info-span">{text}</span>
    </>
  );
}

function Aboutelm({ title, text }) {
  return (
    <>
    <div>
      <p className="ebout-el-p">{title}</p>
      <span>{text}</span>
    </div>
    </>
  );
}
