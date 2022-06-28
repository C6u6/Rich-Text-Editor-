var text = document.getElementById('textarea')

function FontType(){
    let fontType = document.getElementById('font-type').value

    if(fontType !== 'sans-serif'){ return text.style.fontFamily = 'serif'}
    text.style.fontFamily = 'sans-serif'  // text(document).style(working with css).property = new value
}

function FontSize(){
    let fontSize = document.getElementById('text-size').value

    if(fontSize == 10){ return text.style.fontSize = '10px'}
    if(fontSize == 15){ return text.style.fontSize = '15px'}
    if(fontSize == 20){ return text.style.fontSize = '20px'}
    if(fontSize == 25){ return text.style.fontSize = '25px'}
    if(fontSize == 30){ return text.style.fontSize = '30px'}
}

function focusOutOfSelect(){
    text.focus()
}

function bold(){
    let checkBold = document.getElementById('input-1').checked

    if(checkBold){ return text.style.fontWeight = 700 }
    text.style.fontWeight = 100
}

function italic(){
    let checkItalic = document.getElementById('input-2').checked

    if(checkItalic){ return text.style.fontStyle = 'italic' }
    text.style.fontStyle = 'initial'
}

function underline(){
    let checkUnderline = document.getElementById('input-3').checked

    if(checkUnderline){ return text.style.textDecoration = 'underline' }
    text.style.textDecoration = 'none'
}

function strickthrough(){
    let checkStrickthrough = document.getElementById('input-4').checked

    if(checkStrickthrough){ return text.style.textDecoration = 'line-through'}
    text.style.textDecoration = 'none'
}