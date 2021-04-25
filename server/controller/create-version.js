
const createVersion = {};
const questions = [
    {
      "id": 1,
      "cat": 1,
      "desc": "Creo que es importante tomar en consideración habilidades personales en el desempeño de los integrantes de mi equipo antes de dar una retroalimentación",
      "direct": true
    },
    {
      "id": 2,
      "cat": 1,
      "desc": "Cuando alguien no está entregando los resultados esperados prefiero hacer el trabajo yo y después hablar con esa persona",
      "direct": true
    },
    {
      "id": 3,
      "cat": 1,
      "desc": "Si un integrante del equipo no está rindiendo lo necesario lo mejor es esperar a que se de cuenta por sí mismo y comience a generar los resultados",
      "direct": false
    },
    {
      "id": 4,
      "cat": 1,
      "desc": "Cuando un integrante del equipo de trabajo no está cumpliendo sólo es necesario comentarle brevemente lo que ha hecho mal para que cambie su conducta.",
      "direct": false
    },
    {
      "id": 5,
      "cat": 1,
      "desc": "Cuando trabajo en equipo necesito dar mis opiniones para que sean tomadas en consideración en la solución final aunque yo no sea el encatgado del equipo",
      "direct": true
    },
    {
      "id": 6,
      "cat": 1,
      "desc": "Si tengo la opción de trabajar solo o en equipo, prefiero trabajar en equipo",
      "direct": true
    },
    {
      "id": 7,
      "cat": 1,
      "desc": "Si se me asignan tareas extras fuera de mi trabajo regular pero no son necesarias para que el equipo avance no dudo en tomar la responsabilidad.",
      "direct": true
    },
    {
      "id": 8,
      "cat": 2,
      "desc": "Me siento presionado/a cuando trabajo bajo plazos de tiempo muy cortos o estrictos.",
      "direct": true
    },
    {
      "id": 9,
      "cat": 2,
      "desc": "Considero que me desempeño mejor cuando trabajo bajo presión.",
      "direct": true
    },
    {
      "id": 10,
      "cat": 2,
      "desc": "Realizo ejercicio (actividad física) al menos 2 vez por semana.",
      "direct": true
    },
    {
      "id": 11,
      "cat": 2,
      "desc": "Realizo actividades recreativas que me ayudan a sentirme mejor cuando estoy muy presionado.",
      "direct": true
    },
    {
      "id": 12,
      "cat": 2,
      "desc": "Suelo sentirme agotado/a al final de la jornada laboral.",
      "direct": false
    },
    {
      "id": 13,
      "cat": 2,
      "desc": "Me siento agobiado cuando la catga de responsabilidades en el trabajo es mucha.",
      "direct": false
    },
    {
      "id": 14,
      "cat": 2,
      "desc": "Me duele la cabeza cuando me siento estresado/a.",
      "direct": false
    },
    {
      "id": 15,
      "cat": 2,
      "desc": "Suelo tener dolores musculares al final de la jornada laboral.",
      "direct": false
    },
    {
      "id": 16,
      "cat": 2,
      "desc": "Se me dificulta tomar decisiones cuando me siento muy presionado/a.",
      "direct": false
    },
    {
      "id": 17,
      "cat": 3,
      "desc": "Incluso si me siento triste, intento pensar en cosas agradables.",
      "direct": true
    },
    {
      "id": 18,
      "cat": 3,
      "desc": "Me comunico de manera amable con los clientes o equipo de trabajo aún cuando ellos están muy molestos.",
      "direct": true
    },
    {
      "id": 19,
      "cat": 3,
      "desc": "Cuando hay un problema de comunicación en el que el otro interpretó un comentario mío erróneamente siempre intento aclarar el malentendido.",
      "direct": true
    },
    {
      "id": 20,
      "cat": 3,
      "desc": "Cuando un cliente o miembro de mi equipo de trabajo está siendo grosero conmigo inmediatamente dejo clara mi posición u opinión sobre el conflicto",
      "direct": false
    },
    {
      "id": 21,
      "cat": 3,
      "desc": "Me molesta realizar actividades que no son parte de mis responsabilidades o deberes.",
      "direct": false
    },
    {
      "id": 22,
      "cat": 3,
      "desc": "Cuando estoy muy molesto intento cambiar mi estado de ánimo.",
      "direct": true
    },
    {
      "id": 23,
      "cat": 3,
      "desc": "Cuando me encuentro en una situación conflictiva, tiendo a pensar en situaciones similares pasadas que se han resuelto de manera favorable.",
      "direct": true
    },
    {
      "id": 24,
      "cat": 3,
      "desc": "Considero que mi posición no es la adecuada para hacerme responsable por los problemas en el ambiente de trabajo.",
      "direct": false
    },
    {
      "id": 25,
      "cat": 3,
      "desc": "Cuando estoy alterado/a en ocasiones emito comentarios que pueden ser malinterpretados.",
      "direct": false
    },
    {
      "id": 26,
      "cat": 3,
      "desc": "Suelo terminar la conversación cuando ésta se vuelve muy conflictiva o el interlocutor es testarudo.",
      "direct": false
    },
    {
      "id": 27,
      "cat": 3,
      "desc": "Suelo pensar en cómo resolver o sobrellevar los problemas o situaciones difíciles.",
      "direct": true
    },
    {
      "id": 28,
      "cat": 4,
      "desc": "Cuando no estoy recibiendo el tipo de servicio o atención que espero protesto inmediatamente.",
      "direct": false
    },
    {
      "id": 29,
      "cat": 4,
      "desc": "Me resulta muy difícil controlar mi desagrado cuando alguien está siendo grosero conmigo.",
      "direct": false
    },
    {
      "id": 30,
      "cat": 4,
      "desc": "Cuando estoy muy molesto/a en ocasiones actúo o digo cosas sin pensar.",
      "direct": false
    },
    {
      "id": 31,
      "cat": 4,
      "desc": "Me enfado fácilmente.",
      "direct": false
    },
    {
      "id": 32,
      "cat": 4,
      "desc": "Durante una discusión procuro no alzar la voz aún cuando la otra persona sí lo hace.",
      "direct": true
    },
    {
      "id": 33,
      "cat": 4,
      "desc": "Me preocupo mucho cuando tengo varias actividades que realizar y no logro concluirlas.",
      "direct": false
    },
    {
      "id": 34,
      "cat": 4,
      "desc": "Aún cuando el resultado de mi trabajo no fue lo que yo esperaba me siento satisfecho/a de haberlo concluido.",
      "direct": true
    },
    {
      "id": 35,
      "cat": 4,
      "desc": "Me altero cuando la persona con la que estoy conversando levanta el tono de voz mostrando molestia.",
      "direct": false
    },
    {
      "id": 36,
      "cat": 5,
      "desc": "En ocasiones evito hacer preguntas porque pueden parecer obvias o tontas.",
      "direct": false
    },
    {
      "id": 37,
      "cat": 5,
      "desc": "He dudado en proponer una solución a una situación problemática a mi equipo de trabajo.",
      "direct": false
    },
    {
      "id": 38,
      "cat": 5,
      "desc": "No sé qué decir ante un reconocimiento por parte de un compañero o superior.",
      "direct": false
    },
    {
      "id": 39,
      "cat": 5,
      "desc": "Suelo expresarme con calma, aún cuando estoy comunicando firmeza y seguridad.",
      "direct": true
    },
    {
      "id": 40,
      "cat": 5,
      "desc": "Tiendo a repetir el mensaje cuando la otra persona no me ha escuchado.",
      "direct": true
    },
    {
      "id": 41,
      "cat": 5,
      "desc": "Cuando estoy con mi equipo de trabajo o con un cliente demuestro interés en lo que dicen.",
      "direct": true
    },
    {
      "id": 42,
      "cat": 5,
      "desc": "Al tener un problema con un miembro de mi equipo busco negociar y comprometer al otro en un plan de trabajo.",
      "direct": true
    },
    {
      "id": 43,
      "cat": 5,
      "desc": "Cuando un miembro de mi equipo de trabajo no colabora o cumple con sus responsabilidades inmediatamente hablo con él/ella.",
      "direct": true
    },
    {
      "id": 44,
      "cat": 6,
      "desc": "Suelo tener influencia en las decisiones tomadas para cambiar o mejorar situaciones difíciles en el contexto laboral.",
      "direct": true
    },
    {
      "id": 45,
      "cat": 6,
      "desc": "Me molesta mucho cuando algo resulta muy diferente a lo planeado originalmente.",
      "direct": false
    },
    {
      "id": 46,
      "cat": 6,
      "desc": "Siempre estoy dispuesto/a a considerar alternativas para manejar un problema.",
      "direct": true
    },
    {
      "id": 47,
      "cat": 6,
      "desc": "Encuentro soluciones viables a problemas o situaciones conflictiva.",
      "direct": true
    },
    {
      "id": 48,
      "cat": 6,
      "desc": "Evito situaciones nuevas o que son poco comunes.",
      "direct": false
    },
    {
      "id": 49,
      "cat": 6,
      "desc": "Utilizo muchas formas posibles de explicarle un cliente o compañero de trabajo cuando hay alguna inconformidad de su parte.",
      "direct": true
    },
    {
      "id": 50,
      "cat": 6,
      "desc": "Puedo comunicarme de distintas maneras según lo requiera la situación y la persona con la que estoy hablando.",
      "direct": true
    },
    {
      "id": 51,
      "cat": 6,
      "desc": "Busco maneras de resolver dificultades aún si estas maneras no son propuestas por el manual o las reglas explícitas de la empresa.",
      "direct": true
    },
    {
      "id": 52,
      "cat": 7,
      "desc": "Me enfoco por completo cuando realizo una tarea hasta que quede perfecta",
      "direct": true
    },
    {
      "id": 53,
      "cat": 7,
      "desc": "Considero que soy una persona meticulosa",
      "direct": true
    },
    {
      "id": 54,
      "cat": 7,
      "desc": "Suelo prestar poca atención a los detalles cuando realizó una tarea",
      "direct": false
    },
    {
      "id": 55,
      "cat": 7,
      "desc": "Encuentro que es mejor realizar una tarea de forma rápida aunque aunque el resultado tenga pequeños errores",
      "direct": false
    },
    {
      "id": 56,
      "cat": 7,
      "desc": "Me distraigo con facilidad",
      "direct": false
    },
    {
      "id": 57,
      "cat": 7,
      "desc": "Usualmente me pierdo en mis pensamientos mientras trabajo",
      "direct": false
    },
    {
      "id": 58,
      "cat": 7,
      "desc": "Creo que es importante revisar el trabajo antes de entregarlo",
      "direct": true
    },
    {
      "id": 59,
      "cat": 7,
      "desc": "Me considero una persona observador(a)",
      "direct": true
    },
    {
      "id": 60,
      "cat": 8,
      "desc": "Siempre cedo mi asiento cuando alguien más lo necesita",
      "direct": true
    },
    {
      "id": 61,
      "cat": 8,
      "desc": "Soy capaz de comprender las emociones de los demás",
      "direct": true
    },
    {
      "id": 62,
      "cat": 8,
      "desc": "Me considero una persona empática",
      "direct": true
    },
    {
      "id": 63,
      "cat": 8,
      "desc": "Cuando algún compañero está decaído me acerco para reconfortarlo",
      "direct": true
    },
    {
      "id": 64,
      "cat": 8,
      "desc": "No suelo darme cuenta de los sentimientos de los demás",
      "direct": false
    },
    {
      "id": 65,
      "cat": 8,
      "desc": "Me preocupo por las personas cuando veo alguna catástrofe o desastre natural",
      "direct": true
    },
    {
      "id": 66,
      "cat": 8,
      "desc": "Cuando la empresa reconoce a un colaborador me da gusto aunque no sea para mi el reconocimiento",
      "direct": true
    },
    {
      "id": 67,
      "cat": 8,
      "desc": "Considero que es mejor enfocatse en uno mismo para conseguir tus metas",
      "direct": false
    },
    {
      "id": 68,
      "cat": 8,
      "desc": "Me gusta ver fotos o estados de las cosas buenas que les pasan a mi amigos",
      "direct": true
    },
    {
      "id": 69,
      "cat": 9,
      "desc": "Busco opciones que faciliten el trabajo en equipo",
      "direct": true
    },
    {
      "id": 70,
      "cat": 9,
      "desc": "Me gusta analizar el problema de todos los ángulos posibles para buscat la solución adecuada",
      "direct": true
    },
    {
      "id": 71,
      "cat": 9,
      "desc": "Cuando me siento molesto, lo expreso y me tomo un tiempo para relajarme",
      "direct": true
    },
    {
      "id": 72,
      "cat": 9,
      "desc": "Me gusta dialogar con mi equipo de trabajo para resolver conflictos",
      "direct": true
    },
    {
      "id": 73,
      "cat": 9,
      "desc": "Suelo esperar a que otros me den indicaciones para realizar mi trabajo",
      "direct": false
    },
    {
      "id": 74,
      "cat": 9,
      "desc": "Me gusta tomar la iniciativa y sugerir posibles soluciones a los conflictos",
      "direct": true
    },
    {
      "id": 75,
      "cat": 9,
      "desc": "Considero que la negociación y el establecimiento de acuerdos son la mejor forma de solucionar los conflictos",
      "direct": true
    },
    {
      "id": 76,
      "cat": 9,
      "desc": "Suelo evitar los conflictos en mayor medida",
      "direct": false
    },
    {
      "id": 77,
      "cat": 10,
      "desc": "Cuando tengo una buena idea para el negocio pero mi superior no la acepta es mejor dejarlo por la paz y no presionar el tema",
      "direct": false
    },
    {
      "id": 78,
      "cat": 10,
      "desc": "Si alguna decisión que se toma afecta mis labores procuro hablar con el responsable para llegar a un acuerdo que beneficie a las dos partes.",
      "direct": true
    },
    {
      "id": 79,
      "cat": 10,
      "desc": "Si un cliente o un miembro de mi equipo no entiende lo que le estoy explicando es necesario repetirle lo mismo muchas veces hasta que comprenda",
      "direct": false
    },
    {
      "id": 80,
      "cat": 10,
      "desc": "Si intento algo en una ocasión y no funciona prefiero busco otra manera de lograrlo aunque me lleve más tiempo que dejar de lado por completo la idea.",
      "direct": true
    },
    {
      "id": 81,
      "cat": 10,
      "desc": "Estoy seguro de las decisiones que tomo y busco defender mis ideas incluso con mis superiores",
      "direct": true
    },
    {
      "id": 82,
      "cat": 10,
      "desc": "Para vender una idea nueva es necesario preparar diferentes acercamientos que convenzan a los potenciales clientes",
      "direct": true
    },
    {
      "id": 83,
      "cat": 10,
      "desc": "Puedo conversar acerca de temas críticos con personas que no comparten mis puntos de vista sin que la conversación se torne conflictiva.",
      "direct": true
    },
    {
      "id": 84,
      "cat": 11,
      "desc": "Dentro de una institución es importante que existan reglas pero siempre debe haber la manera de manipularlas un poco.",
      "direct": false
    },
    {
      "id": 85,
      "cat": 11,
      "desc": "Suele ser mejor guiarse por el instinto que pensar y organizar mucho las cosas",
      "direct": false
    },
    {
      "id": 86,
      "cat": 11,
      "desc": "Tengo un método para hacer mi trabajo y no permito fácilmente que se modifique a menos que sea justificable",
      "direct": true
    },
    {
      "id": 87,
      "cat": 11,
      "desc": "Los supervisores no saben el trabajo que desempeño y sus retroalimentaciones suelen estar sesgadas",
      "direct": false
    },
    {
      "id": 88,
      "cat": 11,
      "desc": "Hasta el momento mi potencial ha estado desaprovechado por las empresas o lugares en los que he laborado",
      "direct": false
    },
    {
      "id": 89,
      "cat": 11,
      "desc": "Mi desarrollo profesional tiene un buen ritmo y he sabido aprovechar todas las oportunidades que se me han presentado",
      "direct": true
    },
    {
      "id": 90,
      "cat": 11,
      "desc": "El acoso laboral puede ser un problema grave y no se debe escatimar en medidas para prevenirlo",
      "direct": true
    },
    {
      "id": 91,
      "cat": 11,
      "desc": "Los valores institucionales que se inculcan a los empleados frecuentemente son transgredidos por los propios directivos",
      "direct": false
    },
    {
      "id": 92,
      "cat": 12,
      "desc": "Dentro de un equipo las tareas se deben dividir equitativamente aunque haya alguien que tenga más experiencia que los demás no deben asignársele más tareas",
      "direct": true
    },
    {
      "id": 93,
      "cat": 12,
      "desc": "Cuando un miembro del equipo no va a entregar algo a tiempo es mejor quitarle la responsabilidad en ese momento para entregar",
      "direct": false
    },
    {
      "id": 94,
      "cat": 12,
      "desc": "El momento y el lugar para retroalimentar a alguien no es importante cuando ya lleva varias reincidencias",
      "direct": false
    },
    {
      "id": 95,
      "cat": 12,
      "desc": "Considero que la confianza que se tengan los miembros de un equipo mejora si el ambiente laboral es bueno aun a costa de que en ocasiones pierdan tiempo en socializar.",
      "direct": true
    },
    {
      "id": 96,
      "cat": 12,
      "desc": "Las promociones de puesto y aumentos de salario sólo incumben al lder y a la persona que se lo ha ganado",
      "direct": false
    },
    {
      "id": 97,
      "cat": 12,
      "desc": "Los miembros de un equipo deben saber en todo momento si están cumpliendo con sus indicadores, es deber del lider explicarlos cuando haya dudas",
      "direct": true
    },
    {
      "id": 98,
      "cat": 12,
      "desc": "Detectar los talentos dentro del equipo es útil para avanzar mejor en conjunto",
      "direct": true
    },
    {
      "id": 99,
      "cat": 13,
      "desc": "El departamento de recursos humanos es el único responsable de retroalimentar a los trabajadores",
      "direct": false
    },
    {
      "id": 100,
      "cat": 13,
      "desc": "Con un lider la puntualidad debe ser flexible ya que las obligaciones que tiene le pueden retrasar en ocasiones",
      "direct": false
    },
    {
      "id": 101,
      "cat": 13,
      "desc": "Ser exigente es un modelo de liderazgo antiguo, es mejor ser flexible para no dañar el ambiente de trabajo",
      "direct": false
    },
    {
      "id": 102,
      "cat": 13,
      "desc": "Para mejorar la calidad del equipo el lder debe estar enterado de cómo realizar cada una de las actividades de los integrantes",
      "direct": true
    },
    {
      "id": 103,
      "cat": 13,
      "desc": "La retroalimentación que el equipo da al lider es tan importante como la que el lider da a al equipo",
      "direct": true
    },
    {
      "id": 104,
      "cat": 13,
      "desc": "Las tareas desafiantes y novedosas deben ser abordadas en conjunto por todo el equipo de trabajo incluyendo al lider",
      "direct": true
    },
    {
      "id": 105,
      "cat": 13,
      "desc": "Las ideas que un miembro del equipo tenga pueden llegar a ser igual de importantes que las que el lider proponga, aunque aceptarlas constantemente puede verse como falta de autoridad",
      "direct": true
    }
  ];

createVersion.getVersion = async (req, res) => {
  const newVersion = [];
  
  const order= [4, 11, 20, 31, 39, 47, 55, 63, 72, 80, 87, 95, 102, 3, 10, 19, 30, 38, 46, 54, 62, 71, 79, 86, 94, 101, 2, 9, 18, 29, 37, 45, 53, 61, 70, 78, 85, 93, 100, 1, 8, 17, 28, 36, 44, 52, 60, 69, 77, 84, 92, 99, 27, 26, 16, 25, 68, 15, 24, 35, 43, 51, 59, 67, 76, 91, 7, 14, 23, 34, 42, 50, 58, 66, 75, 83, 90, 98, 105, 6, 13, 22, 33, 41, 49, 57, 65, 74, 82, 89, 97, 104, 5, 12, 21, 32, 40, 48, 56, 64, 73, 81, 88, 96, 103];
  
  for (let i =1; i <= order.length; i++ ) {
    let index = order.findIndex( num => num === i);
     newVersion.push(questions[index]);
  }
  res.status(200).send(newVersion); 
}


export default createVersion;



