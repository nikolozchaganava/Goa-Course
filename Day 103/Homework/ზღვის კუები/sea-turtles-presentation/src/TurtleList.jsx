import react from 'react';

const turtles = [
  {
    name: 'მერაბა',
    description: 'ეს არის კუ სახელად მერაბა. მერაბას ცურვა უყვარს👍🏻 მიბაძე მერაბას✅',
    imgURL: 'https://rachel.on.ge/2020/09/04/1599217102_5f5236e9c67b2.jpg'
  },
  {
    name: 'ჟორა',
    description: 'ეს კი ჟორაა, მასაც უყვარს ცურვა. მიბაძე ჟორას👍🏻✅',
    imgURL: 'https://kvirispalitra.ge/media/images/new_photo/2021/May/2021-05-02/ku_(4).jpg',
  },
  {
    name: 'თენგო',
    description: 'ამ კუს სახელია თენგო. თენგოს შავი ფერი არ უყვარს და აგრესიას გამოხატავს მის დანახვისას. მიბაძე თენგოს👍🏻✅(joke)',
    imgURL: 'https://gdb.voanews.com/d45148cf-148c-439e-89f9-bbe7601f624f_cx15_cy8_cw84_w250_r1_s.jpg'
  }
]

function TurtleList() {
  return(
    <div>
      <h1>3 სახეობის კუ</h1>
      <ul>
        {turtles.map((turtle, index) => {
          <li key={index}>
            <h2>{turtle.name}</h2>
            <p>{turtle.description}</p>
            <img src={turtle.imgURL} alt={turtle.name} style={{width: '200px'}} />
          </li>
        })}
      </ul>
    </div>
  )
}

export default TurtleList;