//Checkboxs
const checkboxList = document.querySelectorAll('.checkbox');

checkboxList.forEach((checkbox) =>{
  checkbox.addEventListener('click', function() {
    //Marcar o checkbox clicado
    const checkAll = document.querySelector('.checkAll')
    checkAll.classList.remove('some')
    checkbox.classList.toggle('checked')

    //Verificar se foi clicado o botão de seleção de todos
    if (checkbox.classList.contains('checkAll')) {
      var contCheckboxesTrue = 0;
      
      checkboxList.forEach((checkbox) => {
        //Verificar quantos estão marcados
        if (checkbox.classList.contains('checked')) contCheckboxesTrue++
      })
        //Subtração do botão de seleção de todos
        contCheckboxesTrue--;

        //Verificar qual é o parametro para marcar ou desmarcar
        if(contCheckboxesTrue == 0) checkboxToggleAll('check');
        else checkboxToggleAll('uncheck');
      
      
    } else {
      var contCheckboxesTrue = 0;
      var contCheckboxesFalse = 0;
      
      checkboxList.forEach((checkbox) => {
        //Verificar quantos estão marcados
        if (checkbox.classList.contains('checked') && !checkbox.classList.contains('checkAll')) contCheckboxesTrue++
        else if(!checkbox.classList.contains('checkAll')) contCheckboxesFalse++
      })
      console.log(`True ${contCheckboxesTrue}, false ${contCheckboxesFalse}`);
      if (contCheckboxesTrue == 3) {
        checkAll.classList.add('checked')
      } else if(contCheckboxesFalse > 0 && contCheckboxesTrue > 0) {
        checkAll.classList.add('some')
      } else {
        checkAll.classList.remove('some')
        checkAll.classList.remove('checked')
      }
    }
    
  })
})

function checkboxToggleAll(type) {
  if (type == 'check') {
    checkboxList.forEach((checkbox) => checkbox.classList.add('checked'))
  }  else {
    checkboxList.forEach((checkbox) => checkbox.classList.remove('checked'))
  }
}



//Radios
const radioList = document.querySelectorAll('.radio');

radioList.forEach((radio) =>{
  radio.addEventListener('click', function() {
    //Zerar todos os radios
    cleanRadios();
    //Colocar a classe de seleção somente no clicado
    radio.classList.add('selected')
  })
})

function cleanRadios() {
  radioList.forEach((radio) =>{
    radio.classList.remove('selected')
  })
}


//Select 
const selectList = document.querySelectorAll('.option');
//Pegando os valores de cada opção
const values = []
selectList.forEach((option) => {
  values.push(option.innerHTML)
})

selectList.forEach((option) => {
  option.addEventListener('click', () => {
    optionsMenu.classList.toggle('open-menu');
    const index = values.indexOf(option.innerHTML)
    values.splice(index, 1);
    values.sort();
    values.unshift(option.innerHTML);
    changeHTML();
    rotateArrow();
  })
})

function changeHTML() {
  selectList.forEach(function(option, index) {
    option.innerHTML = values[index];
  })  
}

const arrow = document.querySelector('.selected-option .arrow')
const optionsMenu = document.querySelector('.options-menu')

arrow.addEventListener('click', ()=> {
  optionsMenu.classList.toggle('open-menu');
  rotateArrow();
})

function rotateArrow() {
  arrow.classList.toggle('arrowUp');
}

document.querySelector('body').addEventListener('click',function(infos) {
  if (infos.target == arrow) {
    return
  }
  selectList.forEach((option) => {
    if (infos.target == option) {
      return
    }
  })
  if (optionsMenu.classList.contains('open-menu')) {
    optionsMenu.classList.remove('open-menu');
    rotateArrow();
  }
})




//Accordion

const accordionItems = document.querySelectorAll('.accordion .accordion-item')

accordionItems.forEach(function(item, index) {
    const accordionQuestion = item.querySelector('.item-question')
    accordionQuestion.addEventListener('click', () => {
      const accordionAnswer = item.querySelector('.item-answer')
      const accordionArrow = item.querySelector('.arrow')
      console.log(verifyAccordion(accordionAnswer));
      if (verifyAccordion(accordionAnswer)) {
        accordionAnswer.classList.remove('item-answer-show')
        accordionArrow.classList.remove('arrowUp')
      } else {
        removeAllAccordions()
        accordionAnswer.classList.add('item-answer-show')
        accordionArrow.classList.add('arrowUp')
      }
      
    })
})

function verifyAccordion(accordionAnswer) {
  if (accordionAnswer.classList.contains('item-answer-show')) {
    return true
  } else return false
}

function removeAllAccordions() {
  accordionItems.forEach(function(item, index) {
    const accordionQuestion = item.querySelector('.item-question')
    const accordionAnswer = item.querySelector('.item-answer')
    const accordionArrow = item.querySelector('.arrow')
    accordionAnswer.classList.remove('item-answer-show')
    accordionArrow.classList.remove('arrowUp')
})
}